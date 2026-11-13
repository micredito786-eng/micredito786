'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

const MotionLink = motion.create(Link);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  pulse?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  /**
   * Si se pasa, el botón se dibuja como UN SOLO enlace (no <a><button/></a>,
   * que es HTML inválido y hace que algunos clics no naveguen).
   * Rutas internas ("/#agendar", "#agendar") usan next/link; las externas, <a>.
   */
  href?: string;
  /** Abre el enlace en una pestaña nueva (agrega rel="noopener noreferrer") */
  newTab?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-primary text-white 
    hover:bg-primary-light 
    active:bg-primary-dark
    shadow-primary
  `,
  secondary: `
    bg-secondary text-white 
    hover:bg-secondary-light 
    active:bg-secondary-dark
    shadow-secondary
  `,
  outline: `
    border-2 border-primary text-primary 
    hover:bg-primary hover:text-white
    active:bg-primary-dark
  `,
  ghost: `
    text-primary 
    hover:bg-primary/10 
    active:bg-primary/20
  `,
  cta: `
    bg-linear-to-r from-secondary to-secondary-light text-white 
    hover:from-secondary-light hover:to-secondary
    active:from-secondary-dark active:to-secondary
    shadow-lg shadow-secondary/30
    font-bold uppercase tracking-wide
  `,
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  pulse,
  children,
  disabled,
  onClick,
  type = 'button',
  href,
  newTab,
}: ButtonProps) {
  const classes = cn(
    'relative inline-flex items-center justify-center gap-2 cursor-pointer select-none',
    'rounded-xl font-semibold overflow-hidden',
    'transition-all duration-200',
    'focus:outline-none focus:ring-4 focus:ring-primary/30',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    pulse && 'animate-pulse-ring',
    className
  );
  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
  };
  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="pointer-events-none inline-flex">{leftIcon}</span>}
      {/* El texto y los íconos no capturan el clic: todo el botón responde igual */}
      <span className="pointer-events-none">{children}</span>
      {!isLoading && rightIcon && <span className="pointer-events-none inline-flex">{rightIcon}</span>}

      {/* Efecto de brillo para CTA */}
      {variant === 'cta' && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
      )}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const linkProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return isExternal ? (
      <motion.a href={href} className={classes} onClick={onClick} {...linkProps} {...motionProps}>
        {content}
      </motion.a>
    ) : (
      <MotionLink href={href} className={classes} onClick={onClick} {...linkProps} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      {...motionProps}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
