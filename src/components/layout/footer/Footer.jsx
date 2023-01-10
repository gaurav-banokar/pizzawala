import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
   <footer>
      <div>
        <h2>Pizzawala</h2>

        <strong>All right reserved &copy; <span>Pizzawala</span></strong>
      </div>

      <aside>

        <a href="/youtube">
          <AiFillYoutube />
        </a>
        <a href="/instagram">
          <AiFillInstagram />
        </a>
        <a href="/github">
          <AiFillGithub />
        </a>
      </aside>
   </footer>
  )
}

export default Footer