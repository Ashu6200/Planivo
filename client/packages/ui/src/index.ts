/**
 * @project/ui
 *
 * Shared UI component library powered by shadcn/ui for Web & Electron Renderer
 * and React Native Reusables for Mobile.
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
} from './providers/ThemeProvider.js';
export {
  AppProvider,
  type AppProviderProps,
} from './providers/AppProvider.js';

// ── Core Components ────────────────────────────────────────
export {
  Button,
  buttonVariants,
  type ButtonProps,
} from './components/Button.js';

export {
  Input,
  inputVariants,
  type InputProps,
} from './components/Input.js';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  type CardProps,
} from './components/Card.js';

export {
  Heading,
  headingVariants,
  type HeadingProps,
} from './components/Heading.js';

export {
  Text,
  textVariants,
  type TextProps,
} from './components/Text.js';

export {
  Badge,
  badgeVariants,
  type BadgeProps,
} from './components/Badge.js';

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './components/Avatar.js';

export { Separator } from './components/Separator.js';

export { Checkbox } from './components/Checkbox.js';

export { Switch } from './components/Switch.js';

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './components/Dialog.js';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
} from './components/DropdownMenu.js';

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectGroup,
} from './components/Select.js';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/Tabs.js';

export { Skeleton } from './components/Skeleton.js';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './components/Tooltip.js';

// ── Layout Helpers ─────────────────────────────────────────
export {
  Stack,
  XStack,
  YStack,
  ZStack,
  type LayoutProps,
} from './components/Layout.js';
