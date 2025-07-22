# iWebTechno Next.js Webapp

A modern, university-focused SaaS platform for digitizing educational institutions. Built with Next.js, Morphy UI, and a custom design system for a seamless, branded experience.

## 🚀 Features

- Product landing pages for Admissions, Attendance, Exams, HRMS, Finance, and more
- Responsive, accessible, and theme-aware (light/dark mode)
- Morphy UI design system: centralized color, typography, effects, and icon logic
- GSAP-powered hero and floating background animations
- Phosphor Icons with gradient and color mode support
- Custom error and 404 pages with Morphy UI
- Modern navigation with popover/dropup menus
- Fully TypeScript and ESLint compliant

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Morphy UI](./lib/morphy-ui/) (custom design system)
- [Phosphor Icons](https://phosphoricons.com/)
- [GSAP](https://greensock.com/gsap/) (for select animations)

## 📦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System Highlights

- **Morphy UI:** Centralized color variants, effects (fill, glass, fade), and ripple logic
- **Typography:** Only Exo 2 for headings, Quicksand for body (see `typography.classes`)
- **Icons:** Always use Phosphor Icons, with gradient backgrounds and color mode switching
- **No manual className for color/typography:** Use Morphy props and utility classes
- **Hero backgrounds:** Real, high-res images with dark overlays for text contrast
- **CTAs and Cards:** Consistent gradient, glass, and fade effects

## 📁 Folder Structure

```
app/                # Next.js app directory (pages, layout, routes)
components/         # UI components (Morphy UI, Cards, Buttons, Navbar, etc.)
hooks/              # Custom React hooks
lib/morphy-ui/      # Morphy UI design system (color, effects, icons, utils)
public/             # Static assets (images, icons, logos)
tailwind.config.ts  # Tailwind CSS config
```

## 🤝 Contributing

- PRs welcome! Please follow the Morphy UI and design system rules in `iwebrules.md`.
- All icons must use Phosphor, and all color/typography must use Morphy props.

## ⚖️ License

MIT (see `package.json`)

---

For more, see the [Morphy UI rules](./iwebrules.md) and in-code documentation.
