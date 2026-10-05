import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as SelectPrimitive from '@rn-primitives/select';
import { cn } from '../lib/utils.js';

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex flex-row h-10 native:h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm',
      className,
    )}
    {...props}
  >
    {children}
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Overlay style={StyleSheet.absoluteFill}>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md',
          className,
        )}
        {...props}
      >
        {children}
      </SelectPrimitive.Content>
    </SelectPrimitive.Overlay>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = 'SelectContent';

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex flex-row w-full items-center rounded-sm py-1.5 pl-8 pr-2 active:bg-accent',
      className,
    )}
    {...props}
  />
));
SelectItem.displayName = 'SelectItem';
