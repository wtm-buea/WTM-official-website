import React,  { useState, useEffect } from "react";

import Wtmlogo from '../../../../Assets/icons/logo.png';

(window).scroll(function(){
('nav').toggleClass('scrolled', (this).scrollTop() > 800)
});

function Navbar(){
  (window).scroll(function(){
    ('nav').toggleClass('scrolled', (this).scrollTop() > 800)
    });
    
  return(
    <div>
      <nav className="bg-transparent" class="navbar fixed-top navbar-expand-sm navbar-dark">
        <a class="navbar-brand" href="#">
        <img src={Wtmlogo} style={{width:200, height:70}}></img>
        </a>
        <ul class="navbar-custom navbar-nav ml-auto">
          <li class="nav-item active"><a class="nav-link">Home<span class="sr-only">(current)</span></a></li>
          <li class="nav-item"><a class="nav-link">Events</a></li>
          <li class="nav-item"><a class="nav-link">Success Stories</a></li>
        </ul>
 
      </nav>
    </div>
  );
}
export default Navbar