export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  path: string;
  locale: string;
}

export const LANGUAGES: Record<string, Language> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', path: '/', locale: 'en_US' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', path: '/es/', locale: 'es_ES' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', path: '/pt/', locale: 'pt_BR' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', path: '/ja/', locale: 'ja_JP' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', path: '/de/', locale: 'de_DE' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', path: '/fr/', locale: 'fr_FR' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', path: '/ko/', locale: 'ko_KR' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', path: '/it/', locale: 'it_IT' },
};

export const SUPPORTED_LANG_CODES = Object.keys(LANGUAGES);
export const NON_DEFAULT_LANG_CODES = SUPPORTED_LANG_CODES.filter(code => code !== 'en');

export function getLanguagePath(code: string, subPath: string = ''): string {
  const cleanSubPath = subPath.replace(/^\/+|\/+$/g, '');
  const prefix = code === 'en' ? '' : `/${code}`;
  
  if (!cleanSubPath) {
    return prefix ? `${prefix}/` : '/';
  }
  return `${prefix}/${cleanSubPath}/`;
}

export function getHreflangList(currentPath: string = '/') {
  // Extract subPath if inside language folder (e.g., /es/about/ -> about)
  let clean = currentPath.replace(/^\/+|\/+$/g, '');
  const parts = clean.split('/');
  if (parts.length > 0 && SUPPORTED_LANG_CODES.includes(parts[0])) {
    parts.shift(); // remove language code
  }
  const relativeSubPath = parts.join('/');

  return [
    { lang: 'x-default', url: `https://ttaptempo.com${getLanguagePath('en', relativeSubPath)}` },
    ...SUPPORTED_LANG_CODES.map(code => ({
      lang: code,
      url: `https://ttaptempo.com${getLanguagePath(code, relativeSubPath)}`
    }))
  ];
}
