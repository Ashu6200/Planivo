import * as React from 'react';
import { Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../lib/utils.js';
import { TextClassContext } from './Text.native.js';

export const buttonVariants = cva(
  'group flex flex-row items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        primary: 'bg-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline:
          'border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline ',
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5',
        sm: 'h-9 rounded-md px-3',
        md: 'h-10 px-4 py-2 native:h-12 native:px-5',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const buttonTextVariants = cva(
  'web:whitespace-nowrap text-sm font-medium text-foreground web:transition-colors',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        primary: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground',
        secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
      },
      size: {
        default: 'text-sm native:text-base',
        sm: 'text-xs',
        md: 'text-sm native:text-base',
        lg: 'text-base native:text-lg',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    className?: string;
  };

export const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <TextClassContext.Provider
        value={buttonTextVariants({ variant, size, className: 'web:pointer-events-none' })}
      >
        <Component
          className={cn(
            props.disabled && 'opacity-50 web:pointer-events-none',
            buttonVariants({ variant, size, className }),
          )}
          ref={ref}
          role="button"
          {...props}
        />
      </TextClassContext.Provider>
    );
  },
);
Button.displayName = 'Button';
