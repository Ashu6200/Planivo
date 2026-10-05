import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const inputVariants = cva(
  'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-base text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      size: {
        default: 'h-10 native:h-12 px-3',
        sm: 'h-8 native:h-10 px-2 text-xs',
        md: 'h-10 native:h-12 px-3',
        lg: 'h-12 native:h-14 px-4 text-lg',
      },
      error: {
        true: 'border-destructive web:focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface InputProps
  extends Omit<TextInputProps, 'size'>,
    VariantProps<typeof inputVariants> {
  className?: string;
}

export const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, placeholderClassName, size, error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          inputVariants({ size, error }),
          props.editable === false && 'opacity-50 web:cursor-not-allowed',
          className,
        )}
        placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
