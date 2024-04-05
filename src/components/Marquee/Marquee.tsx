import type { ReactNode } from 'react';
import { cn } from '../../lib/tailwind';
import { MarqueeContent } from './MarqueeContent';

export type MarqueeProps = {
  className?: string;
  duration?: number;
  contentCount?: number;
  gap?: string;
  isVertical?: boolean;
  isReverse?: boolean;
  isRotate?: boolean;
  children: ReactNode;
};

export const Marquee = ({
  className,
  gap = '3rem',
  isVertical = false,
  children,
  ...restProps
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        'flex items-center overflow-hidden text-5xl',
        isVertical ? 'vertical-rl h-full px-3' : 'horizontal-tb w-full py-3',
        className,
      )}
      style={{ gap }}
    >
      <MarqueeContent gap={gap} isVertical={isVertical} {...restProps}>
        {children}
      </MarqueeContent>
      <MarqueeContent
        isAriaHidden
        gap={gap}
        isVertical={isVertical}
        {...restProps}
      >
        {children}
      </MarqueeContent>
    </div>
  );
};
