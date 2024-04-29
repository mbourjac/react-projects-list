import { useState, type ReactNode } from 'react';
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
  pauseOnHover?: boolean;
  children: ReactNode;
};

export const Marquee = ({
  className,
  gap = '3rem',
  isVertical = false,
  children,
  ...restProps
}: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'flex items-center overflow-hidden text-5xl',
        isVertical ? 'vertical-rl h-full px-3' : 'horizontal-tb w-full py-3',
        className,
      )}
      style={{ gap }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <MarqueeContent
        isHovered={isHovered}
        gap={gap}
        isVertical={isVertical}
        {...restProps}
      >
        {children}
      </MarqueeContent>
      <MarqueeContent
        isAriaHidden
        isHovered={isHovered}
        gap={gap}
        isVertical={isVertical}
        {...restProps}
      >
        {children}
      </MarqueeContent>
    </div>
  );
};
