import { View, type ViewProps } from 'react-native';
import { cn } from '../lib/utils.js';

export function Skeleton({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <View
      className={cn('rounded-md bg-muted opacity-80', className)}
      {...props}
    />
  );
}
