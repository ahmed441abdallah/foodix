import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className='footer'>

      {/* Newsletter band */}
      <div className='footer-newsletter'>
        <div className='footer-newsletter__inner'>
          <div className='footer-newsletter__text'>
            <span className='footer-newsletter__overline'>Stay in the loop</span>
            <h4 className='footer-newsletter__heading'>
              Never Miss a Recipe
            </h4>
          </div>
          {subscribed ? (
            <p className='footer-newsletter__confirm'>
              You're on the list. Thank you.
            </p>
          ) : (
            <form className='footer-newsletter__form' onSubmit={handleSubscribe}>
              <input
                type='email'
                className='footer-newsletter__input'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type='submit' className='footer-newsletter__btn'>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer columns */}
      <div className='footer-body'>
        <div className='footer-1'>

          {/* Brand column */}
          <div className='footer-brand'>
            <Link to='/' className='footer-wordmark'>Foodix</Link>
            <p className='footer-tagline'>
              Seasonally sourced.<br />Obsessively prepared.
            </p>
          </div>

          {/* Explore column */}
          <div className='footer-col'>
            <h5 className='footer-col__label'>Explore</h5>
            <ul className='footer-col__links'>
              <li><Link to='/mealListAll'>All Meals</Link></li>
              <li><Link to='/drink'>Drinks</Link></li>
              <li><Link to='/meal/category/Seafood'>Seafood</Link></li>
              <li><Link to='/meal/category/Dessert'>Dessert</Link></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className='footer-col'>
            <h5 className='footer-col__label'>Contact</h5>
            <address className='footer-address'>
              <p>+1 86 852 346 000</p>
              <p>info@foodix.com</p>
              <p>1959 Sepulveda Blvd.<br />Culver City, CA 90230</p>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className='footer-bottom'>
        <hr className='footer-rule' />
        <div className='footer-bottom__inner'>
          <p className='footer-copy'>
            &copy; {new Date().getFullYear()} Foodix Inc. All rights reserved.
          </p>
          <div className='footer-legal'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
