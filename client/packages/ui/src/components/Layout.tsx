import * as React from 'react';
import { cn } from '../lib/utils.js';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  padding?: string | number;
  marginHorizontal?: string | number;
  maxWidth?: string | number;
  flex?: number;
}

export const Stack = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, gap, padding, marginHorizontal, maxWidth, flex, style, ...props }, ref) => {
    const inlineStyle: React.CSSProperties = {
      ...style,
      ...(gap !== undefined ? { gap: typeof gap === 'number' ? `${gap * 4}px` : gap } : {}),
      ...(padding !== undefined ? { padding: typeof padding === 'number' ? `${padding * 4}px` : padding } : {}),
      ...(marginHorizontal !== undefined
        ? {
            marginLeft: marginHorizontal === 'auto' ? 'auto' : typeof marginHorizontal === 'number' ? `${marginHorizontal * 4}px` : marginHorizontal,
            marginRight: marginHorizontal === 'auto' ? 'auto' : typeof marginHorizontal === 'number' ? `${marginHorizontal * 4}px` : marginHorizontal,
          }
        : {}),
      ...(maxWidth !== undefined ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth } : {}),
      ...(flex !== undefined ? { flex } : {}),
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col', className)}
        style={inlineStyle}
        {...props}
      />
    );
  },
);
Stack.displayName = 'Stack';

export const YStack = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => (
    <Stack ref={ref} className={cn('flex-col', className)} {...props} />
  ),
);
YStack.displayName = 'YStack';

export const XStack = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => (
    <Stack ref={ref} className={cn('flex-row items-center', className)} {...props} />
  ),
);
XStack.displayName = 'XStack';

export const ZStack = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props} />
  ),
);
ZStack.displayName = 'ZStack';
