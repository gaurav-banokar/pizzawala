import React from "react";
import "./about.scss";
import pizza1 from "../../assets/pizza1_about.jfif";
import newpizza4 from "../../assets/newpizza4.png"
const About = ({heading}) => {
  return (
    <section className="about">
   
     
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We are providing special delicious pizzas for 2 years
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg imageOne"
              src= {pizza1}
              alt="pizza"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg imageTwo"
              src= {newpizza4}
              alt= "pizza"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
