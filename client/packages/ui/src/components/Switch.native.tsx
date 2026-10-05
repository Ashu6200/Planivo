import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { cn } from '../lib/utils.js';

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    className?: string;
  }
>(({ className, ...props }, ref) => {
  const Root = SwitchPrimitives.Root as any;
  const Thumb = SwitchPrimitives.Thumb as any;

  return (
    <Root
      className={cn(
        'flex flex-row h-8 w-[46px] shrink-0 items-center rounded-full border-2 border-transparent transition-colors disabled:opacity-50',
        props.checked ? 'bg-primary' : 'bg-input',
        className,
      )}
      {...props}
      ref={ref}
    >
      <Thumb
        className={cn(
          'h-7 w-7 rounded-full bg-background shadow-md transition-transform',
          props.checked ? 'translate-x-4' : 'translate-x-0',
        )}
      />
    </Root>
  );
});
Switch.displayName = 'Switch';
