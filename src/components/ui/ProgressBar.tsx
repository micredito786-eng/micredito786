'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  darkBackground?: boolean;
}

const variantStyles = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  gradient: 'bg-linear-to-r from-primary to-secondary',
};

const sizeStyles = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

export function ProgressBar({
  value,
  max,
  className,
  showLabel = true,
  variant = 'gradient',
  size = 'md',
  animate = true,
  darkBackground = false,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm font-medium mb-2">
          <span className={darkBackground ? 'text-white font-bold' : 'text-foreground'}>{value} vendidos</span>
          <span className={darkBackground ? 'text-secondary font-semibold' : 'text-foreground-muted'}>{max - value} disponibles</span>
        </div>
      )}
      <div className={cn('w-full bg-gray-200 rounded-full overflow-hidden', sizeStyles[size])}>
        <motion.div
          className={cn('h-full rounded-full', variantStyles[variant])}
          initial={animate ? { width: 0 } : { width: `${percentage}%` }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}
