import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '../../lib/tailwind';
import type { MarqueeProps } from './Marquee';

type MarqueeContentProps = MarqueeProps & {
  isHovered: boolean;
  gap: string;
  isVertical: boolean;
  isAriaHidden?: boolean;
};

export const MarqueeContent = ({
  duration = 30,
  contentCount = 1,
  isHovered,
  gap,
  isVertical,
  isReverse,
  isRotate,
  pauseOnHover,
  isAriaHidden,
  children,
}: MarqueeContentProps) => {
  const controls = useAnimation();

  const initialInlineStart = isReverse ? `calc(-100% - ${gap})` : 0;
  const animateInlineStart = isReverse ? 0 : `calc(-100% - ${gap})`;
  const rotate = isRotate ? 180 : 0;

  const variants = {
    initial:
      isVertical ?
        { y: initialInlineStart, rotate }
      : { x: initialInlineStart },
    animate:
      isVertical ?
        { y: animateInlineStart, rotate }
      : { x: animateInlineStart },
  };

  const transition = { duration, repeat: Infinity, ease: 'linear' };

  useEffect(() => {
    const animateMarquee = async () => {
      await controls.start('animate');
    };

    if (pauseOnHover && isHovered) {
      controls.stop();
    } else {
      void animateMarquee();
    }
  }, [controls, pauseOnHover, isHovered]);

  return (
    <motion.div
      className="flex items-center whitespace-nowrap"
      style={{ gap }}
      initial="initial"
      animate={controls}
      variants={variants}
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
