import { cn } from '@/lib/utils';

interface GaugeProps {
  className?: string;
  /** Color del arco lleno (verde por defecto) */
  fill?: string;
  /** Color del tramo final (azul por defecto) */
  tip?: string;
  /** Color del arco de fondo */
  track?: string;
}

/** Medidor del logo, usado como motivo gráfico en portadas y llamadas a la acción */
export function Gauge({ className, fill = '#4BBF52', tip = '#16498C', track = 'rgba(255,255,255,0.14)' }: GaugeProps) {
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className={cn('shrink-0', className)}>
      <path d="M16 112 A84 84 0 0 1 184 112" fill="none" stroke={track} strokeWidth="20" />
      <path d="M16 112 A84 84 0 0 1 150 44" fill="none" stroke={fill} strokeWidth="20" strokeDasharray="58 5" />
      <path d="M158 52 A84 84 0 0 1 184 112" fill="none" stroke={tip} strokeWidth="20" />
    </svg>
  );
}
