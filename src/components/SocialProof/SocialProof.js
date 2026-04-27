import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import './SocialProof.scss';
import { fadeIn } from '../../reducers/variants';

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="sp-inner">

        {/* Star rating */}
        <motion.div
          className="sp-stars"
          variants={fadeIn('up', 'tween', 0.2, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="sp-star" />
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          className="sp-quote"
          variants={fadeIn('up', 'tween', 0.4, 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          &ldquo;An extraordinary culinary journey. Every dish is a testament
          to craft, seasonal obsession, and an uncompromising reverence
          for the finest ingredients money can source.&rdquo;
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          className="sp-divider"
          variants={fadeIn('up', 'tween', 0.55, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Reviewer attribution */}
        <motion.cite
          className="sp-cite"
          variants={fadeIn('up', 'tween', 0.65, 1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="sp-author">Elena Marchetti</span>
          <span className="sp-role">Senior Food Critic — La Gazette Gourmande</span>
        </motion.cite>

      </div>
    </section>
  );
};

export default SocialProof;
