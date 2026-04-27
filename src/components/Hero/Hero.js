import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.scss';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=90&auto=format&fit=crop';

const Hero = () => {
  return (
    <section className="hero">
      {/* Full-bleed background */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Gradient overlay — dark at bottom for text legibility */}
      <div className="hero__overlay" />

      {/* Bottom-left editorial content block */}
      <div className="hero__content">
        <motion.span
          className="hero__overline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Gourmet Food &amp; Beverage
        </motion.span>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Crafted for<br />Extraordinary<br />Palates
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          Seasonally sourced. Obsessively prepared.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/mealListAll" className="hero__cta hero__cta--solid">
            Discover the Menu
          </Link>
          <Link to="/drink" className="hero__cta hero__cta--outline">
            Explore Drinks
          </Link>
        </motion.div>
      </div>

      {/* Vertical scroll label — right edge */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
