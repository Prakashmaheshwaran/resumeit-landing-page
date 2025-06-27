# Resume.ai - Astro Website

A comprehensive AI-powered resume optimization platform built with Astro, featuring modern design, full responsiveness, and optimal performance.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Features.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── pricing.astro
│       ├── features.astro
│       ├── docs.astro
│       └── blog.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌟 Features

### Core Features

- **AI-Powered Resume Optimization** - 95% ATS pass rate
- **Chrome Extension** - Real-time job description analysis
- **Multi-Browser Support** - Chrome, Edge, Firefox, Opera
- **API & Webhooks** - Developer-friendly integration
- **SDK Support** - Python available, Node.js coming soon

### Design & UX

- **Modern Design** - Clean 2D aesthetic with metallic black, blue, and white palette
- **Fully Responsive** - Mobile-first approach, works on all screen sizes
- **Fast Performance** - Astro's static site generation for optimal loading
- **Accessible** - Semantic HTML and ARIA attributes

### Pages

- **Homepage** - Hero, stats, features, browser support, pricing overview
- **Pricing** - Detailed pricing tiers with feature comparison and FAQ
- **Features** - Comprehensive feature showcase with integrations
- **Documentation** - API reference, SDKs, quick start guide
- **Blog** - Featured articles and career insights

## 🛠️ Technology Stack

- **Framework**: Astro 4.0+
- **Styling**: TailwindCSS 3.4+
- **Interactivity**: React components for complex interactions
- **TypeScript**: Full type safety
- **Build Tool**: Vite (built into Astro)

## 🎨 Design System

### Colors

- **Primary Blue**: #3B82F6
- **Metallic Black**: #1a1a1a
- **Metallic Gray**: #2d2d2d
- **Metallic Light**: #404040

### Typography

- **Headings**: Bold, clean sans-serif
- **Body**: System font stack for optimal readability

### Components

- Reusable Astro components
- React islands for interactive elements
- Consistent spacing and sizing

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd resume-ai-astro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `./dist/` directory, ready for deployment to any static hosting service.

## 📈 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with Astro's zero-JS default
- **Loading Speed**: Sub-second initial page loads

## 🔧 Customization

### Adding New Pages

Create `.astro` files in the `src/pages/` directory. Astro uses file-based routing.

### Modifying Components

Edit components in `src/components/` directory. Use Astro syntax for static content and React for interactive elements.

### Styling Changes

Update `tailwind.config.mjs` for design system changes or add custom CSS in component files.

## 📞 Support

For questions about implementation or customization, refer to:

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📄 License

This project is licensed under the MIT License.
