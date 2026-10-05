import * as React from 'react';
import { Text as RNText, type TextStyle } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const TextClassContext = React.createContext<string | undefined>(undefined);

export const textVariants = cva('text-foreground text-base', {
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
  extends React.ComponentPropsWithoutRef<typeof RNText>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  className?: string;
  color?: string;
  fontSize?: number;
}

export const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, asChild = false, variant, muted, color, fontSize, style, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    const inlineStyle: TextStyle = {
      ...(color ? { color } : {}),
      ...(fontSize ? { fontSize } : {}),
    };

    return (
      <Component
        className={cn(
          textVariants({ variant, muted }),
          textClass,
          className,
        )}
        style={[inlineStyle, style]}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = 'Text';
