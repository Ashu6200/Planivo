import * as React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { cn } from '../lib/utils.js';

export interface LayoutProps extends ViewProps {
  className?: string;
  gap?: string | number;
  padding?: string | number;
  flex?: number;
}

export const Stack = React.forwardRef<React.ElementRef<typeof View>, LayoutProps>(
  ({ className, gap, padding, flex, style, ...props }, ref) => {
    const inlineStyle: ViewStyle = {
      ...(typeof flex === 'number' ? { flex } : {}),
      ...(typeof gap === 'number' ? { gap: gap * 4 } : {}),
      ...(typeof padding === 'number' ? { padding: padding * 4 } : {}),
    };

    return (
      <View
        ref={ref}
        className={cn('flex flex-col', className)}
        style={[inlineStyle, style]}
        {...props}
      />
    );
  },
);
Stack.displayName = 'Stack';

export const YStack = React.forwardRef<React.ElementRef<typeof View>, LayoutProps>(
  ({ className, ...props }, ref) => (
    <Stack ref={ref} className={cn('flex-col', className)} {...props} />
  ),
);
YStack.displayName = 'YStack';

export const XStack = React.forwardRef<React.ElementRef<typeof View>, LayoutProps>(
  ({ className, ...props }, ref) => (
    <Stack ref={ref} className={cn('flex-row items-center', className)} {...props} />
  ),
);
XStack.displayName = 'XStack';

export const ZStack = React.forwardRef<React.ElementRef<typeof View>, LayoutProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('relative', className)} {...props} />
  ),
);
ZStack.displayName = 'ZStack';
