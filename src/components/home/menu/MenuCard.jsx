import React from 'react'
import {motion} from "framer-motion";
import { Link } from "react-router-dom"

import "../menu/menu.scss"

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
    className="menuCard"
    initial={{
      x: "-100%",
      opacity: 0,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    transition={{
      delay,
    }}
  >
    <div>Item {itemNum}</div>
    <main>
      <img src={burgerSrc} alt={itemNum} />

      <h5>₹{price}</h5>

      <p>{title}</p>

      <Link onClick={() => handler(itemNum)} to= {"/cart"}>  Buy Now </Link>
    </main>
  </motion.div>
  )
}

export default MenuCard