export interface LocaleData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  ui: {
    heroBadge: string;
    heroTitlePrefix: string;
    heroTitleGradient: string;
    heroSubtitle: string;
    tapInitial: string;
    tapButtonMain: string;
    tapButtonSub: string;
    helperBadge: string;
    nudgeLabel: string;
    resetLabel: string;
    statsInterval: string;
    statsFrequency: string;
    statsTaps: string;
    statsConsistency: string;
    steady: string;
    // Metronome
    metronomeTitle: string;
    metronomeSubtitle: string;
    play: string;
    stop: string;
    soundLabel: string;
    timeSigLabel: string;
    volumeLabel: string;
    sounds: {
      woodblock: string;
      beep: string;
      cowbell: string;
      hihat: string;
      kick: string;
    };
    // Delay Table
    delayBadge: string;
    delayTitle: string;
    delaySubtitle: string;
    delaySyncingAt: string;
    noteValue: string;
    normalMs: string;
    dottedMs: string;
    tripletMs: string;
    frequencyHz: string;
    copiedToast: string;
    // Tempo Markings
    tempoGuideBadge: string;
    tempoGuideTitle: string;
    tempoGuideSubtitle: string;
    tableMarking: string;
    tableRange: string;
    tableDescription: string;
  };
  article: {
    badge: string;
    h1: string;
    p1: string;
    p2: string;
    h2Algorithm: string;
    pAlgorithm1: string;
    pAlgorithm2: string;
    formulaTitle: string;
    formulaText: string;
    formulaExample: string;
    h2Metronome: string;
    pMetronome: string;
    h2Delay: string;
    pDelay: string;
    delayPoints: string[];
    h2Steps: string;
    steps: string[];
  };
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export const TRANSLATIONS: Record<string, LocaleData> = {
  en: {
    meta: {
      title: "Tap Tempo - Free BPM Counter, BPM Tapper & Metronome | ttaptempo.com",
      description: "Free online tap tempo and bpm counter. Tap any key to calculate bpm tap tempo, listen with tap tempo metronome, and calculate delay pedal with tap tempo timings.",
      keywords: "tap tempo, bpm tapper, tempo tap, bpm tap, bpm counter, tap tempo online, tap tempo metronome, tap tempo bpm, metronome tap tempo, bpm tap tempo, online tap tempo, delay pedal with tap tempo"
    },
    ui: {
      heroBadge: "Sub-millisecond Precision • No Signup Required",
      heroTitlePrefix: "Online",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Tap along to any song, beat, or metronome to measure exact Beats Per Minute. Features instant audio playback, delay & reverb sync, and classical tempo markings.",
      tapInitial: "Tap to measure tempo",
      tapButtonMain: "TAP HERE OR PRESS SPACEBAR",
      tapButtonSub: "Tap steadily to the rhythm of any song or beat",
      helperBadge: "Any Key to Tap",
      nudgeLabel: "Nudge:",
      resetLabel: "Reset",
      statsInterval: "Interval",
      statsFrequency: "Frequency",
      statsTaps: "Taps",
      statsConsistency: "Consistency",
      steady: "Steady",
      metronomeTitle: "Interactive Web Audio Metronome",
      metronomeSubtitle: "Listen to your tapped tempo played back with synthesized acoustics, time signatures, and downbeat accents.",
      play: "Play Metronome",
      stop: "Stop Metronome",
      soundLabel: "Sound",
      timeSigLabel: "Time Signature",
      volumeLabel: "Volume",
      sounds: { woodblock: "Woodblock", beep: "Digital Beep", cowbell: "808 Cowbell", hihat: "Studio Hi-Hat", kick: "Punchy Kick" },
      delayBadge: "DAW & Studio Sync • Ableton / FL / Logic",
      delayTitle: "Delay & Reverb Time Calculator (ms)",
      delaySubtitle: "Synchronize your audio plugin pre-delays, echoes, and LFO modulation times to the exact tempo. Click any value to copy.",
      delaySyncingAt: "Syncing at:",
      noteValue: "Note Value",
      normalMs: "Normal (ms)",
      dottedMs: "Dotted (ms)",
      tripletMs: "Triplet (ms)",
      frequencyHz: "Frequency (Hz)",
      copiedToast: "Copied to clipboard!",
      tempoGuideBadge: "Classical Italian Markings",
      tempoGuideTitle: "Italian Tempo Markings Reference Guide",
      tempoGuideSubtitle: "Standard Italian musical terms indicating pace, mood, and beats per minute range.",
      tableMarking: "Marking",
      tableRange: "BPM Range",
      tableDescription: "Musical Meaning"
    },
    article: {
      badge: "Comprehensive Technical Guide",
      h1: "Tap Tempo & BPM Counter: The Complete Guide to Accurate Rhythm Timing",
      p1: "Whether you are an electronic music producer adjusting groove swing in your digital audio workstation, a performing DJ synchronizing tracks on CDJs, a guitarist dialing in a delay pedal with tap tempo, or a live drummer locked into a stage click track, knowing your exact musical speed is non-negotiable. Our free online tap tempo utility is designed to eliminate guesswork by providing an instant, studio-grade bpm tapper and bpm counter accessible directly in your web browser with zero latency.",
      p2: "A traditional physical metronome requires manual dial turning, but modern music production frequently requires discovering the unknown tempo of an existing recording or live performance. By simply using our tap tempo online interface—tapping your keyboard spacebar, mouse, or smartphone screen along to the pulse of a song—you can calculate precise tap tempo bpm in just a few seconds.",
      h2Algorithm: "How the Online Tap Tempo Algorithm Calculates BPM",
      pAlgorithm1: "Musical tempo is defined as Beats Per Minute (BPM), representing the number of quarter-note pulses that occur in a 60-second window. When you perform a tempo tap, the browser's High Resolution Time API (window.performance.now()) captures the sub-millisecond timestamp of each strike.",
      pAlgorithm2: "Unlike primitive counters that merely measure the interval between two taps, our advanced bpm tap tempo engine implements a weighted moving average with human jitter compensation. Human fingers naturally possess a mechanical latency variance of 10 to 30 milliseconds. To counter this, our system analyzes the last 16 consecutive tap intervals, eliminates extreme statistical anomalies, and produces an ultra-stable, smooth readout.",
      formulaTitle: "Standard Mathematical Formula",
      formulaText: "BPM = 60,000 / Average Interval (ms)",
      formulaExample: "Example: A 500 ms interval = 60,000 / 500 = 120 BPM",
      h2Metronome: "Synchronized Tap Tempo Metronome for Studio & Stage",
      pMetronome: "A frequent flaw in most online tools is that once you measure a speed, you have no way to verify whether your calculated tempo truly matches the music. Our integrated tap tempo metronome bridges this gap by offering immediate, drift-free audio playback generated by the Web Audio API.",
      h2Delay: "Setting Up a Delay Pedal with Tap Tempo & DAW Plugins",
      pDelay: "Guitarists frequently rely on a delay pedal with tap tempo (such as the Boss DD-8, Strymon Timeline, TC Electronic Flashback, or Line 6 DL4) to lock rhythmic repeats to the drummer's groove. In recording software like Ableton Live, FL Studio, Logic Pro, or Pro Tools, setting analog rack gear requires knowing the exact millisecond values:",
      delayPoints: [
        "Quarter Note (1/4): Fundamental heartbeat of the tempo (60,000 / BPM).",
        "Dotted Eighth Note (1/8d): The quintessential rhythmic echo bounce (Quarter Note × 0.75).",
        "Triplet Eighth Note (1/8t): Essential for swinging blues, reggae dub echoes, and hip-hop delays (Quarter Note × 0.3333).",
        "Sixteenth Note (1/16): Tight slapback echoes for rockabilly vocals and funky rhythm guitar chops (Quarter Note / 4)."
      ],
      h2Steps: "Step-by-Step: How to Use the BPM Counter Like a Pro",
      steps: [
        "Identify the Main Beat: Listen closely for the kick drum, bassline, or snare on beats 2 and 4.",
        "Start Tapping Consistently: Tap the spacebar or phone screen steadily in sync with the beat.",
        "Tap for 8 to 16 Beats: Sustaining 8 to 12 taps allows the rolling average to stabilize and filter finger latency.",
        "Verify with the Metronome: Trigger the audio metronome to confirm synchronization.",
        "Copy and Apply: Use the 1-click 'Copy' button to paste milliseconds or BPM into your DAW."
      ]
    },
    faqs: [
      { category: "Basics", question: "What does tap tempo mean?", answer: "Tap tempo is a feature in metronomes, DAWs, and effects hardware that allows musicians to set or discover the speed of a song by tapping a button or key in time with the beat. It measures the milliseconds between taps to calculate the exact BPM." },
      { category: "How-To", question: "How to find tap tempo?", answer: "Open ttaptempo.com, listen to the pulse of your music, and tap along steadily on your spacebar or phone screen for 4 to 8 consecutive beats. The tool instantly computes the exact BPM." },
      { category: "Music Theory", question: "What are the 7 types of tempo?", answer: "The 7 classical Italian tempo markings from slowest to fastest are: Largo (40-60 BPM), Adagio (66-76 BPM), Andante (76-108 BPM), Moderato (108-120 BPM), Allegro (120-156 BPM), Vivace (156-176 BPM), and Presto (168-200+ BPM)." },
      { category: "Concepts", question: "Is BPM tap tempo?", answer: "No. BPM (Beats Per Minute) is the unit of measurement for tempo. Tap tempo is the method or interactive tool used to measure or set that BPM value." },
      { category: "How-To", question: "How do I tap tempo?", answer: "Listen to the downbeat, tap the spacebar or touch screen on every quarter-note beat, and maintain a relaxed, consistent rhythm for 8 to 12 taps for optimal sub-BPM accuracy." },
      { category: "Gear & Pedals", question: "What is the best tap tempo delay pedal?", answer: "Top-rated pedals include the Strymon Timeline, Boss DD-500/DD-8, TC Electronic Flashback 2, and Line 6 DL4 MkII, celebrated for studio fidelity and dedicated tap footswitches." },
      { category: "Calculation", question: "How is tempo calculated?", answer: "Tempo is calculated using the formula: BPM = 60,000 / Average Interval (ms). For instance, a 500 ms interval equals exactly 120 BPM." },
      { category: "DAW & Tech", question: "How to tap tempo logic?", answer: "In Apple Logic Pro, click repeatedly on the Tempo display in the top LCD bar or use Option + Command + T. In software code, it measures delta timestamps using performance.now()." },
      { category: "Concepts", question: "How many taps per minute?", answer: "Taps per minute equals BPM when tapping on quarter notes. At 120 BPM, you make exactly 120 taps in 60 seconds (2 taps per second, spaced 500 ms apart)." },
      { category: "Music Theory", question: "What is 3/4 tempo called?", answer: "3/4 is technically a triple meter time signature called Waltz Time. Its musical tempo is often marked as Tempo di Valse (typically 150-180 BPM for quarter notes)." },
      { category: "Music Theory", question: "Which tempo is very fast?", answer: "Presto (168-200 BPM) and Prestissimo (200+ BPM) are classical very fast tempos. In modern genres, Drum & Bass (170-175 BPM) and Speedcore (300+ BPM) are extremely fast." },
      { category: "Production", question: "Why is 128 BPM so popular?", answer: "128 BPM is a binary power of two (2^7), aligns cleanly with 468.75 ms delay grids, synchronizes with the elevated human heart rate during dancing, and standardizes DJ mixing." },
      { category: "Concepts", question: "How many BPM is 1 minute?", answer: "1 minute is a unit of duration, while BPM is a rate of speed. In 1 minute of music at 120 BPM, exactly 120 beats occur." },
      { category: "Concepts", question: "Is tap tempo the same as BPM?", answer: "No. BPM is the numerical measurement of tempo, whereas tap tempo is the interactive input method used to calculate it." },
      { category: "DAW & Tech", question: "How to tap tempo pro tools?", answer: "In Pro Tools, press Ctrl + 1 (Cmd + 1 on Mac) for the Transport Window, turn off the Conductor Track, highlight the Tempo field, and tap the 'T' key on your keyboard." }
    ]
  },

  es: {
    meta: {
      title: "Tap Tempo - Contador de BPM y Metrónomo Online Gratis | ttaptempo.com",
      description: "Tap tempo y contador de BPM online gratis. Pulsa cualquier tecla o pantalla para calcular el tempo BPM, escuchar el metrónomo y sincronizar pedales de delay.",
      keywords: "tap tempo, contador de bpm, calcular bpm, tempo tap, metronomo tap tempo, pulsador de bpm, delay pedal tap tempo, medir bpm musica, bpm tap tempo online"
    },
    ui: {
      heroBadge: "Precisión de Sub-Milisegundo • Sin Registro",
      heroTitlePrefix: "Online",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Pulsa al ritmo de cualquier canción, beat o metrónomo para medir los Beats Por Minuto (BPM) exactos. Incluye metrónomo de audio, sincronización de delay y marcas de tempo.",
      tapInitial: "Pulsa para medir el tempo",
      tapButtonMain: "PULSA AQUÍ O BARRA ESPACIADORA",
      tapButtonSub: "Pulsa de forma constante al ritmo de la música",
      helperBadge: "Cualquier tecla para pulsar",
      nudgeLabel: "Ajuste:",
      resetLabel: "Reiniciar",
      statsInterval: "Intervalo",
      statsFrequency: "Frecuencia",
      statsTaps: "Pulsaciones",
      statsConsistency: "Consistencia",
      steady: "Constante",
      metronomeTitle: "Metrónomo Interactivo Web Audio",
      metronomeSubtitle: "Escucha el tempo medido reproducido con sonido sintetizado, compases y acento en el primer tiempo.",
      play: "Iniciar Metrónomo",
      stop: "Detener Metrónomo",
      soundLabel: "Sonido",
      timeSigLabel: "Compás",
      volumeLabel: "Volumen",
      sounds: { woodblock: "Bloque de Madera", beep: "Beep Digital", cowbell: "Cencerro 808", hihat: "Hi-Hat Estudio", kick: "Bombo Potente" },
      delayBadge: "Sincronización DAW • Ableton / FL Studio / Logic",
      delayTitle: "Calculadora de Tiempo de Delay y Reverb (ms)",
      delaySubtitle: "Sincroniza pre-delays, ecos y LFOs al tempo exacto. Haz clic en cualquier valor para copiarlo.",
      delaySyncingAt: "Sincronizando a:",
      noteValue: "Figura Musical",
      normalMs: "Normal (ms)",
      dottedMs: "Con Puntillo (ms)",
      tripletMs: "Tresillo (ms)",
      frequencyHz: "Frecuencia (Hz)",
      copiedToast: "¡Copiado al portapapeles!",
      tempoGuideBadge: "Marcas Clásicas Italianas",
      tempoGuideTitle: "Guía de Marcas de Tempo Italianas",
      tempoGuideSubtitle: "Términos musicales tradicionales en italiano que indican velocidad, carácter y rango de BPM.",
      tableMarking: "Marca",
      tableRange: "Rango BPM",
      tableDescription: "Significado Musical"
    },
    article: {
      badge: "Guía Técnica Completa en Español",
      h1: "Tap Tempo y Contador de BPM: La Guía Definitiva para Músicos y Productores",
      p1: "Tanto si eres un productor de música electrónica ajustando el swing en tu DAW, un DJ mezclando pistas en directo, un guitarrista configurando un pedal de delay con tap tempo o un baterista con claqueta, conocer el tempo exacto de una canción es fundamental. Nuestro tap tempo online gratis te ofrece un contador de BPM con precisión milimétrica directamente en tu navegador.",
      p2: "En lugar de adivinar o girar diales analógicos, nuestro sistema analiza el intervalo entre tus pulsaciones en la barra espaciadora o pantalla táctil, calculando el BPM exacto en pocos segundos sin necesidad de crear cuenta ni instalar aplicaciones.",
      h2Algorithm: "¿Cómo Calcula el BPM el Algoritmo de Tap Tempo?",
      pAlgorithm1: "El tempo musical se mide en pulsaciones por minuto (BPM). Cuando pulsas la tecla, la API W3C High Resolution Time registra la marca de tiempo exacta en sub-milisegundos.",
      pAlgorithm2: "Nuestro algoritmo aplica una media móvil ponderada sobre las últimas 16 pulsaciones, compensando la pequeña variación mecánica natural de los dedos humanos (10 a 25 ms) para arrojar una lectura ultrasuave y precisa.",
      formulaTitle: "Fórmula Matemática Estándar",
      formulaText: "BPM = 60.000 / Intervalo Medio (ms)",
      formulaExample: "Ejemplo: Un intervalo de 500 ms = 60.000 / 500 = 120 BPM",
      h2Metronome: "Metrónomo Sincronizado para Estudio y Directo",
      pMetronome: "Tras medir el tempo, puedes activar al instante nuestro metrónomo Web Audio para escuchar clics sin latencia en compases 4/4, 3/4 o 6/8 con acento en el primer tiempo.",
      h2Delay: "Ajuste de Pedales de Delay con Tap Tempo y Plugins DAW",
      pDelay: "Pedales como el Boss DD-8, Strymon Timeline o TC Flashback permiten fijar el eco mediante tap. Para configurarlos en milisegundos en software de grabación:",
      delayPoints: [
        "Negra (1/4): El pulso principal (60.000 / BPM).",
        "Corchea con puntillo (1/8d): El clásico eco rítmico estilo U2 (Negra × 0,75).",
        "Tresillo de corchea (1/8t): Esencial para grooves de blues, reggae y hip-hop (Negra × 0,3333).",
        "Semicorchea (1/16): Ecos slapback rápidos para voces y guitarras funk (Negra / 4)."
      ],
      h2Steps: "Paso a Paso: Cómo Medir BPM Como un Profesional",
      steps: [
        "Identifica el pulso principal escuchando el bombo o la caja.",
        "Pulsa la barra espaciadora o la pantalla al ritmo de la música.",
        "Mantén el ritmo durante 8 a 12 pulsaciones para estabilizar el cálculo.",
        "Verifica el tempo activando el metrónomo de audio integrado.",
        "Copia los BPM o milisegundos para aplicarlos en tu DAW o pedal."
      ]
    },
    faqs: [
      { category: "Básicos", question: "¿Qué significa tap tempo?", answer: "Tap tempo es una función que permite calcular el tempo (BPM) de una canción pulsando un botón al ritmo de la música en lugar de introducir el número manualmente." },
      { category: "Cómo Usar", question: "¿Cómo encontrar el tap tempo de una canción?", answer: "Abre ttaptempo.com, escucha el ritmo de la canción y pulsa la barra espaciadora o la pantalla durante 4 a 8 tiempos seguidos. La herramienta calculará los BPM exactos al instante." },
      { category: "Teoría", question: "¿Cuáles son los 7 tipos de tempo?", answer: "Los 7 tempos clásicos principales son: Largo (40-60 BPM), Adagio (66-76 BPM), Andante (76-108 BPM), Moderato (108-120 BPM), Allegro (120-156 BPM), Vivace (156-176 BPM) y Presto (168-200+ BPM)." },
      { category: "Conceptos", question: "¿Es lo mismo BPM que tap tempo?", answer: "No. BPM (Beats Por Minuto) es la unidad que mide la velocidad. Tap tempo es el método o herramienta interactiva para medirla." },
      { category: "Cómo Usar", question: "¿Cómo pulsar el tempo correctamente?", answer: "Escucha el bombo y la caja, pulsa en cada tiempo con naturalidad y mantén 8 a 12 pulsaciones seguidas para eliminar cualquier variación en tus dedos." },
      { category: "Equipo", question: "¿Cuál es el mejor pedal de delay con tap tempo?", answer: "El Strymon Timeline, Boss DD-500, TC Electronic Flashback 2 y Line 6 DL4 MkII son los pedales de delay con tap tempo más reconocidos en la industria musical." },
      { category: "Cálculo", question: "¿Cómo se calcula el tempo matemáticamente?", answer: "Se divide 60.000 entre el tiempo en milisegundos entre pulsaciones: BPM = 60.000 / Intervalo (ms). Si el intervalo es de 500 ms, el tempo es 120 BPM." },
      { category: "DAW", question: "¿Cómo hacer tap tempo en Logic Pro?", answer: "En Apple Logic Pro, haz clic repetidamente sobre el número de tempo en la barra LCD o usa el atajo Option + Command + T." },
      { category: "Conceptos", question: "¿Cuántas pulsaciones son por minuto?", answer: "Equivale exactamente al BPM en negras: a 120 BPM realizarás exactamente 120 pulsaciones en un minuto (2 pulsaciones por segundo)." },
      { category: "Teoría", question: "¿Cómo se llama el tempo en compás 3/4?", answer: "3/4 es un compás ternario comúnmente llamado tiempo de vals (Tempo di Valse), con un rango habitual de 150 a 180 BPM en negras." },
      { category: "Teoría", question: "¿Qué tempo se considera muy rápido?", answer: "Presto (168-200 BPM) y Prestissimo (200+ BPM). En música electrónica contemporánea, el Drum and Bass (170-175 BPM) es muy rápido." },
      { category: "Producción", question: "¿Por qué es tan popular el tempo de 128 BPM?", answer: "128 es potencia binaria exacta (2^7), cuadra perfectamente con las cuadrículas de audio (468,75 ms), coincide con el ritmo cardíaco eufórico y estandariza las mezclas de DJs de música electrónica." },
      { category: "Conceptos", question: "¿Cuántos BPM tiene 1 minuto?", answer: "Un minuto es una medida de duración, mientras que BPM es una frecuencia. En un minuto a 120 BPM caben exactamente 120 pulsos." },
      { category: "Conceptos", question: "¿El tap tempo es igual que el BPM?", answer: "No. El tap tempo es la acción de medir pulsando; el BPM es el valor numérico resultante." },
      { category: "DAW", question: "¿Cómo hacer tap tempo en Pro Tools?", answer: "Abre la ventana de transporte con Ctrl + 1 (Cmd + 1 en Mac), desactiva el modo director, selecciona el campo de Tempo y pulsa repetidamente la tecla 'T'." }
    ]
  },

  pt: {
    meta: {
      title: "Tap Tempo - Contador de BPM e Metrônomo Online Grátis | ttaptempo.com",
      description: "Tap tempo e contador de BPM online grátis. Toque na tela ou teclado para calcular o tempo da música, ouvir no metrônomo e sincronizar pedais de delay.",
      keywords: "tap tempo, contador de bpm, calcular bpm, marcador de tempo, metronomo online, bpm tap, delay tap tempo pedal, batidas por minuto online"
    },
    ui: {
      heroBadge: "Precisão de Sub-Milissegundo • Sem Cadastro",
      heroTitlePrefix: "Online",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Toque no ritmo de qualquer música ou batida para medir as Batidas Por Minuto (BPM) com exatidão. Inclui metrônomo Web Audio, cálculo de delay e marcas de tempo.",
      tapInitial: "Toque para medir o tempo",
      tapButtonMain: "TOQUE AQUI OU BARRA DE ESPAÇO",
      tapButtonSub: "Toque de maneira constante acompanhando a batida",
      helperBadge: "Qualquer tecla para tocar",
      nudgeLabel: "Ajuste:",
      resetLabel: "Zerar",
      statsInterval: "Intervalo",
      statsFrequency: "Frequência",
      statsTaps: "Batidas",
      statsConsistency: "Consistência",
      steady: "Firme",
      metronomeTitle: "Metrônomo Web Audio Interativo",
      metronomeSubtitle: "Ouça o tempo medido com cliques sintetizados, compassos variados e acento no primeiro tempo.",
      play: "Tocar Metrônomo",
      stop: "Parar Metrônomo",
      soundLabel: "Som",
      timeSigLabel: "Fórmula de Compasso",
      volumeLabel: "Volume",
      sounds: { woodblock: "Bloco de Madeira", beep: "Beep Digital", cowbell: "Cowbell 808", hihat: "Hi-Hat Studio", kick: "Bumbo Punch" },
      delayBadge: "Sincronia DAW • Ableton / FL / Logic",
      delayTitle: "Calculadora de Tempo de Delay e Reverb (ms)",
      delaySubtitle: "Sincronize repetições de eco e pré-delays de reverb no tempo exato. Clique em qualquer valor para copiar.",
      delaySyncingAt: "Sincronizando em:",
      noteValue: "Figura Rítmica",
      normalMs: "Normal (ms)",
      dottedMs: "Pontuada (ms)",
      tripletMs: "Tercina (ms)",
      frequencyHz: "Frequência (Hz)",
      copiedToast: "Copiado para a área de transferência!",
      tempoGuideBadge: "Marcas Clássicas Italianas",
      tempoGuideTitle: "Guia de Andamentos e Marcas de Tempo",
      tempoGuideSubtitle: "Termos musicais italianos que indicam a velocidade e expressão da composição musical.",
      tableMarking: "Marcação",
      tableRange: "Faixa de BPM",
      tableDescription: "Significado Musical"
    },
    article: {
      badge: "Guia Técnico em Português",
      h1: "Tap Tempo e Contador de BPM: O Guia Completo para Músicos e Produtores",
      p1: "Para quem produz música eletrônica, toca bateria ao vivo com metrônomo na igreja ou show, ou regula um pedal de delay na guitarra, descobrir o andamento preciso de uma faixa é indispensável. Nossa ferramenta de tap tempo online gratuita elimina dúvidas fornecendo cálculo de BPM de estúdio direto no navegador com zero latência.",
      p2: "Sem necessidade de criar conta ou baixar aplicativos, basta tocar na barra de espaço do computador ou na tela do celular no ritmo da música para obter o BPM e os milissegundos correspondentes em instantes.",
      h2Algorithm: "Como Funciona o Cálculo do Algoritmo de Tap Tempo",
      pAlgorithm1: "O andamento musical é expresso em Batidas Por Minuto (BPM). Ao tocar na tela, a API High Resolution Time registra o momento exato em frações de milissegundo.",
      pAlgorithm2: "Para anular as variações naturais dos dedos humanos (10 a 25 ms), nosso algoritmo aplica uma média móvel ponderada com base nas últimas 16 batidas, garantindo um resultado estável e preciso.",
      formulaTitle: "Fórmula Matemática",
      formulaText: "BPM = 60.000 / Intervalo Médio (ms)",
      formulaExample: "Exemplo: 500 ms de intervalo = 60.000 / 500 = 120 BPM",
      h2Metronome: "Metrônomo Integrado com Áudio Sintetizado",
      pMetronome: "Após descobrir a velocidade da música, você pode ativar o metrônomo integrado com acento no primeiro tempo e diferentes compassos (4/4, 3/4, 6/8).",
      h2Delay: "Configuração de Pedal de Delay com Tap Tempo e DAWs",
      pDelay: "Pedais como Boss DD-8, Strymon Timeline ou TC Flashback se beneficiam de divisões rítmicas exatas em milissegundos:",
      delayPoints: [
        "Semínima (1/4): A pulsação base da música (60.000 / BPM).",
        "Colcheia Pontuada (1/8d): O famoso efeito de eco galopante (Semínima × 0,75).",
        "Tercina de Colcheia (1/8t): Muito usada em blues, reggae e hip-hop (Semínima × 0,3333).",
        "Semicolcheia (1/16): Ecos curtos para voz e guitarra funk (Semínima / 4)."
      ],
      h2Steps: "Passo a Passo para Medir o BPM com Precisão",
      steps: [
        "Identifique a pulsação da música focando no bumbo ou caixa.",
        "Toque ritmicamente na tela ou barra de espaço acompanhando o ritmo.",
        "Mantenha por 8 a 12 batidas seguidas para estabilizar a média.",
        "Confira o andamento ativando o metrônomo com som.",
        "Copie os valores em milissegundos para colar no seu DAW ou pedal."
      ]
    },
    faqs: [
      { category: "Básico", question: "O que significa tap tempo?", answer: "Tap tempo é um recurso que permite descobrir ou definir a velocidade (BPM) de uma música dando toques rítmicos em um botão ou tela." },
      { category: "Como Usar", question: "Como encontrar o tap tempo de uma música?", answer: "Abra o ttaptempo.com e dê toques constantes na tela ou barra de espaço por 4 a 8 batidas no compasso da música para ver o BPM." },
      { category: "Teoria", question: "Quais são os 7 tipos de andamento musical?", answer: "Os 7 principais andamentos italianos são: Largo (40-60 BPM), Adagio (66-76 BPM), Andante (76-108 BPM), Moderato (108-120 BPM), Allegro (120-156 BPM), Vivace (156-176 BPM) e Presto (168-200+ BPM)." },
      { category: "Conceito", question: "BPM é a mesma coisa que tap tempo?", answer: "Não. BPM é a unidade de medida da velocidade. Tap tempo é a ferramenta ou método para medi-la." },
      { category: "Como Usar", question: "Como marcar o tempo corretamente?", answer: "Mantenha o braço relaxado e toque 8 a 12 vezes seguidas na cabeça de cada tempo para anular pequenos atrasos dos dedos." },
      { category: "Equipamento", question: "Qual o melhor pedal de delay com tap tempo?", answer: "Strymon Timeline, Boss DD-500, TC Electronic Flashback 2 e Line 6 DL4 MkII estão entre os pedais de delay com tap tempo mais conceituados." },
      { category: "Cálculo", question: "Como é calculado o tempo em BPM?", answer: "Divide-se 60.000 pelo intervalo em milissegundos entre as batidas: BPM = 60.000 / Intervalo (ms)." },
      { category: "DAW", question: "Como dar tap tempo no Logic Pro?", answer: "No Apple Logic Pro, clique repetidamente no visor de tempo na barra superior LCD ou pressione Option + Command + T." },
      { category: "Conceito", question: "Quantas batidas por minuto são?", answer: "Equivale diretamente ao valor de BPM. Em 120 BPM, ocorrem 120 batidas em 60 segundos (2 batidas por segundo)." },
      { category: "Teoria", question: "Como se chama o andamento em 3/4?", answer: "3/4 é um compasso ternário conhecido como tempo de Valsa (Tempo di Valse), com andamento comum entre 150 e 180 BPM para semínimas." },
      { category: "Teoria", question: "Qual andamento é considerado muito rápido?", answer: "Presto (168-200 BPM) e Prestissimo (200+ BPM). Na música moderna, Drum & Bass (170-175 BPM) é considerado muito rápido." },
      { category: "Produção", question: "Por que 128 BPM é tão popular?", answer: "128 é potência binária (2^7), divide milissegundos com perfeição (468,75 ms), sincroniza com a frequência cardíaca na pista e padronizou as transições de DJs." },
      { category: "Conceito", question: "Quantos BPM tem 1 minuto?", answer: "1 minuto é duração de tempo; BPM é taxa de velocidade. Em 1 minuto a 120 BPM, ocorrem exatamente 120 batidas." },
      { category: "Conceito", question: "Tap tempo é igual a BPM?", answer: "Não. Tap tempo é o mecanismo de entrada; BPM é a velocidade numérica medida." },
      { category: "DAW", question: "Como fazer tap tempo no Pro Tools?", answer: "Abra a janela Transport com Ctrl + 1 (Cmd + 1 no Mac), desligue o ícone de regente e toque repetidamente na tecla 'T' do teclado." }
    ]
  },

  ja: {
    meta: {
      title: "タップテンポ - 無料BPMカウンター・メトロノーム | ttaptempo.com",
      description: "無料のオンラインタップテンポ＆BPMカウンター。キーや画面をタップして曲のテンポ（BPM）を即座に測定。高精度メトロノームとディレイ計算機付き。",
      keywords: "タップテンポ, BPMカウンター, テンポ測定, メトロノーム オンライン, ディレイタイム計算, BPM計測, ディレイペダル タップテンポ"
    },
    ui: {
      heroBadge: "ミリ秒以下の高精度 • 会員登録不要・完全無料",
      heroTitlePrefix: "オンライン",
      heroTitleGradient: "タップテンポ",
      heroSubtitle: "曲やビートのリズムに合わせてタップするだけで正確なBPMを測定。シンセサイズド・メトロノーム、ディレイタイム計算、クラシック速度標語に対応。",
      tapInitial: "タップしてテンポを測定",
      tapButtonMain: "ここをタップ、またはスペースキー",
      tapButtonSub: "曲のリズムに合わせて安定したテンポでタップ",
      helperBadge: "任意のキーでタップ可能",
      nudgeLabel: "微調整:",
      resetLabel: "リセット",
      statsInterval: "間隔",
      statsFrequency: "周波数",
      statsTaps: "タップ数",
      statsConsistency: "安定度",
      steady: "安定",
      metronomeTitle: "Web Audio インタラクティブ・メトロノーム",
      metronomeSubtitle: "測定したテンポを合成オーディオクリックで即座に再生。拍子選択やアクセント音に対応。",
      play: "メトロノーム再生",
      stop: "停止",
      soundLabel: "音色",
      timeSigLabel: "拍子",
      volumeLabel: "音量",
      sounds: { woodblock: "ウッドブロック", beep: "デジタルビープ", cowbell: "808カウベル", hihat: "ハイハット", kick: "キックドラム" },
      delayBadge: "DAW同期 • Ableton / Logic / FL Studio",
      delayTitle: "ディレイ＆リバーブ時間計算機 (ms)",
      delaySubtitle: "プラグインのディレイタイムやリバーブのプリディレイを楽曲テンポに正確に同期。クリックでコピーできます。",
      delaySyncingAt: "同期BPM:",
      noteValue: "音符",
      normalMs: "通常 (ms)",
      dottedMs: "付点 (ms)",
      tripletMs: "3連符 (ms)",
      frequencyHz: "周波数 (Hz)",
      copiedToast: "クリップボードにコピーしました！",
      tempoGuideBadge: "イタリア語 速度標語",
      tempoGuideTitle: "クラシック速度標語リファレンス",
      tempoGuideSubtitle: "楽曲の速度と表情を示す伝統的なイタリア語の速度標語一覧。",
      tableMarking: "標語",
      tableRange: "BPM範囲",
      tableDescription: "意味・解説"
    },
    article: {
      badge: "日本語テクニカルガイド",
      h1: "タップテンポ＆BPMカウンター：正確なリズム計測のための完全ガイド",
      p1: "DTMでの楽曲制作、DJのライブミックス、ギタリストのディレイペダル設定、ドラマーのクリック練習において、正確な楽曲テンポ（BPM）を知ることは不可欠です。当サイトの無料オンラインタップテンポツールは、ブラウザ上で遅延なく高精度なBPM計測を提供します。",
      p2: "使い方は簡単で、スペースキーやスマートフォンの画面を曲のリズムに合わせてタップするだけ。数回タップするだけで正確なBPMとミリ秒単位の間隔が自動計算されます。",
      h2Algorithm: "タップテンポアルゴリズムの仕組み",
      pAlgorithm1: "テンポは1分間あたりの拍数（BPM）で表されます。タップされた瞬間、ブラウザのHigh Resolution Time API (performance.now()) がミリ秒以下の精度でタイムスタンプを記録します。",
      pAlgorithm2: "人間の指の物理的なばらつき（10〜25ms）を考慮し、直近16回のタップ間隔を加重移動平均処理することで、極めて安定した数値を瞬時に算出します。",
      formulaTitle: "基本計算式",
      formulaText: "BPM = 60,000 / 平均間隔(ms)",
      formulaExample: "例: 500msの間隔 = 60,000 / 500 = 120 BPM",
      h2Metronome: "スタジオ仕様の高精度メトロノーム",
      pMetronome: "測定後はワンクリックでWeb Audio APIによる遅延のないメトロノーム音を再生し、曲との同期を確認できます。",
      h2Delay: "ディレイペダルやDAWプラグインの設定",
      pDelay: "Strymon TimelineやBoss DDシリーズなどのディレイペダルや、DAWのディレイプラグインに最適なミリ秒値を提供します：",
      delayPoints: [
        "4分音符 (1/4): テンポの基準となる時間 (60,000 / BPM)",
        "付点8分音符 (1/8d): リズミカルな跳ね返りディレイ (4分音符 × 0.75)",
        "3連符8分音符 (1/8t): ブルースやレゲエに最適なスイングエコー (4分音符 × 0.3333)",
        "16分音符 (1/16): ボーカルやギターのスラップバックディレイ (4分音符 / 4)"
      ],
      h2Steps: "プロのように正確にBPMを計測する手順",
      steps: [
        "曲のスネアやキックドラムのリズムに耳を澄ませます。",
        "スペースキーや画面を一定のテンポでタップします。",
        "8〜12回連続でタップして平均値を安定させます。",
        "メトロノームを再生してテンポが合っているか確認します。",
        "数値をワンクリックでコピーしてDAWやペダルに入力します。"
      ]
    },
    faqs: [
      { category: "基本", question: "タップテンポとは何ですか？", answer: "曲のリズムに合わせてボタンやキーをタップすることで、そのテンポ（BPM）を自動計測・設定する機能です。" },
      { category: "使い方", question: "曲のタップテンポを測る方法は？", answer: "ttaptempo.comを開き、曲の拍子に合わせてスペースキーや画面を4〜8回タップするだけで即座に測定されます。" },
      { category: "音楽理論", question: "テンポの7つの基本速度標語は？", answer: "遅い順に Largo (40-60), Adagio (66-76), Andante (76-108), Moderato (108-120), Allegro (120-156), Vivace (156-176), Presto (168-200+) です。" },
      { category: "概念", question: "BPMとタップテンポは同じですか？", answer: "違います。BPMはテンポを表す「単位」であり、タップテンポはそれを測定・入力する「方法・機能」です。" },
      { category: "使い方", question: "正確にタップテンポを測るコツは？", answer: "リラックスして拍の頭を意識し、8〜12回ほど継続してタップすることで手ブレを排除した高精度な数値が得られます。" },
      { category: "機材", question: "タップテンポ対応のおすすめディレイペダルは？", answer: "Strymon Timeline、BOSS DD-500、TC Electronic Flashback 2、Line 6 DL4 MkIIが定番として高い人気を誇ります。" },
      { category: "計算", question: "テンポはどのように計算されますか？", answer: "1分間（60,000ミリ秒）をタップ間隔（ms）で割ることで算出されます（例: 500msなら120BPM）。" },
      { category: "DAW", question: "Logic Proでタップテンポを行うには？", answer: "画面上部のLCDパネルのテンポ表示をクリックするか、Option + Command + T を押してタップします。" },
      { category: "概念", question: "1分間に何回タップする計算ですか？", answer: "4分音符でタップする場合、BPMの数値と同じです（120BPMなら1分間に120回、1秒間に2回）。" },
      { category: "理論", question: "3/4拍子のテンポは何と呼ばれますか？", answer: "ワルツのテンポ（Tempo di Valse）と呼ばれ、通常4分音符基準で150〜180BPM程度で演奏されます。" },
      { category: "理論", question: "非常に速いテンポは何ですか？", answer: "クラシックではPrestoやPrestissimo、現代音楽ではDrum & Bass（170〜175BPM）などが極めて速いテンポに分類されます。" },
      { category: "制作", question: "なぜ128BPMがこれほど人気なのですか？", answer: "2の累乗（2^7）でデジタルオーディオのグリッドと相性が良く、ダンスフロアの高揚感ある心拍数と一致するためです。" },
      { category: "概念", question: "1分間は何BPMですか？", answer: "1分は時間の単位、BPMは速度の単位です。120BPMの曲なら1分間にちょうど120拍が刻まれます。" },
      { category: "概念", question: "タップテンポはBPMと同じ意味ですか？", answer: "いいえ。タップテンポは計測手段であり、BPMは計測された結果の速度数値です。" },
      { category: "DAW", question: "Pro Toolsでタップテンポを行うには？", answer: "トランスポートウィンドウを開き、指揮者マークをオフにしてテンポ欄を選択後、キーボードの「T」をタップします。" }
    ]
  },

  de: {
    meta: {
      title: "Tap Tempo - Kostenloser BPM Zähler & Online Metronom | ttaptempo.com",
      description: "Kostenloses Online Tap Tempo und BPM Zähler. Beliebige Taste tippen, um das Tempo in BPM zu berechnen, mit Metronom abzuhören und Delay-Zeiten zu ermitteln.",
      keywords: "tap tempo, bpm zähler, tempo ermitteln, metronom online, bpm counter, delay zeit berechnen, beats per minute messen, bpm tapper"
    },
    ui: {
      heroBadge: "Sub-Millisekunden-Präzision • Keine Registrierung",
      heroTitlePrefix: "Online",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Tippe im Rhythmus eines Songs, um die genauen Beats Per Minute (BPM) zu messen. Mit Audio-Metronom, Delay-Rechner und klassischen Tempobezeichnungen.",
      tapInitial: "Tippen, um Tempo zu messen",
      tapButtonMain: "HIER TIPPEN ODER LEERTASTE",
      tapButtonSub: "Gleichmäßig im Takt der Musik tippen",
      helperBadge: "Beliebige Taste zum Tippen",
      nudgeLabel: "Feinjustierung:",
      resetLabel: "Zurücksetzen",
      statsInterval: "Intervall",
      statsFrequency: "Frequenz",
      statsTaps: "Taps",
      statsConsistency: "Gleichmäßigkeit",
      steady: "Konstant",
      metronomeTitle: "Interaktives Web-Audio-Metronom",
      metronomeSubtitle: "Höre das gemessene Tempo mit synthetisiertem Klick, verschiedenen Taktarten und Akzent auf der Eins.",
      play: "Metronom starten",
      stop: "Metronom stoppen",
      soundLabel: "Klang",
      timeSigLabel: "Taktart",
      volumeLabel: "Lautstärke",
      sounds: { woodblock: "Holzblock", beep: "Digital-Beep", cowbell: "808 Cowbell", hihat: "Hi-Hat", kick: "Bassdrum" },
      delayBadge: "DAW-Synchronisation • Ableton / Logic / FL Studio",
      delayTitle: "Delay- & Reverb-Rechner (ms)",
      delaySubtitle: "Synchronisiere Verzögerungszeiten und Nachhall-Pre-Delays exakt zum Songtempo. Klicke auf Werte zum Kopieren.",
      delaySyncingAt: "Synchronisiert bei:",
      noteValue: "Notenwert",
      normalMs: "Normal (ms)",
      dottedMs: "Punktiert (ms)",
      tripletMs: "Triole (ms)",
      frequencyHz: "Frequenz (Hz)",
      copiedToast: "In die Zwischenablage kopiert!",
      tempoGuideBadge: "Klassische italienische Bezeichnungen",
      tempoGuideTitle: "Italienische Tempobezeichnungen Übersicht",
      tempoGuideSubtitle: "Klassische musikalische Fachbegriffe für Geschwindigkeit, Charakter und BPM-Bereich.",
      tableMarking: "Bezeichnung",
      tableRange: "BPM-Bereich",
      tableDescription: "Bedeutung"
    },
    article: {
      badge: "Umfassender technischer Leitfaden auf Deutsch",
      h1: "Tap Tempo & BPM Zähler: Der vollständige Leitfaden für Musiker und Produzenten",
      p1: "Ob Musikproduktion in der DAW, Live-DJ-Set, Gitarren-Delay-Pedal oder Schlagzeug-Klick: Die exakte Geschwindigkeit eines Musikstücks in Beats Per Minute (BPM) zu kennen, ist unverzichtbar. Unser kostenloses Online Tap Tempo Werkzeug misst Tempi absolut verzögerungsfrei direkt im Webbrowser.",
      p2: "Ohne mühsame Registrierungen tippst du einfach auf die Leertaste oder den Touchscreen im Takt der Musik, und unser Algorithmus berechnet in wenigen Sekunden den exakten BPM-Wert.",
      h2Algorithm: "Wie der Tap-Tempo-Algorithmus BPM berechnet",
      pAlgorithm1: "Das musikalische Tempo gibt die Anzahl der Schläge pro Minute an. Beim Tippen erfasst die W3C High Resolution Time API präzise Zeitstempel im Sub-Millisekunden-Bereich.",
      pAlgorithm2: "Um natürliche menschliche Fingerschwankungen (10–25 ms) auszugleichen, analysiert unser System die letzten 16 Taps über einen gleitenden Durchschnitt und liefert einen extrem stabilen Wert.",
      formulaTitle: "Mathematische Formel",
      formulaText: "BPM = 60.000 / Durchschnittsintervall (ms)",
      formulaExample: "Beispiel: 500 ms Intervall = 60.000 / 500 = 120 BPM",
      h2Metronome: "Präzises Metronom für Proberaum und Bühne",
      pMetronome: "Sofort nach der Messung kannst du das integrierte Web-Audio-Metronom starten, um das Tempo mit klarem Akzent auf Takt eins abzuhören.",
      h2Delay: "Delay-Pedale und DAW-Plugins synchronisieren",
      pDelay: "Für Gitarren-Effektpedale wie das Boss DD-8 oder Strymon Timeline sowie Studio-Plugins:",
      delayPoints: [
        "Viertelnote (1/4): Der Grundpuls des Tempos (60.000 / BPM).",
        "Punktierte Achtelnote (1/8d): Der berühmte rhythmische U2-Echo-Effekt (Viertelnote × 0,75).",
        "Achteltriole (1/8t): Typisch für swingende Blues- und Hip-Hop-Grooves (Viertelnote × 0,3333).",
        "Sechzehntelnote (1/16): Kurzes Slapback-Echo für Gesang und Rhythmusgitarre (Viertelnote / 4)."
      ],
      h2Steps: "Schritt-für-Schritt: Tempo ermitteln wie ein Profi",
      steps: [
        "Konzentriere dich auf den Puls von Kickdrum oder Snare.",
        "Tippe gleichmäßig auf die Leertaste oder den Bildschirm im Takt.",
        "Halte den Rhythmus für 8 bis 12 Taps, um Messfehler auszugleichen.",
        "Überprüfe das Ergebnis mit dem Audio-Metronom.",
        "Kopiere den BPM- oder Millisekundenwert in deine DAW."
      ]
    },
    faqs: [
      { category: "Grundlagen", question: "Was bedeutet Tap Tempo?", answer: "Tap Tempo ist eine Funktion, mit der das Tempo (BPM) ermittelt oder eingestellt wird, indem man im Takt der Musik auf einen Knopf oder eine Taste tippt." },
      { category: "Anleitung", question: "Wie ermittle ich das Tap Tempo eines Songs?", answer: "Öffne ttaptempo.com und tippe 4 bis 8 Mal gleichmäßig im Rhythmus auf die Leertaste oder das Smartphone-Display." },
      { category: "Musiktheorie", question: "Was sind die 7 klassischen Tempobezeichnungen?", answer: "Von langsam bis schnell: Largo (40-60 BPM), Adagio (66-76 BPM), Andante (76-108 BPM), Moderato (108-120 BPM), Allegro (120-156 BPM), Vivace (156-176 BPM) und Presto (168-200+ BPM)." },
      { category: "Konzepte", question: "Ist BPM das Gleiche wie Tap Tempo?", answer: "Nein. BPM ist die Maßeinheit für die Geschwindigkeit. Tap Tempo ist die Methode oder das Werkzeug, mit dem man sie misst." },
      { category: "Anleitung", question: "Wie tippt man das Tempo am genauesten ein?", answer: "Halte die Hand entspannt und tippe 8 bis 12 Schläge gleichmäßig mit, um Ungenauigkeiten der Finger auszugleichen." },
      { category: "Equipment", question: "Was ist das beste Tap-Tempo-Delay-Pedal?", answer: "Strymon Timeline, Boss DD-500, TC Electronic Flashback 2 und Line 6 DL4 MkII gehören zu den besten Delay-Pedalen mit Tap Tempo." },
      { category: "Berechnung", question: "Wie wird das Tempo mathematisch berechnet?", answer: "Formel: BPM = 60.000 / Intervall in Millisekunden (z.B. 60.000 / 500 ms = 120 BPM)." },
      { category: "DAW", question: "Wie funktioniert Tap Tempo in Logic Pro?", answer: "Klicke im oberen LCD-Display wiederholt auf das Tempo-Feld oder nutze den Tastaturkurzbefehl Option + Command + T." },
      { category: "Konzepte", question: "Wie viele Taps pro Minute sind das?", answer: "Bei Viertelnoten entspricht die Tap-Anzahl exakt dem BPM-Wert (bei 120 BPM genau 120 Taps in 60 Sekunden)." },
      { category: "Musiktheorie", question: "Wie heißt das Tempo im 3/4-Takt?", answer: "3/4 ist eine Taktart und wird oft als Walzertempo (Tempo di Valse) bezeichnet, meist zwischen 150 und 180 BPM in Viertelnoten." },
      { category: "Musiktheorie", question: "Welches Tempo ist sehr schnell?", answer: "Presto (168-200 BPM) und Prestissimo (über 200 BPM). In moderner elektronischer Musik gilt Drum & Bass (170-175 BPM) als sehr schnell." },
      { category: "Produktion", question: "Warum sind 128 BPM so beliebt?", answer: "128 ist eine Zweierpotenz (2^7), teilt Millisekunden sauber auf (468,75 ms), matcht den menschlichen Tanzpuls und erleichtert das DJ-Mixing." },
      { category: "Konzepte", question: "Wie viele BPM hat 1 Minute?", answer: "1 Minute ist eine Zeitdauer, BPM eine Geschwindigkeitsrate. Bei 120 BPM schlägt der Takt in einer Minute genau 120 Mal." },
      { category: "Konzepte", question: "Ist Tap Tempo identisch mit BPM?", answer: "Nein. Tap Tempo ist der Vorgang des Messens; BPM ist das Ergebnis." },
      { category: "DAW", question: "Wie tippt man Tempo in Pro Tools ein?", answer: "Öffne das Transportfenster mit Strg + 1 (Cmd + 1 auf Mac), schalte den Dirigentenmodus aus, markiere das Tempofeld und tippe die Taste 'T'." }
    ]
  },

  fr: {
    meta: {
      title: "Tap Tempo - Compteur de BPM et Métronome Gratuit | ttaptempo.com",
      description: "Tap tempo et compteur de BPM en ligne gratuit. Tapez sur n'importe quelle touche pour calculer le tempo en BPM, écouter le métronome et régler vos pédales de delay.",
      keywords: "tap tempo, compteur bpm, calculateur de bpm, tempo tap, metronome tap tempo, bpm tap tempo online, calculer bpm musique, pedale delay tap tempo"
    },
    ui: {
      heroBadge: "Précision Inframilliseconde • Sans Inscription",
      heroTitlePrefix: "En ligne",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Tapez en rythme sur n'importe quel morceau pour calculer le BPM exact. Métronome audio synthétisé, calcul des temps de delay et nuances classiques inclus.",
      tapInitial: "Tapez pour mesurer le tempo",
      tapButtonMain: "TAPEZ ICI OU BARRE D'ESPACE",
      tapButtonSub: "Tapez de manière régulière en rythme avec la musique",
      helperBadge: "N'importe quelle touche pour taper",
      nudgeLabel: "Ajuster:",
      resetLabel: "Réinitialiser",
      statsInterval: "Intervalle",
      statsFrequency: "Fréquence",
      statsTaps: "Battements",
      statsConsistency: "Régularité",
      steady: "Régulier",
      metronomeTitle: "Métronome Interactif Web Audio",
      metronomeSubtitle: "Écoutez votre tempo mesuré grâce à des clics synthétisés précis, métriques variées et accent sur le premier temps.",
      play: "Lancer le Métronome",
      stop: "Arrêter le Métronome",
      soundLabel: "Son",
      timeSigLabel: "Signature Rythmique",
      volumeLabel: "Volume",
      sounds: { woodblock: "Bloc de Bois", beep: "Bip Numérique", cowbell: "Cloche 808", hihat: "Charleston", kick: "Grosse Caisse" },
      delayBadge: "Synchro DAW • Ableton / Logic / FL Studio",
      delayTitle: "Calculateur de Temps de Delay et Reverb (ms)",
      delaySubtitle: "Synchronisez échos et pré-délais de réverbe à la perfection sur le tempo de vos productions. Cliquez pour copier.",
      delaySyncingAt: "Synchronisé à :",
      noteValue: "Valeur de Note",
      normalMs: "Normale (ms)",
      dottedMs: "Pointée (ms)",
      tripletMs: "Triolet (ms)",
      frequencyHz: "Fréquence (Hz)",
      copiedToast: "Copié dans le presse-papiers !",
      tempoGuideBadge: "Nuances Classiques Italiennes",
      tempoGuideTitle: "Guide des Termes de Tempo Italiens",
      tempoGuideSubtitle: "Termes italiens traditionnels définissant l'allure, le sentiment et la plage de BPM.",
      tableMarking: "Terme",
      tableRange: "Plage BPM",
      tableDescription: "Signification Musicale"
    },
    article: {
      badge: "Guide Technique en Français",
      h1: "Tap Tempo et Compteur de BPM : Le Guide Ultime du Rythme pour Musiciens",
      p1: "Que vous soyez producteur de musique électronique, DJ en mix live, guitariste réglant une pédale de delay avec tap tempo ou batteur s'entraînant au clic, connaître la cadence exacte d'un morceau est indispensable. Notre outil en ligne gratuit calcule les battements par minute instantanément.",
      p2: "Tapez simplement en rythme sur votre barre d'espace ou écran de smartphone pour obtenir un relevé de tempo stabilisé en quelques secondes.",
      h2Algorithm: "Comment Fonctionne l'Algorithme de Calcul du BPM",
      pAlgorithm1: "Le tempo musical s'exprime en Battements Par Minute (BPM). L'API W3C High Resolution Time capture l'intervalle exact entre vos frappes avec une précision inframilliseconde.",
      pAlgorithm2: "Pour gommer les légères variations physiques des doigts (10 à 25 ms), notre algorithme calcule une moyenne mobile pondérée sur 16 frappes consécutives afin d'offrir une lecture fluide et exacte.",
      formulaTitle: "Formule Mathématique",
      formulaText: "BPM = 60 000 / Intervalle Moyen (ms)",
      formulaExample: "Exemple : Un intervalle de 500 ms = 60 000 / 500 = 120 BPM",
      h2Metronome: "Métronome Synchrone pour Répétition et Studio",
      pMetronome: "Après la mesure, activez le métronome Web Audio intégré sans dérive temporelle avec accentuation sur le premier temps.",
      h2Delay: "Synchroniser une Pédale de Delay et ses Plugins DAW",
      pDelay: "Idéal pour calibrer les délais des pédales Strymon Timeline, Boss DD-8 et logiciels de MAO :",
      delayPoints: [
        "Noire (1/4) : La pulsation de référence (60 000 / BPM).",
        "Croche pointée (1/8d) : L'écho syncopé emblématique façon U2 (Noire × 0,75).",
        "Triolet de croches (1/8t) : Incontournable pour les rythmiques blues et reggae (Noire × 0,3333).",
        "Double-croche (1/16) : Effet slapback court pour voix et guitares funk (Noire / 4)."
      ],
      h2Steps: "Étapes pour Mesurer le BPM Comme un Pro",
      steps: [
        "Repérez la pulsation en écoutant la grosse caisse et la caisse claire.",
        "Tapez régulièrement sur la barre d'espace ou l'écran tactile.",
        "Maintenez le rythme sur 8 à 12 battements pour stabiliser la mesure.",
        "Vérifiez la justesse en lançant le métronome sonore.",
        "Copiez les valeurs en millisecondes pour vos effets."
      ]
    },
    faqs: [
      { category: "Bases", question: "Que signifie tap tempo ?", answer: "Le tap tempo est une fonction permettant de mesurer ou définir la vitesse (BPM) d'un morceau en tapant manuellement en rythme sur un bouton." },
      { category: "Utilisation", question: "Comment trouver le tap tempo d'un morceau ?", answer: "Ouvrez ttaptempo.com et tapez régulièrement sur la barre d'espace ou votre écran pendant 4 à 8 temps au rythme de la musique." },
      { category: "Théorie", question: "Quels sont les 7 principaux tempos classiques ?", answer: "Du plus lent au plus rapide : Largo (40-60), Adagio (66-76), Andante (76-108), Moderato (108-120), Allegro (120-156), Vivace (156-176) et Presto (168-200+)." },
      { category: "Concepts", question: "Le BPM est-il la même chose que le tap tempo ?", answer: "Non. Le BPM est l'unité de mesure de la vitesse, tandis que le tap tempo est la méthode ou l'outil servant à la calculer." },
      { category: "Utilisation", question: "Comment taper le tempo avec précision ?", answer: "Gardez le geste souple et maintenez 8 à 12 frappes régulières pour éliminer toute variation involontaire des doigts." },
      { category: "Matériel", question: "Quelle est la meilleure pédale de delay avec tap tempo ?", answer: "La Strymon Timeline, la Boss DD-500, la TC Electronic Flashback 2 et la Line 6 DL4 MkII sont d'excellentes références du marché." },
      { category: "Calcul", question: "Comment se calcule le tempo mathématiquement ?", answer: "On divise 60 000 par l'intervalle en millisecondes entre deux battements : BPM = 60 000 / Intervalle (ms)." },
      { category: "MAO", question: "Comment utiliser le tap tempo dans Logic Pro ?", answer: "Dans Logic Pro, cliquez plusieurs fois sur l'affichage du tempo dans l'écran LCD ou utilisez le raccourci Option + Commande + T." },
      { category: "Concepts", question: "Combien de battements par minute ?", answer: "En noires, cela correspond exactement au BPM : à 120 BPM, il y a 120 battements en 60 secondes (soit 2 battements par seconde)." },
      { category: "Théorie", question: "Comment appelle-t-on le tempo en 3/4 ?", answer: "Le 3/4 est une mesure à trois temps appelée temps de valse (Tempo di Valse), généralement situé entre 150 et 180 BPM en noires." },
      { category: "Théorie", question: "Quel tempo est considéré comme très rapide ?", answer: "Presto (168-200 BPM) et Prestissimo (plus de 200 BPM). En musique moderne, la Drum & Bass (170-175 BPM) est très rapide." },
      { category: "Production", question: "Pourquoi 128 BPM est-il si populaire en musique ?", answer: "128 est une puissance binaire (2^7), se synchronise idéalement sur des grilles de 468,75 ms et correspond au rythme cardiaque exalté en boîte de nuit." },
      { category: "Concepts", question: "Combien de BPM fait 1 minute ?", answer: "1 minute est une durée temporelle, alors que le BPM est une fréquence. En 1 minute à 120 BPM, exactement 120 battements s'écoulent." },
      { category: "Concepts", question: "Le tap tempo est-il identique au BPM ?", answer: "Non. Le tap tempo est le procédé de saisie, le BPM est la mesure chiffrée finale." },
      { category: "MAO", question: "Comment faire un tap tempo dans Pro Tools ?", answer: "Ouvrez la fenêtre Transport avec Ctrl + 1 (Cmd + 1 sur Mac), désactivez la piste conducteur et appuyez en rythme sur la touche 'T'." }
    ]
  },

  ko: {
    meta: {
      title: "탭 템포 - 무료 BPM 측정기 및 온라인 메트로놈 | ttaptempo.com",
      description: "무료 온라인 탭 템포 및 BPM 측정기. 키보드나 화면을 탭하여 음악의 BPM을 즉시 측정하고, 고정밀 메트로놈 청취 및 딜레이 타임을 동기화하세요.",
      keywords: "탭 템포, BPM 측정기, 템포 측정, 온라인 메트로놈, 딜레이 타임 계산기, BPM 카운터, 탭 템포 딜레이 페달"
    },
    ui: {
      heroBadge: "서브 밀리초 정밀도 • 가입 없이 무료 이용",
      heroTitlePrefix: "온라인",
      heroTitleGradient: "탭 템포",
      heroSubtitle: "음악이나 비트의 리듬에 맞춰 탭하여 정확한 BPM을 측정하세요. 오디오 메트로놈, 딜레이 시간 계산기, 이탈리아 음악 템포 표기가 지원됩니다.",
      tapInitial: "탭하여 템포를 측정하세요",
      tapButtonMain: "여기를 탭하거나 스페이스바를 누르세요",
      tapButtonSub: "음악 비트에 맞춰 일정한 간격으로 탭하세요",
      helperBadge: "아무 키나 눌러 탭 가능",
      nudgeLabel: "미세조정:",
      resetLabel: "리셋",
      statsInterval: "간격",
      statsFrequency: "주파수",
      statsTaps: "탭 횟수",
      statsConsistency: "안정도",
      steady: "안정됨",
      metronomeTitle: "Web Audio 인터랙티브 메트로놈",
      metronomeSubtitle: "측정된 템포를 합성 오디오 클릭음, 박자 선택, 첫 박 악센트와 함께 들어보세요.",
      play: "메트로놈 재생",
      stop: "정지",
      soundLabel: "사운드",
      timeSigLabel: "박자표",
      volumeLabel: "볼륨",
      sounds: { woodblock: "우드블록", beep: "디지털 비프", cowbell: "808 카우벨", hihat: "하이햇", kick: "킥 드럼" },
      delayBadge: "DAW 동기화 • Ableton / Logic / FL Studio",
      delayTitle: "딜레이 & 리버브 시간 계산기 (ms)",
      delaySubtitle: "오디오 플러그인의 딜레이 타임과 프리딜레이를 곡의 템포에 맞추세요. 수치를 클릭하면 복사됩니다.",
      delaySyncingAt: "동기화 BPM:",
      noteValue: "음표",
      normalMs: "보통 (ms)",
      dottedMs: "점음표 (ms)",
      tripletMs: "셋잇단음표 (ms)",
      frequencyHz: "주파수 (Hz)",
      copiedToast: "클립보드에 복사되었습니다!",
      tempoGuideBadge: "클래식 이탈리아어 템포 표기",
      tempoGuideTitle: "이탈리아어 악상 템포 가이드",
      tempoGuideSubtitle: "음악의 빠르기와 감정적 표현을 나타내는 클래식 속도 표기 목록.",
      tableMarking: "표기",
      tableRange: "BPM 범위",
      tableDescription: "음악적 의미"
    },
    article: {
      badge: "한국어 테크니컬 가이드",
      h1: "탭 템포 & BPM 측정기: 정확한 리듬 템포 측정을 위한 가이드",
      p1: "작곡 프로그램(DAW)에서의 비트 메이킹, DJ 믹싱, 기타리스트의 딜레이 페달 설정, 드러머의 메트로놈 연습에서 정확한 BPM을 파악하는 것은 매우 중요합니다. 본 무료 온라인 탭 템포 도구는 브라우저에서 지연 없이 정확한 BPM을 측정합니다.",
      p2: "회원가입 없이 스페이스바나 스마트폰 화면을 비트에 맞춰 연속으로 탭하기만 하면 몇 초 만에 정확한 BPM과 밀리초 간격이 계산됩니다.",
      h2Algorithm: "탭 템포 알고리즘의 원리",
      pAlgorithm1: "템포는 1분당 박자 수(BPM)로 나타냅니다. 사용자가 탭할 때마다 브라우저의 High Resolution Time API가 고정밀 타임스탬프를 기록합니다.",
      pAlgorithm2: "손가락의 미세한 오차(10~25ms)를 보정하기 위해 최근 16회 탭의 이동 평균을 계산하여 극도로 안정적인 측정값을 제공합니다.",
      formulaTitle: "기본 수학 공식",
      formulaText: "BPM = 60,000 / 평균 간격(ms)",
      formulaExample: "예시: 500ms 간격 = 60,000 / 500 = 120 BPM",
      h2Metronome: "스튜디오 품질의 동기화 메트로놈",
      pMetronome: "템포 측정 후 즉시 Web Audio API로 생성되는 오디오 메트로놈을 켜서 비트가 정확한지 확인할 수 있습니다.",
      h2Delay: "탭 템포 딜레이 페달 및 DAW 플러그인 동기화",
      pDelay: "Strymon Timeline, Boss DD 시리즈 등의 딜레이 이펙터와 음악 제작 프로그램에 필요한 밀리초 값:",
      delayPoints: [
        "4분음표 (1/4): 템포의 기준 펄스 (60,000 / BPM).",
        "점8분음표 (1/8d): U2 스타일의 바운스 딜레이 에코 (4분음표 × 0.75).",
        "셋잇단 8분음표 (1/8t): 블루스와 힙합 그루브에 필수적인 스윙 딜레이 (4분음표 × 0.3333).",
        "16분음표 (1/16): 보컬과 기타를 위한 짧은 슬랩백 딜레이 (4분음표 / 4)."
      ],
      h2Steps: "전문가처럼 정확하게 BPM 측정하는 방법",
      steps: [
        "곡의 킥 드럼과 스네어 리듬에 집중합니다.",
        "스페이스바나 모바일 화면을 비트에 맞춰 균일하게 탭합니다.",
        "손가락 오차를 줄이기 위해 8~12회 이상 연속으로 탭합니다.",
        "오디오 메트로놈을 켜서 템포가 일치하는지 확인합니다.",
        "수치를 원클릭으로 복사하여 DAW나 페달에 입력합니다."
      ]
    },
    faqs: [
      { category: "기본", question: "탭 템포(Tap Tempo)란 무엇인가요?", answer: "음악의 비트에 맞춰 버튼이나 키보드를 탭하여 곡의 속도(BPM)를 자동으로 감지하고 설정하는 기능입니다." },
      { category: "사용법", question: "곡의 탭 템포를 찾는 방법은?", answer: "ttaptempo.com에 접속하여 곡의 리듬에 맞춰 스페이스바나 화면을 4~8회 규칙적으로 탭하면 즉시 측정됩니다." },
      { category: "음악이론", question: "7가지 기본 클래식 템포 표기는?", answer: "느린 순서대로 Largo (40-60), Adagio (66-76), Andante (76-108), Moderato (108-120), Allegro (120-156), Vivace (156-176), Presto (168-200+)입니다." },
      { category: "개념", question: "BPM과 탭 템포는 같은 것인가요?", answer: "아닙니다. BPM은 음악의 속도를 나타내는 단위이고, 탭 템포는 그것을 측정하는 방법이나 도구입니다." },
      { category: "사용법", question: "정확하게 탭 템포를 측정하려면?", answer: "손의 힘을 빼고 일정한 박자로 8~12회 연속 탭하면 손가락 편차가 보정되어 정확한 값을 얻을 수 있습니다." },
      { category: "장비", question: "가장 추천하는 탭 템포 딜레이 페달은?", answer: "Strymon Timeline, Boss DD-500, TC Electronic Flashback 2, Line 6 DL4 MkII 등이 대표적입니다." },
      { category: "계산", question: "템포는 수학적으로 어떻게 계산되나요?", answer: "1분(60,000밀리초)을 탭 사이의 밀리초 간격으로 나눕니다: BPM = 60,000 / 간격(ms)." },
      { category: "DAW", question: "Logic Pro에서 탭 템포를 하려면?", answer: "상단 LCD 디스플레이의 템포 표시를 연속 클릭하거나 Option + Command + T를 누릅니다." },
      { category: "개념", question: "1분당 몇 번 탭하는 것인가요?", answer: "4분음표 기준으로 탭할 경우 BPM 수치와 동일합니다(120 BPM이면 60초 동안 정확히 120회)." },
      { category: "음악이론", question: "3/4박자 템포는 무엇이라 부르나요?", answer: "왈츠 템포(Tempo di Valse)라고 부르며, 보통 4분음표 기준 150~180 BPM 선에서 연주됩니다." },
      { category: "음악이론", question: "매우 빠른 템포는 무엇인가요?", answer: "클래식에서는 Presto와 Prestissimo, 현대 음악에서는 드럼 앤 베이스(170~175 BPM)가 매우 빠른 템포에 속합니다." },
      { category: "프로덕션", question: "128 BPM이 EDM에서 인기 있는 이유는?", answer: "2의 7승으로 디지털 그리드(468.75ms)에 딱 떨어지며, 댄스 플로어의 심박수와 일치하고 DJ 믹싱이 쉽기 때문입니다." },
      { category: "개념", question: "1분은 몇 BPM인가요?", answer: "1분은 시간의 길이이고 BPM은 속도의 비율입니다. 120 BPM 곡이라면 1분 동안 정확히 120박이 지나갑니다." },
      { category: "개념", question: "탭 템포는 BPM과 동의어인가요?", answer: "아닙니다. 탭 템포는 측정 행위이고, BPM은 그 결과값인 속도 수치입니다." },
      { category: "DAW", question: "Pro Tools에서 탭 템포를 하려면?", answer: "Ctrl + 1 (Mac은 Cmd + 1)로 트랜스포트 창을 열고, 지휘자 모드를 끈 뒤 템포 필드를 클릭하고 'T' 키를 연속으로 누릅니다." }
    ]
  },

  it: {
    meta: {
      title: "Tap Tempo - Calcolo BPM e Metronomo Online Gratis | ttaptempo.com",
      description: "Tap tempo e contatore BPM online gratuito. Premi qualsiasi tasto per calcolare il tempo in BPM, ascoltare il metronomo e sincronizzare i pedali delay.",
      keywords: "tap tempo, contatore bpm, calcolo bpm, tempo musicale, metronomo tap tempo, bpm tap tempo online, pedale delay tap tempo"
    },
    ui: {
      heroBadge: "Precisione al Sub-Millisecondo • Nessuna Registrazione",
      heroTitlePrefix: "Online",
      heroTitleGradient: "Tap Tempo",
      heroSubtitle: "Batti il ritmo di qualsiasi brano per misurare i Battiti Per Minuto (BPM) esatti. Include metronomo Web Audio, calcolo delay e indicazioni di tempo italiane.",
      tapInitial: "Batti per misurare il tempo",
      tapButtonMain: "PREMI QUI O BARRA SPAZIATRICE",
      tapButtonSub: "Batti con regolarità a tempo di musica",
      helperBadge: "Qualsiasi tasto per battere",
      nudgeLabel: "Regola:",
      resetLabel: "Azzera",
      statsInterval: "Intervallo",
      statsFrequency: "Frequenza",
      statsTaps: "Battiti",
      statsConsistency: "Costanza",
      steady: "Costante",
      metronomeTitle: "Metronomo Interattivo Web Audio",
      metronomeSubtitle: "Ascolta il tempo rilevato con clic audio sintetizzato, varie indicazioni di misura e accento sul primo battito.",
      play: "Avvia Metronomo",
      stop: "Ferma Metronomo",
      soundLabel: "Suono",
      timeSigLabel: "Metro / Tempo",
      volumeLabel: "Volume",
      sounds: { woodblock: "Blocco di Legno", beep: "Beep Digitale", cowbell: "Campaccio 808", hihat: "Hi-Hat", kick: "Cassa" },
      delayBadge: "Sincronizzazione DAW • Ableton / Logic / FL Studio",
      delayTitle: "Calcolatore Tempi di Delay e Riverbero (ms)",
      delaySubtitle: "Sincronizza le ripetizioni del delay e i pre-delay del riverbero al tempo esatto. Clicca su qualsiasi valore per copiarlo.",
      delaySyncingAt: "Sincronizzato a:",
      noteValue: "Valore Musicale",
      normalMs: "Normale (ms)",
      dottedMs: "Puntato (ms)",
      tripletMs: "Terzina (ms)",
      frequencyHz: "Frequenza (Hz)",
      copiedToast: "Copiato negli appunti!",
      tempoGuideBadge: "Indicazioni Classiche Italiane",
      tempoGuideTitle: "Guida alle Indicazioni di Tempo Italiane",
      tempoGuideSubtitle: "I termini musicali tradizionali della lingua italiana per andamento, carattere e gamma di BPM.",
      tableMarking: "Indicazione",
      tableRange: "Gamma BPM",
      tableDescription: "Significato Musicale"
    },
    article: {
      badge: "Guida Tecnica in Italiano",
      h1: "Tap Tempo e Contatore BPM: La Guida Completa per Musicisti e Produttori",
      p1: "Per i produttori musicali alle prese con una DAW, per i DJ nei mix live o per i chitarristi che regolano un pedale delay con tap tempo, conoscere la velocità precisa di un brano in Battiti Al Minuto (BPM) è indispensabile. Il nostro strumento gratuito offre misurazioni istantanee a latenza zero direttamente nel browser.",
      p2: "Senza dover installare software né registrare un account, basta battere la barra spaziatrice o toccare lo schermo a ritmo per ottenere i BPM esatti.",
      h2Algorithm: "Come Funziona l'Algoritmo di Tap Tempo",
      pAlgorithm1: "Il tempo musicale si misura in BPM. L'API High Resolution Time registra ogni battito con precisione al sub-millisecondo.",
      pAlgorithm2: "Per compensare le naturali oscillazioni umane delle dita (10-25 ms), l'algoritmo calcola una media mobile ponderata sugli ultimi 16 battiti, garantendo un risultato fluido e accurato.",
      formulaTitle: "Formula Matematica",
      formulaText: "BPM = 60.000 / Intervallo Medio (ms)",
      formulaExample: "Esempio: Intervallo di 500 ms = 60.000 / 500 = 120 BPM",
      h2Metronome: "Metronomo di Precisione con Web Audio",
      pMetronome: "Subito dopo la misurazione puoi avviare il metronomo integrato per verificare l'andamento con accento sul primo battito.",
      h2Delay: "Regolazione di Pedali Delay con Tap Tempo e Plugin",
      pDelay: "Indispensabile per sincronizzare pedali come Boss DD-8 o Strymon Timeline e plugin di registrazione:",
      delayPoints: [
        "Semiminima (1/4): Il battito fondamentale del tempo (60.000 / BPM).",
        "Croma col punto (1/8d): Il classico rimbalzo ritmico stile U2 (Semiminima × 0,75).",
        "Terzina di crome (1/8t): Tipica di blues e reggae (Semiminima × 0,3333).",
        "Semicroma (1/16): Effetto slapback per voci e chitarre funk (Semiminima / 4)."
      ],
      h2Steps: "Come Calcolare i BPM Come un Professionista",
      steps: [
        "Ascolta il brano individuando il battito di cassa e rullante.",
        "Batti regolarmente a tempo sulla barra spaziatrice o sullo schermo.",
        "Continua per 8-12 battiti per stabilizzare la media.",
        "Verifica il tempo attivando il metronomo sonoro.",
        "Copia i valori in millisecondi da incollare nella DAW o nel pedale."
      ]
    },
    faqs: [
      { category: "Basi", question: "Cosa significa tap tempo?", answer: "È una funzione che consente di misurare o impostare il tempo (BPM) di un brano battendo un tasto a ritmo di musica." },
      { category: "Come Usare", question: "Come trovare il tap tempo di una canzone?", answer: "Apri ttaptempo.com e premi la barra spaziatrice o tocca lo schermo a tempo per 4-8 battiti per visualizzare i BPM esatti." },
      { category: "Teoria", question: "Quali sono i 7 andamenti musicali classici?", answer: "I 7 termini italiani fondamentali dal più lento al più veloce sono: Largo (40-60 BPM), Adagio (66-76), Andante (76-108), Moderato (108-120), Allegro (120-156), Vivace (156-176) e Presto (168-200+)." },
      { category: "Concetti", question: "I BPM sono uguali al tap tempo?", answer: "No. BPM è l'unità di misura della velocità musicale; il tap tempo è lo strumento o il metodo interattivo per misurarla." },
      { category: "Come Usare", question: "Come battere il tempo in modo accurato?", answer: "Rilassa la mano e batti per 8-12 volte consecutive per consentire all'algoritmo di filtrare le naturali imprecisioni delle dita." },
      { category: "Strumenti", question: "Qual è il miglior pedale delay con tap tempo?", answer: "Strymon Timeline, Boss DD-500, TC Electronic Flashback 2 e Line 6 DL4 MkII sono tra i pedali delay più apprezzati in assoluto." },
      { category: "Calcolo", question: "Come si calcola matematicamente il tempo?", answer: "Si divide 60.000 per l'intervallo medio in millisecondi: BPM = 60.000 / Intervallo (ms)." },
      { category: "DAW", question: "Come usare il tap tempo in Logic Pro?", answer: "In Apple Logic Pro, fai clic ripetutamente sul valore del tempo nel display LCD superiore oppure premi Option + Command + T." },
      { category: "Concetti", question: "Quanti battiti al minuto sono?", answer: "In quarti equivale esattamente al BPM: a 120 BPM corrispondono 120 battiti in 60 secondi (2 battiti al secondo)." },
      { category: "Teoria", question: "Come si chiama il tempo in 3/4?", answer: "Il 3/4 è un metro ternario noto come Tempo di Valzer (Tempo di Valse), solitamente tra 150 e 180 BPM per quarto." },
      { category: "Teoria", question: "Quale tempo è considerato molto veloce?", answer: "Presto (168-200 BPM) e Prestissimo (oltre 200 BPM). Nella musica moderna, la Drum & Bass (170-175 BPM) è considerata molto veloce." },
      { category: "Produzione", question: "Perché 128 BPM è così popolare nella musica dance?", answer: "128 è una potenza binaria (2^7), coincide con griglie temporali precise (468,75 ms) e si allinea con il battito cardiaco durante la danza." },
      { category: "Concetti", question: "Quanti BPM dura 1 minuto?", answer: "1 minuto è una durata temporale, mentre il BPM è una frequenza. In 1 minuto a 120 BPM scorrono esattamente 120 battiti." },
      { category: "Concetti", question: "Il tap tempo è la stessa cosa del BPM?", answer: "No. Il tap tempo è il metodo di immissione; il BPM è il valore di velocità risultante." },
      { category: "DAW", question: "Come effettuare il tap tempo in Pro Tools?", answer: "Apri la finestra Transport con Ctrl + 1 (Cmd + 1 su Mac), disattiva la traccia Conductor, seleziona il campo Tempo e batti il tasto 'T'." }
    ]
  }
};
