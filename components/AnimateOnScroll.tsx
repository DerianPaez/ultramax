'use client';

import type { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'fade';

export type AnimateOnScrollProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
} & HTMLMotionProps<'div'>;

const variantMap: Record<
  AnimationVariant,
  { initial: Record<string, number>; animate: Record<string, number> }
> = {
  'fade-up': { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  'fade-down': { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  'fade-left': { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  'fade-right': { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  'zoom-in': { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

export const AnimateOnScroll = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  ...props
}: AnimateOnScrollProps) => {
  const { initial, animate } = variantMap[variant] ?? variantMap['fade-up'];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
