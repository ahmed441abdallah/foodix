// src/components/FoodiesHub.js
import React from 'react';
import './Features.scss'; // External CSS for styling
import { featureIcon1 as Imag, featureIcon2 as Imag2, featureIcon3 as Imag3 } from '../../utils/images';
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const Features = () => {

  return (
    <>
    <div className='features'>
        <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img'><img src={Imag}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>
        <motion.div variants={fadeIn('down','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img' ><img src={Imag2}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>
        <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img'><img src={Imag3}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>

    </div>
    </>
  );
};

export default Features;
