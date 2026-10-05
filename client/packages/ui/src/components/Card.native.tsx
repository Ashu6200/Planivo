import * as React from 'react';
import { View, type ViewProps, Text as RNText } from 'react-native';
import { cn } from '../lib/utils.js';
import { TextClassContext } from './Text.native.js';

export interface CardProps extends ViewProps {
  className?: string;
  elevated?: boolean;
  padded?: 'sm' | 'md' | 'lg' | boolean;
}

export const Card = React.forwardRef<React.ElementRef<typeof View>, CardProps>(
  ({ className, elevated = false, padded = 'md', ...props }, ref) => {
    const paddingClass =
      padded === 'sm'
        ? 'p-3'
        : padded === 'lg'
          ? 'p-8'
          : padded === false
            ? ''
            : 'p-6';

    return (
      <View
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-card',
          elevated && 'shadow-sm shadow-black/10 elevation-2',
          paddingClass,
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  React.ElementRef<typeof View>,
  ViewProps & { className?: string }
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<
  React.ElementRef<typeof RNText>,
  React.ComponentPropsWithoutRef<typeof RNText> & { className?: string }
>(({ className, ...props }, ref) => (
  <RNText
    role="heading"
    aria-level={3}
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-card-foreground',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<
  React.ElementRef<typeof RNText>,
  React.ComponentPropsWithoutRef<typeof RNText> & { className?: string }
>(({ className, ...props }, ref) => (
  <RNText
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<
  React.ElementRef<typeof View>,
  ViewProps & { className?: string }
>(({ className, ...props }, ref) => (
  <TextClassContext.Provider value="text-card-foreground">
    <View ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  </TextClassContext.Provider>
));
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<
  React.ElementRef<typeof View>,
  ViewProps & { className?: string }
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex flex-row items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
