'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-xl',
  bordered: 'bg-white border border-gray-200',
  gradient: 'bg-linear-to-br from-primary/5 to-secondary/5 border border-primary/10',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  variant = 'default',
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-4 pt-4 border-t border-gray-100', className)}>{children}</div>;
}
