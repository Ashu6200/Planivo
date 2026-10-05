import * as React from 'react';
import * as TabsPrimitive from '@rn-primitives/tabs';
import { cn } from '../lib/utils.js';
import { TextClassContext } from './Text.native.js';

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex flex-row h-10 items-center justify-center rounded-md bg-muted p-1',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    className?: string;
  }
>(({ className, ...props }, ref) => {
  const { value } = TabsPrimitive.useRootContext();
  const isActive = value === props.value;

  return (
    <TextClassContext.Provider
      value={cn(
        'text-sm font-medium',
        isActive ? 'text-foreground' : 'text-muted-foreground',
      )}
    >
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 transition-all disabled:opacity-50',
          isActive && 'bg-background shadow-sm',
          className,
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
});
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-2', className)}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';
