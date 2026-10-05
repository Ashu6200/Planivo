import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils.js';

export const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      size: {
        default: 'h-10 px-3 py-2',
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 py-2',
        lg: 'h-12 px-4 text-base',
      },
      error: {
        true: 'border-destructive focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', size, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, error, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
