import { motion } from 'framer-motion';
import React from 'react';

const cards = [ 'ttt', 'ewwww' ];
const tabContentVariant = {
    active: {
      display: "block",
      transition: {
        staggerChildren: 0.2
      }
    },
    inactive: {
      display: "none"
    }
  };
const cardVariant = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5
      }
    }
  };

const TabContent = ({ id, active }: { id: string, active: boolean }) => {
    return (
        <motion.div
            // id={id}
            variants={tabContentVariant}
            animate={active ? "active" : "inactive"}
            initial="inactive"
        >
          { cards.map(card => (
              <motion.div key={card} variants={cardVariant}>
                  { card }
              </motion.div>
          ))}
        </motion.div>
    )
}

export default TabContent;