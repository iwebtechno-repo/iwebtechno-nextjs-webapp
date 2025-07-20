# GenZDealZ Design System (v3.3)

## 🎯 Core Rules

### 1. **Components**

- Use **shadcn/ui** components only (`npm install` not manual files)
- Use `shadcn@` not `shadcn-ui`
- Always use available props (`size`, `variant`, `showRipple`, `icon`)
- All color/gradient/glass variants must use the centralized `ColorVariant` type

### 2. **Code Style**

- **Arrow functions only** — use `const Component = () => {}`
- Use ES6+ syntax
- Make components reusable

### 3. **UI/UX**

- Add physics/vibe to elements (ripple effects, smooth transitions)
- **NO hover scale effects** (no `transform: scale` on hover)
- Use `cursor-pointer` for interactive elements
- Add proper spacing (`px-6` to `px-16` for buttons)
- **Text overflow tooltips**: Always add `title` attribute to elements with `truncate` class for automatic overflow detection

### 4. **Effects**

- Use `lib/morphy-ui/morphy.tsx` for all effects and types
- **`variant` prop controls color, `effect` prop controls style (e.g. "glass")**
- Use `showRipple={true}` for interactive elements
- Apply glass effects using `effect="glass"`, which works with any `variant`
- **Ripple colors automatically complement variant colors** — no manual configuration needed
- Glass effect uses modern Tailwind approach with CSS variables

### 5. **Icons**

- Use **Phosphor Icons** (`@phosphor-icons/react@2.1.10`) — MIT licensed for commercial use
- **Always use the `Icon` suffix** (e.g., `ChatCircleIcon`, `TrendUpIcon`, `CaretRightIcon`)
- **Global icon weight management** — Use `useIconWeight()` hook or `IconWrapper` component
- **Default weight**: `regular` (configurable via `IconThemeProvider`)
- **Use icon prop** — Prefer `icon={{ icon: IconName }}` over manual icon rendering
- Import like: `import { ChatCircleIcon } from "@phosphor-icons/react";`
- **Social Icons**: Use exported social icons from morphy system (`GoogleIcon`, `AppleIcon`, `InstagramIcon`)
- **Icon prop structure**: `{ icon: IconComponent, title?: string, gradient?: boolean }` - NO subtitle in icon prop
- **shadcn Icon Replacement**: When installing shadcn components, ALWAYS replace Lucide React icons with Phosphor equivalents:
  - `ChevronRight` → `CaretRightIcon`
  - `MoreHorizontal` → `DotsThreeIcon`
  - `ChevronDown` → `CaretDownIcon`
  - `ChevronUp` → `CaretUpIcon`
  - `ChevronLeft` → `CaretLeftIcon`
  - `Menu` → `ListIcon`
  - `X` → `XIcon`
  - `Search` → `MagnifyingGlassIcon`
  - `User` → `UserIcon`
  - `Settings` → `GearIcon`
  - `Home` → `HouseIcon`
  - `Mail` → `EnvelopeIcon`
  - `Phone` → `PhoneIcon`
  - `Calendar` → `CalendarIcon`
  - `Clock` → `ClockIcon`
  - `Check` → `CheckIcon`
  - `Plus` → `PlusIcon`
  - `Minus` → `MinusIcon`
  - `Edit` → `PencilIcon`
  - `Trash` → `TrashIcon`
  - `Download` → `DownloadIcon`
  - `Upload` → `UploadIcon`
  - `Eye` → `EyeIcon`
  - `EyeOff` → `EyeSlashIcon`
  - `Lock` → `LockIcon`
  - `Unlock` → `UnlockIcon`
  - `Star` → `StarIcon`
  - `Heart` → `HeartIcon`
  - `Share` → `ShareIcon`
  - `Bookmark` → `BookmarkIcon`
  - `Filter` → `FunnelIcon`
  - `Sort` → `ArrowsDownUpIcon`
  - `Refresh` → `ArrowsClockwiseIcon`
  - `External` → `ArrowUpRightIcon`
  - `Copy` → `CopyIcon`
  - `Link` → `LinkIcon`
  - `Alert` → `WarningIcon`
  - `Info` → `InfoIcon`
  - `Success` → `CheckCircleIcon`
  - `Error` → `XCircleIcon`

### 6. **Morphy Props Over Manual ClassNames**

- **NEVER use manual className when morphy props are available**
- **Use built-in props instead of manual styling**:

```typescript
// ❌ WRONG - Manual className
<Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-500/90 hover:to-purple-600/90">

// ✅ CORRECT - Use variant prop
<Button variant="blue">

// ❌ WRONG - Manual glass styling
<Button className="bg-white/10 backdrop-blur-md border border-white/20">

// ✅ CORRECT - Use effect prop for glass
<Button variant="none" effect="glass">

// ❌ WRONG - Manual ripple styling
<Button className="relative overflow-hidden">

// ✅ CORRECT - Use showRipple prop
<Button showRipple>
```

- **Available morphy props to use**:
  - `variant`: centralized `ColorVariant` (`"none"`, `"link"`, `"gradient"`, `"blue"`, `"purple"`, `"green"`, `"orange"`, `"multi"`)
  - `effect`: `"fill"` (default) or `"glass"`
  - `showRipple`: boolean
  - `size`: `"sm"`, `"default"`, `"lg"`, `"xl"`, `"icon"`, `"icon-sm"`
  - `icon`: `{ icon: IconComponent, title?: string, gradient?: boolean }`
- **Only use className for custom positioning, layout, or unique styling not covered by morphy props**

### 7. **Card Component Icon Usage**

- **ALWAYS use Card's `icon` prop instead of manual `GradientIcon` components**
- **Icon prop structure**: `{ icon: IconComponent, title?: string, gradient?: boolean }`
- **Subtitle content goes in card body using `CardDescription`** - never in icon prop
- **Gradient icons**: Use `gradient: true` in icon prop for gradient backgrounds

```typescript
// ❌ WRONG - Using GradientIcon component
<Card>
  <GradientIcon icon={SparkleIcon} />
  <h3>Title</h3>
  <p>Description</p>
</Card>

// ✅ CORRECT - Using Card's icon prop
<Card
  icon={{
    icon: SparkleIcon,
    title: "Title",
    gradient: true
  }}
>
  <CardDescription>Description</CardDescription>
</Card>
```

### 8. **Avoid Single-Purpose Styling Components**

- **Do NOT create separate components for simple styling wrappers.** For example, a `GradientText` component that only applies a gradient is an anti-pattern.
- **EXCEPTION:** The `GradientText` component from morphy-ui is the ONLY allowed wrapper for gradient text in headers. Use it for all main application/section headers. It automatically applies the brand blue→orange gradient in light mode and orange→blue in dark mode.
- **DO use Tailwind CSS utility classes directly on `<span>` or other elements for all other gradient text.**
- **Rationale**: Direct utility class usage makes components more self-contained and easier to understand, maintain, and migrate. It avoids unnecessary abstractions for simple styling tasks, except for the approved header gradient pattern.

```typescript
// ✅ CORRECT - For headers
import { GradientText } from "@/components/ui/gradient-text";
<h1><GradientText>Header</GradientText></h1>

// ✅ CORRECT - For inline gradient text
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0470b6] to-[#f49d2f] dark:from-[#f49d2f] dark:to-[#0470b6]">Text</span>
```

### 9. **Layout & Spacing Patterns**

- **Navbar-aware layouts**: Always account for fixed navbar height (7rem/112px) in layout calculations
- **Consistent container widths**: Use `w-64` (16rem) for sidebars, full width for main content areas
- **Proper spacing hierarchy**:
  - `px-2` for sidebar content padding
  - `px-4` to `px-6` for main content padding
  - `p-4` for component padding
- **Height calculations**: Use `h-screen` for full viewport, `calc(100vh - 7rem)` for navbar-aware layouts
- **Gap management**: Minimize gaps between sidebar and main content (use consistent width units)

### 10. **State Management & Interactions**

- **Active state prominence**: Make active states significantly more prominent than hover states
- **State hierarchy**: Active > Hover > Default (clear visual distinction between each)
- **Interactive feedback**: All interactive elements must have hover and active states
- **State persistence**: Use `isActive` prop for persistent state management
- **Event handling**: Always prevent event bubbling when needed (`e.stopPropagation()`)

### 11. **Accessibility & UX Patterns**

- **Keyboard navigation**: All interactive elements must be keyboard accessible
- **ARIA labels**: Use descriptive `aria-label` for all interactive elements
- **Tooltip consistency**: Use `title` attribute for truncated text, `tooltip` prop for component tooltips
- **Focus management**: Ensure proper focus order and visible focus indicators
- **Screen reader support**: Use semantic HTML and proper ARIA attributes

### 12. **Toast Notifications (Sonner)**

- **Only one `<Toaster />` (Sonner) should be mounted in the app, and it must be placed in `app/layout.tsx`.**
- **Do NOT add `<Toaster />` to individual app router pages.**
- All toast notifications throughout the app will use this global Toaster and inherit its props (e.g., `variant`).
- **Sonner toasts use fill effect only** - no glass effect implementation, consistent with Button component styling.
- **Use `router.push()` for navigation after toasts** - This preserves React app state and keeps toasts visible during navigation.
- **Avoid `window.location.href` after toasts** - This causes full page reloads that unmount the React app and dismiss toasts.
- **Toast duration**: Use `duration: 4000` (4 seconds) for success messages, let error/warning toasts auto-dismiss.
- This ensures consistent toast styling, avoids duplication, and prevents conflicts.

## 🧩 Component Patterns

### 13. **Button Component**

```typescript
import { Button } from "@/components/ui/button";

// Complete button with all props
<Button
  size="xl"
  variant="gradient"
  showRipple
  icon={{ icon: SparkleIcon, title: "Action" }}
>
  Action
</Button>

// Social login buttons
<Button variant="none" effect="glass" showRipple>
  <GoogleIcon className="mr-2 h-5 w-5" />
  Sign in with Google
</Button>
```

### 14. **Card Component**

```typescript
import { Card, CardDescription } from "@/components/ui/card";

// Complete card with icon prop and description
<Card
  variant="multi"
  effect="glass"
  showRipple
  icon={{
    icon: ChatCircleIcon,
    title: "Chat",
    gradient: true
  }}
>
  <CardDescription>Start a conversation</CardDescription>
</Card>

// Card with gradient icon
<Card
  icon={{
    icon: SparkleIcon,
    title: "Feature",
    gradient: true
  }}
>
  <CardDescription>Feature description</CardDescription>
</Card>
```

### 15. **Icon Patterns**

```typescript
import { SparkleIcon, ChatCircleIcon } from "@phosphor-icons/react";

// Standard icon usage
<SparkleIcon className="h-4 w-4" weight={useIconWeight()} />

// Social icons - consistent sizing
<GoogleIcon className="h-5 w-5" />
<AppleIcon className="h-5 w-5" />
<InstagramIcon className="h-5 w-5" />

// Icon prop system (preferred)
<Button variant="none" effect="glass" icon={{ icon: SparkleIcon, title: "Action" }}>
  Click me
</Button>

// Gradient background for accordion icons
<div className="flex-shrink-0 bg-gradient-to-r rounded-lg flex items-center justify-center from-[#0470b6] to-[#0891b2] dark:from-[#fbbf24] dark:to-[#f59e0b] w-6 h-6">
  {React.createElement(IconComponent, { className: "text-white dark:text-black" })}
</div>
```

### 16. **Chat Interface Patterns**

```typescript
// Chat sidebar with proper state management
<SidebarMenuButton
  isActive={chat.isActive}
  onClick={() => onSelectChat(chat.id)}
  tooltip={chat.title}
  variant={chat.isActive ? "outline" : "default"}
  showRipple
  className={cn(
    "w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all duration-200",
    chat.isActive
      ? "bg-primary/20 border-primary/50 text-primary shadow-md hover:bg-primary/25"
      : "hover:bg-muted/50 hover:text-foreground"
  )}
  aria-label={chat.title}
>
  {/* Chat content with proper text overflow handling */}
  <p className="truncate" title={chat.title}>
    {chat.title}
  </p>
</SidebarMenuButton>

// Chat input with proper spacing
<div className="flex-1 flex flex-col">
  <div className="flex-1 overflow-y-auto pt-4">
    {/* Messages */}
  </div>
  <div className="border-t p-4">
    {/* Input */}
  </div>
</div>
```

## 🎨 Brand Colors & Gradients

### 17. **Primary Brand Gradient**

```css
/* Primary Brand Gradient */
bg-gradient-to-r from-[#d0427f] to-[#303293]
hover:from-[#d0427f]/90 hover:to-[#303293]/90
```

## 📁 File Structure

### 18. **Project Organization**

```
components/ui/           # shadcn components
lib/
  morphy-ui/             # All effects and types
    types.ts             # Effect types and interfaces
    gradients.ts         # Gradient presets and utilities
    ripple.tsx           # Ripple effects (auto-complements variants)
    utils.ts             # Effect utilities
    icon-theme-context.tsx # Icon weight management
    icon-utils.tsx       # Icon utilities
    social-icons.tsx     # Social media icons (Google, Apple, Instagram)
    morphy.tsx           # Main effects entry point
app/                     # Next.js pages
```

## 📦 Imports

### 19. **Standard Imports**

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  useRipple,
  gradientPresets,
  createGradient,
  getVariantGradient,
  getRippleGradient,
  GradientShowcase,
  GlassShowcase,
} from "@/lib/morphy-ui/morphy";
import { useIconWeight } from "@/lib/morphy-ui/icon-theme-context";
import { GoogleIcon, AppleIcon, InstagramIcon } from "@/lib/morphy-ui/morphy";
import {
  ChatCircleIcon,
  TrendUpIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
```

## 🔧 Social Icons System

### 20. **Social Icons Usage**

```typescript
// Import social icons
import { GoogleIcon, AppleIcon, InstagramIcon, SocialIcons } from "@/lib/morphy-ui/morphy";

// Available social icons
SocialIcons.Google      // GoogleIcon component
SocialIcons.Apple       // AppleIcon component
SocialIcons.Instagram   // InstagramIcon component

// Usage in components - consistent sizing
<GoogleIcon />
<AppleIcon />
<InstagramIcon />
```

## ⚖️ License Compliance

### 21. **Dependency Licensing**

- **Mandatory Check**: Before installing any new dependency, its license **must** be verified to ensure it is safe for commercial use.
- **Permitted Licenses**: `MIT`, `Apache-2.0`, `ISC`, and `BSD` are pre-approved.
- **Requires Review**: Licenses like `LGPL` or `MPL` require team review before use.
- **Strictly Prohibited**: `GPL`, `AGPL`, and `UNLICENSED` packages are forbidden.
- **Verification Command**: Use `npm view <package-name> license` to quickly check a package's license from the terminal.

---

**Remember**: Use `ColorVariant` everywhere, use `effect="glass"` for glass effects, ripple color is derived from `ColorVariant`, and all effects are centralized in morphy-ui. **Icons never have subtitles - use CardDescription for subtitle content.**

_Last Updated: 2024-12_
_Version: 3.3_

## 🖼️ Images & Media

### 22. **Image Component Usage**

- **Use standard `<img>` for external sources**: For images loaded from external URLs (e.g., from an API or a different domain), use the standard HTML `<img>` tag instead of Next.js's `<Image>` component. This avoids configuration issues with `next.config.ts` for a large number of external domains.
- **Linter Warnings for `<img>`**: It is acceptable to have linter warnings related to using `<img>` instead of `<Image>`. These warnings can be ignored as this is an intentional choice for handling external media.
- **Use Next.js `<Image>` for local assets**: For local images stored within the `/public` directory, continue to use the Next.js `<Image>` component to benefit from automatic optimization.

**Implementation Pattern:**

```tsx
// ✅ CORRECT - For external images from an API
<img
  src={deal.image}
  alt={deal.title}
  className="object-cover w-full h-full"
/>

// ✅ CORRECT - For local static images
import localImage from '@/public/images/local-image.png';
<Image
  src={localImage}
  alt="Description of local image"
/>

// ❌ WRONG - Using Next/Image for dynamic external URLs
<Image
  src={deal.image} // deal.image is from an external API
  alt={deal.title}
  width={500}
  height={300}
/>
```

### 23. **Accordion Layout & Separator Rules**

- Use shadcn/ui Accordion for all expandable/collapsible lists.
- On **desktop (md+)**:
  - Submodules/features should be grouped into rows of two, rendered as a grid.
  - Each row is a single Accordion with two AccordionItems (left and right) that expand/collapse together.
  - After each row (except the last), insert a full-width horizontal divider (`<div className="border-b w-full" />`) to act as a row separator. Do NOT use `border-b` on individual AccordionItems for desktop.
- On **mobile**:
  - Use a single column with independent AccordionItems, each with its own `border-b` for separation.
- All colors and gradients must use the brand palette: blue→orange in light mode, orange→blue in dark mode.

### 24. **Hero Backgrounds & Image Usage**

- **Product Page Heroes**: Use high-quality (2K+) real images from the internet that are contextually relevant to each product
- **Image Quality**: Minimum 2K resolution (2048px width) for hero backgrounds
- **Image Sources**: Use reputable stock photo services or high-quality free images
- **Contextual Relevance**: Images should directly relate to the product/service being offered
- **Overlay Usage**: Apply dark overlays to ensure text readability over images
- **Responsive Design**: Use `object-cover` and proper aspect ratios for mobile compatibility
- **Performance**: Optimize images for web delivery while maintaining quality

**Implementation Pattern:**

```tsx
// ✅ CORRECT - Hero with real background image
<section className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url('https://high-quality-image-url.jpg')` }}>
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 py-20">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      <GradientText>Product Title</GradientText>
    </h1>
    <p className="text-xl text-gray-200 max-w-2xl">
      Product description
    </p>
  </div>
</section>

// ✅ CORRECT - Responsive image handling
<img
  src="https://high-quality-image-url.jpg"
  alt="Descriptive alt text"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

**Product-Specific Image Guidelines:**

- **Admission Management**: University campus, students applying, digital enrollment
- **Student Attendance**: Classroom settings, attendance tracking, biometric systems
- **Fee Collection**: Payment processing, financial management, digital transactions
- **Student Exams**: Examination halls, question papers, result processing
- **Purchase Inventory**: Supply chain, inventory management, procurement
- **HRMS Payroll**: Office environments, HR processes, payroll management
- **Portal GAD**: Digital transformation, portal interfaces, document management

### 25. **Bottom Navigation Spacing**

- **NO global layout padding**: Never add `pb-32 lg:pb-40` to the main layout container
- **Component-level spacing**: Add bottom spacing only to the last component of each page
- **Standard spacing**: Use `pb-32 lg:pb-40` for mobile (8rem) and desktop (10rem) respectively
- **Immersive design**: This approach maintains the immersive feel without unnecessary white space
- **Consistent implementation**: Apply to all pages to prevent navbar overlap

**Implementation Pattern:**

```tsx
// ✅ CORRECT - Add spacing to last component
<section className="py-10 pb-32 lg:pb-40">
  {/* Last component content */}
</section>

// ✅ CORRECT - Wrap footer with spacing
<div className="pb-32 lg:pb-40">
  <Footer />
</div>

// ❌ WRONG - Don't add global layout padding
<main>
  <div className="min-h-screen pb-32 lg:pb-40">{children}</div>
</main>
```

**Pages requiring bottom spacing:**

- Home page: CTA component
- Product pages: CTA section
- Blog page: Footer component
- Other pages: Last main section
