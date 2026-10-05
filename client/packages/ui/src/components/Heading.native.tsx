import * as React from 'react';
import { Text as RNText } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const headingVariants = cva('font-bold text-foreground', {
  variants: {
    level: {
      1: 'text-3xl font-extrabold',
      2: 'text-2xl font-bold',
      3: 'text-xl font-semibold',
      4: 'text-lg font-semibold',
      5: 'text-base font-semibold',
      6: 'text-sm font-semibold',
    },
  },
  defaultVariants: {
    level: 2,
  },
});

export interface HeadingProps
  extends React.ComponentPropsWithoutRef<typeof RNText>,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading = React.forwardRef<React.ElementRef<typeof RNText>, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        role="heading"
        aria-level={level}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    );
  },
);
Heading.displayName = 'Heading';
