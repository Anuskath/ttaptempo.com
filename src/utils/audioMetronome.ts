// High-Precision Web Audio Metronome Engine (Zero latency, synthetic sound generation)

export type SoundType = 'beep' | 'woodblock' | 'cowbell' | 'hihat' | 'kick';

class MetronomeAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private bpm: number = 120;
  private timeSignature: number = 4; // beats per measure
  private currentBeat: number = 0;
  private nextBeatTime: number = 0;
  private timerId: number | null = null;
  private soundType: SoundType = 'woodblock';
  private volume: number = 0.8;
  private onBeatCallback: ((beatIndex: number, totalBeats: number) => void) | null = null;

  private initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public setSound(sound: SoundType) {
    this.soundType = sound;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  public setTimeSignature(beats: number) {
    this.timeSignature = beats;
    this.currentBeat = 0;
  }

  public setOnBeat(cb: (beatIndex: number, totalBeats: number) => void) {
    this.onBeatCallback = cb;
  }

  public setBpm(newBpm: number) {
    this.bpm = Math.max(20, Math.min(360, newBpm));
  }

  public start(currentBpm: number) {
    this.initContext();
    if (!this.audioCtx) return;

    this.bpm = currentBpm;
    this.isPlaying = true;
    this.currentBeat = 0;
    this.nextBeatTime = this.audioCtx.currentTime + 0.05;
    this.scheduleTicks();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private scheduleTicks = () => {
    if (!this.isPlaying || !this.audioCtx) return;

    // Lookahead: schedule events that fall within the next 100ms
    while (this.nextBeatTime < this.audioCtx.currentTime + 0.1) {
      const isAccent = this.currentBeat === 0;
      this.playTone(this.nextBeatTime, isAccent);
      
      if (this.onBeatCallback) {
        const beatNum = this.currentBeat;
        const total = this.timeSignature;
        const delayMs = Math.max(0, (this.nextBeatTime - this.audioCtx.currentTime) * 1000);
        window.setTimeout(() => {
          if (this.isPlaying && this.onBeatCallback) {
            this.onBeatCallback(beatNum, total);
          }
        }, delayMs);
      }

      const secondsPerBeat = 60.0 / this.bpm;
      this.nextBeatTime += secondsPerBeat;
      this.currentBeat = (this.currentBeat + 1) % this.timeSignature;
    }

    this.timerId = window.setTimeout(this.scheduleTicks, 25);
  };

  private playTone(time: number, isAccent: boolean) {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;

    switch (this.soundType) {
      case 'beep':
        this.synthesizeBeep(ctx, time, isAccent);
        break;
      case 'woodblock':
        this.synthesizeWoodblock(ctx, time, isAccent);
        break;
      case 'cowbell':
        this.synthesizeCowbell(ctx, time, isAccent);
        break;
      case 'hihat':
        this.synthesizeHiHat(ctx, time, isAccent);
        break;
      case 'kick':
        this.synthesizeKick(ctx, time, isAccent);
        break;
      default:
        this.synthesizeWoodblock(ctx, time, isAccent);
    }
  }

  private synthesizeBeep(ctx: AudioContext, time: number, isAccent: boolean) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(isAccent ? 1200 : 800, time);
    
    gain.gain.setValueAtTime(this.volume * (isAccent ? 0.9 : 0.6), time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  private synthesizeWoodblock(ctx: AudioContext, time: number, isAccent: boolean) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isAccent ? 1050 : 700, time);
    osc.frequency.exponentialRampToValueAtTime(isAccent ? 600 : 400, time + 0.04);

    gain.gain.setValueAtTime(this.volume * (isAccent ? 1.0 : 0.7), time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  private synthesizeCowbell(ctx: AudioContext, time: number, isAccent: boolean) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'square';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(isAccent ? 840 : 587, time);
    osc2.frequency.setValueAtTime(isAccent ? 1260 : 845, time);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isAccent ? 1000 : 800, time);
    filter.Q.value = 3;

    gain.gain.setValueAtTime(this.volume * 0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.08);
    osc2.stop(time + 0.08);
  }

  private synthesizeHiHat(ctx: AudioContext, time: number, isAccent: boolean) {
    const bufferSize = ctx.sampleRate * 0.04;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(isAccent ? 8000 : 6000, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(this.volume * (isAccent ? 0.7 : 0.45), time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(time);
    noise.stop(time + 0.04);
  }

  private synthesizeKick(ctx: AudioContext, time: number, isAccent: boolean) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(isAccent ? 150 : 120, time);
    osc.frequency.exponentialRampToValueAtTime(30, time + 0.1);

    gain.gain.setValueAtTime(this.volume * (isAccent ? 1.0 : 0.7), time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.12);
  }
}

export const metronomeEngine = new MetronomeAudioEngine();
