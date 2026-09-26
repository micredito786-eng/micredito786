// Sin dependencias de Node: se puede importar desde componentes de cliente
const dateFormatter = new Intl.DateTimeFormat('es', { dateStyle: 'long', timeZone: 'UTC' });
const shortDateFormatter = new Intl.DateTimeFormat('es', { dateStyle: 'medium', timeZone: 'UTC' });

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

/** "26 sept 2026", para tarjetas */
export function formatShortDate(iso: string) {
  return shortDateFormatter.format(new Date(iso));
}
