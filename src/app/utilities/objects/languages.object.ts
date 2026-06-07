export interface Language {
    id: string;
    name: string;
    image: string;
}

export const LANGUAGES: Language[] = [
    { id: 'en', name: 'English', image: '../../assets/flags/united-kingdom-flag-png-large.png' },
    { id: 'jp', name: 'Japanese', image: '../../assets/flags/japan-flag-png-large.png' },
    { id: 'ko', name: 'Korean', image: '../../assets/flags/south-korea-flag-png-large.png' },
    { id: 'fr', name: 'French', image: '../../assets/flags/france-flag-png-large.png' },
    { id: 'it', name: 'Italian', image: '../../assets/flags/italy-flag-png-large.png' },
    { id: 'de', name: 'German', image: '../../assets/flags/germany-flag-png-large.png' },
    { id: 'es', name: 'Spanish', image: '../../assets/flags/spain-flag-png-large.png' },
    { id: 'zh-tw', name: 'Traditional Chinese', image: '../../assets/flags/china-flag-png-large.png' },
    { id: 'zh-cn', name: 'Simplified Chinese', image: '../../assets/flags/china-flag-png-large.png' }
];