export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "What is a Tap Tempo BPM tool?",
    answer: "A Tap Tempo BPM tool is an online utility that calculates the tempo of music in Beats Per Minute (BPM) based on the rhythm at which you tap a key, button, or touch screen. It measures the precise millisecond intervals between consecutive taps and computes a rolling average tempo."
  },
  {
    question: "How do I use this Tap Tempo tool on mobile and desktop?",
    answer: "On desktop computers, you can tap along to the beat using your Spacebar, Enter key, or by clicking the central tap pad with your mouse. On mobile phones and tablets, simply tap anywhere on the large tactile pad with your finger. The tool features haptic vibration feedback for a satisfying tactile sensation."
  },
  {
    question: "How many times should I tap to get an accurate BPM?",
    answer: "For most songs, 4 to 8 consistent taps on the beat (quarter notes) provide an accuracy within ±0.5 BPM. Tapping for 12 to 16 taps yields near-perfect accuracy (within ±0.1 BPM) by filtering out slight human timing deviations."
  },
  {
    question: "What is the difference between BPM and Milliseconds (ms)?",
    answer: "BPM measures the frequency of musical beats occurring in 60 seconds (1 minute). Milliseconds (ms) represent the exact duration of each beat interval. The formula is: Beat Duration (ms) = 60,000 / BPM. For example, at 120 BPM, one quarter note lasts exactly 500 milliseconds."
  },
  {
    question: "How do music producers use the Delay & Reverb calculator?",
    answer: "Audio engineers and music producers use the delay and reverb sync calculator to synchronize time-based effects (like echo delays and reverb pre-delays) with their song's tempo. Matching delay times (such as 1/4 note or 1/8 note dotted) ensures reflections align harmoniously without clashing with the groove."
  },
  {
    question: "Does this Tap Tempo tool have an audio metronome?",
    answer: "Yes! Once you tap your tempo, you can immediately click the 'Play Metronome' button to hear your BPM played back with zero-latency synthesized audio clicks, woodblocks, or 808 kicks. You can also select time signatures like 4/4, 3/4, or 6/8."
  },
  {
    question: "Is this website completely free to use?",
    answer: "Yes, 100% free with unlimited usage. There are no sign-ups, no user accounts, no subscriptions, and no paywalls. All calculations and audio processing run entirely inside your browser."
  },
  {
    question: "What are the common musical tempo markings like Allegro and Andante?",
    answer: "Traditional Italian tempo markings indicate the speed of a piece. Common markings include Largo (45–59 BPM, broad and slow), Adagio (66–75 BPM, slow and stately), Andante (76–107 BPM, walking pace), Moderato (108–119 BPM, moderate speed), Allegro (128–155 BPM, fast and lively), and Presto (176–199 BPM, very fast)."
  },
  {
    question: "What if I tap a tempo and want to reset the counter?",
    answer: "You can click the 'Reset' button or simply press the 'R' key on your keyboard. Alternatively, if you stop tapping for 3 seconds, the smart auto-reset will automatically clear the previous session so your next tap starts fresh."
  },
  {
    question: "Can I fine-tune the BPM after tapping?",
    answer: "Yes! Use the +1, -1, +5, and -5 nudge buttons, the interactive tempo slider, or the Up/Down arrow keys on your keyboard to dial in the exact BPM you need."
  }
];
