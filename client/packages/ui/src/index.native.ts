/**
 * @project/ui (React Native)
 *
 * React Native Reusables component library for Mobile.
 */

// ── Utilities & Tokens ─────────────────────────────────────
export { cn } from './lib/utils.js';
export * from './tokens/index.js';

// ── Providers ──────────────────────────────────────────────
export {
  ThemeProvider,
  useTheme,
  type Theme,
  type ThemeProviderProps,
} from './providers/ThemeProvider.native.js';
export {
  AppProvider,
  type AppProviderProps,
} from './providers/AppProvider.native.js';

// ── Core Components ────────────────────────────────────────
export {
  Button,
  buttonVariants,
  buttonTextVariants,
  type ButtonProps,
} from './components/Button.native.js';

export {
  Input,
  inputVariants,
  type InputProps,
} from './components/Input.native.js';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  type CardProps,
} from './components/Card.native.js';

export {
  Heading,
  headingVariants,
  type HeadingProps,
} from './components/Heading.native.js';

export {
  Text,
  textVariants,
  TextClassContext,
  type TextProps,
} from './components/Text.native.js';

export {
  Badge,
  badgeVariants,
  badgeTextVariants,
  type BadgeProps,
} from './components/Badge.native.js';

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './components/Avatar.native.js';

export { Separator } from './components/Separator.native.js';

export { Checkbox } from './components/Checkbox.native.js';

export { Switch } from './components/Switch.native.js';

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './components/Dialog.native.js';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
} from './components/DropdownMenu.native.js';

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from './components/Select.native.js';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/Tabs.native.js';

export { Skeleton } from './components/Skeleton.native.js';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from './components/Tooltip.native.js';

// ── Layout Helpers ─────────────────────────────────────────
export {
  Stack,
  XStack,
  YStack,
  ZStack,
  type LayoutProps,
} from './components/Layout.native.js';
