import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: 'text-base font-normal',
      body: 'text-base font-normal',
      caption: 'text-xs font-normal text-muted-foreground',
      label: 'text-sm font-medium',
      muted: 'text-sm text-muted-foreground',
    },
    muted: {
      true: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'label';
  color?: string;
  fontSize?: string | number;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, muted, as: Component = 'p', color, fontSize, style, ...props }, ref) => {
    const inlineStyle: React.CSSProperties = {
      ...style,
      ...(color ? { color } : {}),
      ...(fontSize ? { fontSize } : {}),
    };

    return (
      <Component
        ref={ref as any}
        className={cn(textVariants({ variant, muted, className }))}
        style={inlineStyle}
        {...(props as any)}
      />
    );
  },
);
Text.displayName = 'Text';
