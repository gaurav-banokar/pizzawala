import React from "react";
import MenuCard from "./MenuCard";
import newpizza2 from "../../../assets/newpizza2.png";
import newpizza3 from "../../../assets/newpizza3.png";
import newpizza4 from "../../../assets/newpizza4.png";
import { BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import "./menu.scss";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "tomatoPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      case 2:
        dispatch({ type: "vegMasalaPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      case 3:
        // count++;
        dispatch({ type: "spicyPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={newpizza2}
          price={200}
          title="Tomato Pizza"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={newpizza3}
          price={500}
          title="Veg Masala Pizza"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={newpizza4}
          price={1800}
          title="Spicy pizza"
          delay={0.8}
          handler={addToCartHandler}
        />
        <BiChevronRight />
      </div>
    </section>
  );
};

export default Menu;
