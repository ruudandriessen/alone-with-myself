# Alone with Myself

An incremental space-themed game built with SolidJS and TailwindCSS.

## Tech Stack
- SolidJS + TypeScript
- TanStack Router
- TailwindCSS
- Vite + Bun

## Design Principles

### Mobile-First
Always write styles for mobile first, then add breakpoints for larger screens:
- Base: Mobile (stacked layouts, bottom navigation)
- sm (640px+): Better typography/spacing
- md (768px+): Grid layouts, side navigation
- lg (1024px+): Multi-column grids

### Responsive Patterns
- Layouts: `flex flex-col md:flex-row` or `flex flex-col md:grid md:grid-cols-N`
- Navigation: Bottom bar on mobile (`flex-col-reverse`), left sidebar on desktop
- Touch targets: Larger on mobile (`p-3 md:p-2`)
- Typography: Smaller on mobile (`text-base sm:text-lg`)

### Styling
- Dark mode by default
- TailwindCSS utilities over custom CSS
- Colors: `#0a0a0a` bg, `#e5e5e5` text, `blue-500` accent
- Borders: `gray-600`/`gray-700`
