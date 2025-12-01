'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  pulse?: boolean;
  className?: string;
}

const variants = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  success: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-amber-100 text-amber-700 border-amber-200',
  neutral: 'bg-neutral text-foreground-muted border-gray-200',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  pulse,
  className,
}: BadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium',
        variants[variant],
        sizes[size],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
      {children}
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
    </motion.span>
  );
}
