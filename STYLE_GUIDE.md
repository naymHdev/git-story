# Homepage Style Guide

## Visual Design System

### Color Palette

#### Primary Colors

- **Indigo-600**: `#6366f1` - Main CTA, interactive elements
- **Indigo-700**: `#4f46e5` - Hover state for primary buttons
- **Cyan-400**: `#06b6d4` - Accent, gradients

#### Background Colors

- **Slate-950**: `#0f172a` - Primary background
- **Slate-900**: `#1e293b` - Cards, sections
- **Slate-900/50**: `#1e293b` (50% opacity) - Semi-transparent overlays

#### Text Colors

- **White**: `#f8fafc` - Primary text, headings
- **Slate-300**: `#e2e8f0` - Secondary text
- **Slate-400**: `#94a3b8` - Tertiary text, muted
- **Slate-500**: `#64748b` - Disabled, very muted

#### Border Colors

- **Slate-700**: `#334155` - Borders, dividers
- **Indigo-500/20**: `rgba(99, 102, 241, 0.2)` - Soft borders, hover states

### Typography

#### Font Stack

- **Headings** (Satoshi): Bold, confident messaging
- **Body** (Inter): Clean, readable body text
- **Monospace** (system): Code snippets, data

#### Scale

```
h1: 48px - 64px (text-5xl to text-7xl)
h2: 36px - 40px (text-4xl to text-5xl)
h3: 24px (text-xl to text-2xl)
body: 16px - 18px (text-base to text-lg)
small: 12px - 14px (text-sm)
```

#### Weight

- Light: 300 - Rarely used
- Regular: 400 - Body text
- Medium: 500 - Smaller headings, labels
- Semibold: 600 - Section titles
- Bold: 700 - Main headings, CTAs

### Spacing System

Based on `0.25rem` (4px) increments:

```
xs: 0.5rem   (8px)
sm: 1rem     (16px)
md: 1.5rem   (24px)
lg: 2rem     (32px)
xl: 3rem     (48px)
2xl: 4rem    (64px)
```

**Container**: Max-width 80rem (1280px)

### Border Radius

- Buttons: `rounded-lg` (0.5rem = 8px)
- Cards: `rounded-xl` (0.75rem = 12px)
- Large sections: `rounded-2xl` (1rem = 16px)

### Shadows

- Light hover: `shadow-lg shadow-indigo-500/10`
- Medium card: `shadow-xl shadow-black/20`
- Heavy overlay: `shadow-2xl shadow-black/40`

## Component Patterns

### Buttons

#### Primary Button

```tsx
<button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all">
  Get Started
</button>
```

#### Secondary Button

```tsx
<button className="px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-900/50 transition-colors">
  Learn More
</button>
```

### Cards

#### Feature Card

```tsx
<div className="p-8 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all">
  {/* Content */}
</div>
```

### Layout Patterns

#### Section Wrapper

```tsx
<section className="py-20 px-6 relative">
  <div className="max-w-7xl mx-auto">{/* Content */}</div>
</section>
```

#### Grid Layout

- **Features**: 3 columns (lg), 2 columns (md), 1 column (mobile)
- **Testimonials**: 3 columns (lg), 2 columns (md), 1 column (mobile)
- **Workflow**: 4 columns (lg), 2 columns (md), 1 column (mobile)

### Gradients

#### Background Gradient

```
from-indigo-600/20 to-cyan-600/20
```

#### Text Gradient

```
bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
```

#### Orb Effects

```tsx
<div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-3xl"></div>
```

## Interaction Patterns

### Hover Effects

#### Button Hover

```
opacity change + background color shift
transition: all 0.2s ease
```

#### Card Hover

```
border color change (slate → indigo)
shadow increase
transition: all 0.3s ease
```

#### Link Hover

```
color: var(--color-primary) → var(--color-primary-hover)
transition: color 0.2s ease
```

### Animations

#### Fade In

```
opacity: 0 → 1
duration: 0.3-0.4s
```

#### Slide Up

```
transform: translateY(20px) → translateY(0)
opacity: 0 → 1
duration: 0.4-0.45s
```

#### Stagger

```
delay: index * 0.07s
creates cascade effect
```

## Responsive Design

### Breakpoints

- **Mobile First**: Default styles for mobile
- **sm** (640px): Tablet start
- **md** (768px): Larger tablet
- **lg** (1024px): Desktop
- **xl** (1280px): Large desktop

### Mobile Adaptations

- 1 column layouts
- Full-width buttons
- Hamburger menu navigation
- Larger touch targets (48px+ height)
- Increased padding/margins

### Tablet Adaptations

- 2 column grids
- Wider containers
- Optimized navigation

### Desktop Adaptations

- Full multi-column layouts
- Expanded features
- More whitespace
- Advanced hover effects

## Accessibility

### Color Contrast

- Text on background: ✓ 7+ WCAG AA
- Links: ✓ Underlined or distinct color
- Buttons: ✓ Sufficient contrast

### Interactive Elements

- Minimum size: 44x44px (touch targets)
- Keyboard accessible: ✓ Tab navigation
- Focus visible: ✓ Clear focus states
- ARIA labels: ✓ Where needed

### Semantics

- Headings: h1, h2, h3 (not div styling)
- Links: `<a>` tags with href
- Buttons: `<button>` for actions
- Forms: `<input>`, `<label>`, `<form>`

## Performance Tips

### CSS

- Use Tailwind utilities (no custom CSS)
- Minimize pseudo-elements
- Group related utilities
- Use hover states efficiently

### Images

- None used (gradients + icons)
- Lucide icons: ~1KB per import
- Preload if needed

### Typography

- System fonts (already loaded)
- Limit font weights
- No Google Fonts (performance)

### Layout

- CSS Grid/Flexbox only
- No JavaScript layouts
- Avoid deeply nested divs
- Use semantic HTML

## Files to Know

```
src/app/globals.css          # Color variables, theme
src/components/home/*.tsx    # Section components
src/components/layout/*.tsx  # Navigation, footer
src/app/(marketing)/page.tsx # Homepage entry
```

## Customization Examples

### Change Primary Color

```tsx
// Find: bg-indigo-600
// Replace: bg-blue-600
// Find: text-indigo-400
// Replace: text-blue-400
```

### Change Font Size

```tsx
// Find: text-5xl
// Replace: text-6xl
```

### Change Spacing

```tsx
// Find: py-20
// Replace: py-24
```

### Add New Section

```tsx
export const NewSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">{/* Follow existing patterns */}</div>
    </section>
  );
};
```

---

**Last Updated**: May 24, 2026
