export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FaqItem[] = [
  {
    category: "Basics",
    question: "What does tap tempo mean?",
    answer: "Tap tempo is a feature in metronomes, digital audio workstations (DAWs), and effects hardware (like delay pedals) that allows musicians to discover or set the speed (tempo) of a song by tapping a button, key, or footswitch in time with the beat. Instead of manually dialing in a numerical value, the system measures the elapsed time in milliseconds between your taps and automatically calculates the exact Beats Per Minute (BPM)."
  },
  {
    category: "How-To",
    question: "How to find tap tempo?",
    answer: "To find the tap tempo of any song: (1) Open a free online tap tempo tool like ttaptempo.com on your phone or computer. (2) Listen to the song and identify the regular pulse or downbeat (typically the kick drum or snare on beats 2 and 4). (3) Tap consistently along with the rhythm using your Spacebar, mouse click, or phone screen for 4 to 8 consecutive beats. The tool instantly displays the detected BPM, millisecond interval, and Italian tempo marking."
  },
  {
    category: "Music Theory",
    question: "What are the 7 types of tempo?",
    answer: "In classical music theory, the 7 primary Italian tempo markings from slowest to fastest are: (1) Largo (40–60 BPM) – Broad, slow, and solemn. (2) Adagio (66–76 BPM) – Slow and stately with emotional expression. (3) Andante (76–108 BPM) – Walking pace, flowing naturally. (4) Moderato (108–120 BPM) – Moderate, balanced speed. (5) Allegro (120–156 BPM) – Fast, quick, and bright. (6) Vivace (156–176 BPM) – Lively, brisk, and spirited. (7) Presto (168–200+ BPM) – Extremely fast and rapid."
  },
  {
    category: "Concepts",
    question: "Is BPM tap tempo?",
    answer: "No, BPM and tap tempo are not the same thing. BPM (Beats Per Minute) is the standardized unit of measurement that quantifies musical speed (how many beats occur within 60 seconds). Tap tempo is the interactive mechanism or tool used to detect, input, or adjust that BPM value by physically tapping in rhythm. In short: tap tempo is the input action, and BPM is the resulting measurement."
  },
  {
    category: "How-To",
    question: "How do I tap tempo?",
    answer: "To tap tempo accurately: (1) Relax your hand and listen closely to the groove of the track. (2) Tap the Spacebar on your keyboard or the on-screen tap pad on your phone on every quarter-note beat. (3) Maintain a steady rhythm for at least 4 to 8 beats. Sustaining 8 to 12 taps allows the rolling-average algorithm to smooth out natural human finger jitter and achieve sub-BPM accuracy."
  },
  {
    category: "Gear & Pedals",
    question: "What is the best tap tempo delay pedal?",
    answer: "The top-rated tap tempo delay pedals among guitarists and audio engineers are: (1) Strymon Timeline – The industry standard for studio-quality digital delay with dedicated tap footswitch and extensive rhythmic subdivisions (dotted 8th, triplets). (2) Boss DD-8 / DD-500 – Renowned for bulletproof reliability, pristine audio, and versatile onboard/external tap inputs. (3) TC Electronic Flashback 2 – Features MASH footswitch technology and customizable TonePrint algorithms. (4) Line 6 DL4 MkII – Iconic delay modeler with dedicated tap tempo switch and vintage/modern delay algorithms."
  },
  {
    category: "Calculation",
    question: "How is tempo calculated?",
    answer: "Tempo is calculated by measuring the time interval between consecutive beats in milliseconds (ms) and dividing that number into 60,000 (the total number of milliseconds in one minute). The mathematical formula is: BPM = 60,000 / Interval (ms). For example, if the elapsed time between your taps is 500 ms, the tempo is 60,000 / 500 = 120 BPM. Advanced tools like ttaptempo.com use rolling statistical averages across multiple taps to filter out finger timing anomalies."
  },
  {
    category: "DAW & Tech",
    question: "How to tap tempo logic?",
    answer: "In Apple Logic Pro, you can tap tempo in multiple ways: (1) Click repeatedly on the numerical Tempo display in the top LCD Control Bar (make sure the display mode is set to 'Custom' or 'Beats & Project'). (2) Use the default key command Option + Command + T. (3) Assign a key or MIDI controller pad to the 'Tap Tempo' command in Logic's Controller Assignments. In algorithmic programming logic, tap tempo calculates the time difference between consecutive tap timestamps using high-resolution timers like performance.now(), resetting if the gap exceeds 2 to 3 seconds."
  },
  {
    category: "Concepts",
    question: "How many taps per minute?",
    answer: "Taps per minute directly equals the BPM (Beats Per Minute) when you tap once on every quarter-note beat. For example, at 120 BPM, you make exactly 120 taps in 60 seconds (which equals 2 taps per second, spaced 500 milliseconds apart). If you tap on eighth notes, you would tap twice as fast—making 240 taps in one minute."
  },
  {
    category: "Music Theory",
    question: "What is 3/4 tempo called?",
    answer: "In music theory, 3/4 is technically a time signature (triple meter with three quarter-note beats per measure), most famously known as Waltz Time or Triple Meter. When discussing tempo in 3/4 time, it is commonly marked as 'Tempo di Valse' (Waltz tempo), typically ranging from 150 to 180 BPM for quarter notes, or 50 to 60 BPM when felt as one dotted half-note beat per measure."
  },
  {
    category: "Music Theory",
    question: "Which tempo is very fast?",
    answer: "In classical Italian musical terminology, Presto (168–200 BPM) translates to 'very fast', and Prestissimo (200+ BPM) means 'as fast as possible'. In modern electronic and rock music, tempos above 160 BPM are considered very fast, including Drum & Bass (170–175 BPM), Happy Hardcore (160–180 BPM), Speed Metal (200+ BPM), and Speedcore (300+ BPM)."
  },
  {
    category: "Production",
    question: "Why is 128 BPM so popular?",
    answer: "128 BPM is the quintessential standard for Electronic Dance Music (EDM, House, Progressive House) for three key reasons: (1) Binary Math: 128 is an exact power of two (2^7 = 128), allowing digital audio plugins, delays, and 4/4 quantization grids to divide cleanly into 468.75 ms beat intervals. (2) Human Physiology: 128 BPM closely matches an elevated human heart rate during cardio exercise and dancing, triggering natural energetic synchronization. (3) DJ Standardization: Producing at 128 BPM allows club DJs to effortlessly mix and transition between tracks without drastic pitch bending."
  },
  {
    category: "Concepts",
    question: "How many BPM is 1 minute?",
    answer: "1 minute is a unit of duration (60 seconds), whereas BPM is a rate of speed (Beats Per Minute). In 1 minute of music, the exact number of beats played equals the BPM rating. For example, at 60 BPM there is 1 beat per second (60 beats in 1 minute); at 120 BPM there are 2 beats per second (120 beats in 1 minute); and at 140 BPM there are 140 beats in 1 minute."
  },
  {
    category: "Concepts",
    question: "Is tap tempo the same as BPM?",
    answer: "No, tap tempo and BPM are related but distinct. BPM is the numerical measurement of musical tempo (speed). Tap tempo is the method, button, footswitch, or interactive tool that measures the time between physical taps to calculate that BPM number. In short: tap tempo is the process of measurement; BPM is the speed result."
  },
  {
    category: "DAW & Tech",
    question: "How to tap tempo pro tools?",
    answer: "To tap tempo in Avid Pro Tools: (1) Press Ctrl + 1 (Windows) or Cmd + 1 (Mac) to open the Transport Window. (2) Turn off the Conductor Track by clicking the blue Conductor icon in the tempo ruler, putting Pro Tools into Manual Tempo Mode. (3) Click directly on the numerical Tempo value in the Transport window so it is highlighted in blue. (4) Repeatedly tap the 'T' key on your computer keyboard in time with your music. Pro Tools will automatically detect your rhythm and update the session BPM."
  }
];
