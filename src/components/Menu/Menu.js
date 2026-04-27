import React from "react";
import "./Menu.scss";
import {
  menuImg1 as i1, menuImg2 as i2, menuImg3 as i3,
  menuImg4 as i4, menuImg5 as i5, menuImg6 as i6
} from '../../utils/images';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const menuItems = [
  {
    title: "",
    subtitle: "",
    imgSrc: i1,
  },
  {
    title: "Option of natural wine available",
    subtitle: "Dinner • Drinks",
    imgSrc: i2,
  },
  {
    title: "Best pumpkin for pumpkin soup",
    subtitle: "Lunch • Starter",
    imgSrc: i3,
  },
  {
    title: "Strip Steak With Rosemary Butter",
    subtitle: "Dinner • Lunch",
    imgSrc: i4,
  },
  {
    title: "Braised Sliced Abalone, Fish Maw with Premium Seafood",
    subtitle: "Starter • Dinner",
    imgSrc: i5,
  },
  {
    title: "Pan Fried Live Prawn with Superior Soy Sauce",
    subtitle: "Starter • Dinner",
    imgSrc: i6,
  },
];

const MenuGrid = () => {
  return (
    <div className="all-menu">
      <motion.div variants={fadeIn('up','tween', 0.2 , 1.5 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:false ,amount: 0.4}}  className="menu-grid">
        <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className="menu-item">
          <img src={i6} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/mealListAll`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('down','tween', 0.4 , 1.9 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className="menu-item">
          <img src={i5} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/drink`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeIn('up','tween', 0.2 , 1.5 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:false ,amount: 0.4}} className="menu-grid-2">
        <motion.div variants={fadeIn('down','tween', 0.6 , 2 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:true , amount: 0.4}} className="menu-item">
          <img src={i3} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/mealListAll`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('up','tween', 0.7 , 2.1 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:true , amount: 0.4}} className="menu-item">
          <img src={i4} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/mealListAll`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeIn('up','tween', 0.2 , 1.5 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:false ,amount: 0.4}} className="menu-grid-3">
        <motion.div variants={fadeIn('left','tween', 0.8 , 2.4 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:true , amount: 0.4}} className="menu-item">
          <img src={i1} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/mealListAll`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('right','tween', 0.9 , 2.5 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:true , amount: 0.3}} className="menu-item">
          <img src={i2} />

          <div className="overlay">
            <h3>Premium Deep Sea Snow White Cod Fillet</h3>
            <div className="overlay-link">
              <p>Lunch • Cod Fish</p>
              <Link to={`/drink`} className="icons">
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MenuGrid;
