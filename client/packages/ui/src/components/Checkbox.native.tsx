import * as React from 'react';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '../lib/utils.js';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    className?: string;
  }
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'web:peer h-4 w-4 native:h-[20px] native:w-[20px] shrink-0 rounded-sm native:rounded border border-primary web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        props.checked && 'bg-primary',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('items-center justify-center h-full w-full')}
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = 'Checkbox';

import { Text as RNText } from 'react-native';

function CheckIcon() {
  return (
    <RNText className="text-primary-foreground text-xs leading-none">✓</RNText>
  );
}
