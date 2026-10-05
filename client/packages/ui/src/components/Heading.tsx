import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const headingVariants = cva('font-bold tracking-tight text-foreground', {
  variants: {
    level: {
      1: 'text-3xl sm:text-4xl font-extrabold',
      2: 'text-2xl sm:text-3xl font-bold',
      3: 'text-xl sm:text-2xl font-semibold',
      4: 'text-lg sm:text-xl font-semibold',
      5: 'text-base font-semibold',
      6: 'text-sm font-semibold',
    },
  },
  defaultVariants: {
    level: 2,
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Tag = `h${level}` as const;

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    );
  },
);
Heading.displayName = 'Heading';
