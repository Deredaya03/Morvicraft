import English from './en.json';
import Spanish from './es.json'

const LANGUAJES = {
    ENGLISH: 'en',
    SPANISH: 'es'
}

export const getI18N = (
    { currentLocale = 'es' } : 
    { currentLocale: string | undefined}
) => {
    if (currentLocale === LANGUAJES.ENGLISH) return English
    if (currentLocale === LANGUAJES.SPANISH) return Spanish
    return Spanish
}