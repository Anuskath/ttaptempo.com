export interface TempoMarking {
  name: string;
  min: number;
  max: number;
  description: string;
  italianMeaning: string;
}

export interface GenreBpm {
  genre: string;
  min: number;
  max: number;
  example: string;
}

export const TEMPO_MARKINGS: TempoMarking[] = [
  { name: 'Larghissimo', min: 1, max: 24, description: 'Extremely slow, solemn', italianMeaning: 'Very, very broad' },
  { name: 'Grave', min: 25, max: 44, description: 'Very slow, heavy, serious', italianMeaning: 'Solemn' },
  { name: 'Largo', min: 45, max: 59, description: 'Broad, dignified and slow', italianMeaning: 'Broad' },
  { name: 'Larghetto', min: 60, max: 65, description: 'Rather broad, slightly faster than largo', italianMeaning: 'A little broad' },
  { name: 'Adagio', min: 66, max: 75, description: 'Slow, graceful and stately', italianMeaning: 'At ease' },
  { name: 'Andante', min: 76, max: 107, description: 'Walking pace, flowing moderately', italianMeaning: 'At a walking pace' },
  { name: 'Moderato', min: 108, max: 119, description: 'Moderate speed, neither fast nor slow', italianMeaning: 'Moderately' },
  { name: 'Allegretto', min: 120, max: 127, description: 'Moderately fast and lively', italianMeaning: 'A little lively' },
  { name: 'Allegro', min: 128, max: 155, description: 'Fast, quickly and bright', italianMeaning: 'Lively, joyful' },
  { name: 'Vivace', min: 156, max: 175, description: 'Very lively and brisk', italianMeaning: 'Full of life' },
  { name: 'Presto', min: 176, max: 199, description: 'Very, very fast and rapid', italianMeaning: 'Ready, quick' },
  { name: 'Prestissimo', min: 200, max: 999, description: 'As fast as physically possible', italianMeaning: 'Extremely quick' },
];

export const GENRE_BPMS: GenreBpm[] = [
  { genre: 'Dub / Ambient', min: 60, max: 74, example: 'Ambient chillout, slow dub' },
  { genre: 'Lo-Fi / Hip-Hop', min: 75, max: 89, example: 'Boom Bap, Lo-fi beats, J Dilla' },
  { genre: 'Reggae / R&B', min: 90, max: 104, example: 'Roots reggae, modern R&B, Funk' },
  { genre: 'Pop / Disco / Synthwave', min: 105, max: 119, example: 'Nu-disco, retro synth, pop grooves' },
  { genre: 'House / EDM / Dance', min: 120, max: 130, example: 'Deep house, Tech house, Big room' },
  { genre: 'Trance / Techno', min: 131, max: 139, example: 'Peak techno, melodic trance' },
  { genre: 'Trap / Dubstep', min: 140, max: 159, example: 'Festival trap, riddim, heavy dubstep' },
  { genre: 'Hardstyle / Drum & Bass', min: 160, max: 180, example: 'Liquid DnB, jungle, fast breakbeats' },
  { genre: 'Hardcore / Speedcore', min: 181, max: 999, example: 'Gabber, frenchcore, speedcore' },
];

export function getTempoMarking(bpm: number): TempoMarking {
  const rounded = Math.round(bpm);
  return TEMPO_MARKINGS.find(m => rounded >= m.min && rounded <= m.max) || TEMPO_MARKINGS[6];
}

export function getMatchingGenres(bpm: number): GenreBpm[] {
  const rounded = Math.round(bpm);
  return GENRE_BPMS.filter(g => rounded >= g.min && rounded <= g.max);
}
