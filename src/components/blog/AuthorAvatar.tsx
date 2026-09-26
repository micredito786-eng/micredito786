import { cn } from '@/lib/utils';

const DEFAULT_AUTHOR = 'Equipo Mi Crédito 786';

/** Círculo con "786" para el equipo, o las iniciales si el autor es una persona */
export function AuthorAvatar({ author, size = 'md' }: { author: string; size?: 'md' | 'lg' }) {
  const label =
    author === DEFAULT_AUTHOR
      ? '786'
      : author
          .split(/\s+/)
          .slice(0, 2)
          .map((word) => word[0]?.toUpperCase())
          .join('');

  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full bg-primary font-extrabold text-white',
        size === 'lg' ? 'h-16 w-16 text-lg' : 'h-11 w-11 text-sm sm:h-12 sm:w-12'
      )}
    >
      {label}
    </span>
  );
}
