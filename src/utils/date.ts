import { format, parseISO } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

export function formatDate(isoDate: string, language: string) {
    const date = parseISO(isoDate);
    const dateFormat = language === 'es' ? `dd 'de' MMMM, yyyy` : 'MMM dd, yyyy';
    const locale = language === 'es' ? es : enUS;

    return format(date, dateFormat, { locale });
}
