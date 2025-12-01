import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de forma inteligente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea números con separadores
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-US').format(num);
}

/**
 * Formatea precios en USD
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
}
