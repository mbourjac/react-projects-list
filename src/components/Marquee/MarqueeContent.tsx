import { motion } from 'framer-motion';
import { cn } from '../../lib/tailwind';
import type { MarqueeProps } from './Marquee';

type MarqueeContentProps = MarqueeProps & {
  gap: string;
  isVertical: boolean;
  isAriaHidden?: boolean;
};

export const MarqueeContent = ({
  duration = 30,
  contentCount = 1,
  gap,
  isVertical,
  isReverse = false,
  isRotate = false,
  isAriaHidden,
  children,
}: MarqueeContentProps) => {
  const initialInlineStart = isReverse ? `calc(-100% - ${gap})` : 0;
  const animateInlineStart = isReverse ? 0 : `calc(-100% - ${gap})`;
  const rotate = isRotate ? 180 : 0;

  const initial =
    isVertical ? { y: initialInlineStart, rotate } : { x: initialInlineStart };

  const animate =
    isVertical ? { y: animateInlineStart, rotate } : { x: animateInlineStart };

  const transition = { duration, repeat: Infinity, ease: 'linear' };

  return (
    <motion.div
      className="flex items-center whitespace-nowrap"
      style={{ gap }}
      initial={initial}
      animate={animate}
      transition={transition}
      aria-hidden={isAriaHidden}
    >
      {Array.from({ length: contentCount }, (_, index) => {
        return (
          <div
            key={index}
            className={cn(Array.isArray(children) && 'flex items-center')}
            style={{ gap }}
            aria-hidden={isAriaHidden ?? index !== 0}
          >
            {children}
          </div>
        );
      })}
    </motion.div>
  );
};
