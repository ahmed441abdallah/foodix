import React from 'react';
import './HomePage.scss';
import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';

// ── Sections ──────────────────────────────────────────────────────────────────
import Hero           from '../../components/Hero/Hero';
import MenuGrid        from '../../components/Menu/Menu';
import CategoryList    from '../../components/Category/CategoryList';
import Chef            from '../../components/Chef/Chef';
import SocialProof     from '../../components/SocialProof/SocialProof';
import FoodLayout      from '../../components/FoodLayout/FoodLayaout';
import ComingSoon      from '../../components/ComingSoon/ComingSoon';
import CaloriesBalance from '../../components/Category2/CategoryList2';
import ChiefsSection   from '../../components/ChiefsSection/ChiefsSection';
import About           from '../../components/About/About';
import FilteredDrinks  from '../../components/Drink/DrinksC';
import Features        from '../../components/Features/Features';

const HomePage = () => {
  const { categories, categoryLoading } = useMealContext();

  return (
    <main className='home-page'>

      {/* ── 1. HERO — 100vh full-bleed ──────────────────────────────────── */}
      <Hero />

      {/* ── 2. FEATURED COLLECTIONS — editorial image grid ──────────────── */}
      <section className='home-section'>
        <div className='home-section__label'>
          <span>Featured Collections</span>
        </div>
        <MenuGrid />
      </section>

      {/* ── 3. CATEGORY NAVIGATION ──────────────────────────────────────── */}
      {categoryLoading ? (
        <Loader />
      ) : (
        <CategoryList categories={categories} />
      )}

      {/* ── 4. CHEF FEATURE ─────────────────────────────────────────────── */}
      <Chef />

      {/* ── 5. SOCIAL PROOF — taste highlight / pull quote ──────────────── */}
      <SocialProof />

      {/* ── 6. EDITORIAL STORY ROWS ─────────────────────────────────────── */}
      <FoodLayout />

      {/* ── 7. COMING SOON — dual-panel teaser ──────────────────────────── */}
      <ComingSoon />

      {/* ── 8. CALORIE / CATEGORY 2 TILES ───────────────────────────────── */}
      {categoryLoading ? (
        <Loader />
      ) : (
        <CaloriesBalance categories={categories} />
      )}

      {/* ── 9. CHEFS CAROUSEL ───────────────────────────────────────────── */}
      <ChiefsSection />

      {/* ── 10. ABOUT / LOCATION ────────────────────────────────────────── */}
      <About />

      {/* ── 11. FEATURED DRINKS ─────────────────────────────────────────── */}
      <FilteredDrinks />

      {/* ── 12. VALUE-PROP FEATURES ─────────────────────────────────────── */}
      <Features />

    </main>
  );
};

export default HomePage;
