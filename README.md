# Foodix — Gourmet Food & Beverage Platform

A luxury editorial food and beverage discovery web app built with React. Browse curated meals, explore drink categories, and discover gourmet recipes through a hyper-minimalist, high-end UI inspired by premium culinary brands.

---

## Preview

> Ultra-premium aesthetic · Playfair Display headings · Inter body · Espresso accent palette

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| Styling | Sass (SCSS modules per component) |
| Animations | Framer Motion |
| HTTP Client | Axios |
| Icons | React Icons |
| Carousel | React Slick |
| Counter | React CountUp |
| Build Tool | Create React App (react-scripts 5) |

---

## Features

- **Home Page** — Hero section, meal categories, featured chefs, coming-soon panels, and editorial food layout sections
- **Meal Browsing** — Filterable meal grid with category badges and smooth hover interactions
- **Meal Details** — Full ingredient list, measurements, step-by-step instructions, tags, and related meals
- **Drink Categories** — Browse and discover beverage options with dedicated detail pages
- **Search** — Live search results across meals
- **Category Pages** — Filter meals by cuisine or food type
- **Animated Loader** — Full-screen branded transition between route changes
- **Responsive Sidebar** — Full-overlay dark navigation panel
- **Scroll-to-top** — Automatic scroll reset on every route change

---

## Project Structure

```
src/
├── App.js                   # Root shell — routes, navbar, footer, loader
├── App.scss                 # Global design system (palette, typography, utilities)
├── api/
│   └── axios.js             # Axios instance configuration
├── actions/                 # Redux-style action creators
├── reducers/                # State reducers
├── context/
│   ├── mealContext.js       # Meal data context provider
│   └── sidebarContext.js    # Sidebar open/close context
├── pages/
│   ├── HomePage/
│   ├── MealDetailsPage/
│   ├── CategoryPage/
│   ├── DrinkDetailsPage/
│   └── ErrorPage/
├── components/
│   ├── Header/              # Navbar + hero sections + search form
│   ├── Footer/
│   ├── Sidebar/
│   ├── Meal/                # Meal card, list, single detail
│   ├── Drink/               # Drink list, about, single
│   ├── Chef/                # Chef feature section
│   ├── ChiefsSection/       # Chefs carousel
│   ├── Category/            # Horizontal category icon grid
│   ├── Category2/           # Visual category showcase
│   ├── Features/            # Value-prop icon blocks
│   ├── FoodLayout/          # Editorial story rows
│   ├── Menu/                # Image-grid menu
│   ├── About/               # About + location section
│   ├── secsion/             # Full-bleed quote callout
│   ├── ComingSoon/          # Dual-panel teaser
│   ├── Headersingle/        # Detail page hero
│   ├── Loader/              # Page transition loader
│   └── NotFound/
└── utils/
    ├── constants.js
    └── images.js
```

---

## Getting Started

### Prerequisites

- Node.js `>= 16`
- npm `>= 8`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/foodix.git
cd foodix

# Install dependencies
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser with hot reload.

### Production Build

```bash
npm run build
```

Outputs an optimized production bundle to the `build/` folder.

---

## Design System

The UI follows the **UI-UX-PRO-MAX** methodology — a hyper-minimalist, editorial design language built for luxury food brands.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Jet Black | `#0A0A0A` | Navbar, footer, hero backgrounds, primary text |
| Alabaster | `#FAFAF8` | Main page background |
| Pure White | `#FFFFFF` | Cards, surfaces |
| Warm Gray | `#5A5A5A` | Secondary body text |
| Muted Gray | `#9A9A9A` | Labels, overlines, icons |
| Linen Border | `#E8E3DC` | Dividers, card borders |
| **Espresso** | `#3D1C0C` | Primary accent — CTAs, badges, links |
| Deep Wine | `#7A1C1C` | Secondary accent (very sparingly) |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings (H1–H6) | Playfair Display | 700 – 900 |
| Body copy | Inter | 400 |
| UI labels, nav, micro-copy | Inter | 500 – 600 |
| Uppercase overlines | Inter | 700 + `letter-spacing: 0.18em` |

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/mealListAll` | All Meals |
| `/meal/:id` | Meal Detail |
| `/meal/category/:name` | Category |
| `/search` | Search Results |
| `/drink` | Drink Categories |
| `/drink/:id` | Drink Detail |
| `*` | 404 Error |

---

## License

MIT © 2024 Foodix
