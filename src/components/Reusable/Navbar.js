import React from 'react'
import {Link} from 'gatsby'
import { GoMarkGithub } from 'react-icons/go'
import {FaLinkedin} from 'react-icons/fa'
export default function Navbar() {
    return (
        <header>
         <nav className="navbar navbar-dark fixed-top bg-dark navbar-expand-sm ">
  
  {/* <button className="navbar-toggler" type="button"> */}
  {/* <span className = "text-white">menu</span> */}
  {/* </button> */}
  <div className="collapse navbar-collapse show">
    <ul className="navbar-nav ml-auto mr-5">
        {/* <li className="nav-item">
         <a href="https://www.github.com/parupallihemanth" className="nav-link text-light" ><GoMarkGithub className="cart-icons" /></a>
         </li> */}
         <li className="nav-item">
         <a href = "https://www.linkedin.com/in/parupalli-hemanth-babu" className="nav-link text-light " ><FaLinkedin className="cart-icons"/></a>
        </li>
        
    </ul>
  </div>
</nav> 
        </header>

    )
}
