import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Home, About, Contact } from './Pages/Index';
import { useEffect, useRef, useState } from 'react';

function App() {

  const animRef = useRef(null);

  const lenis = new Lenis({
    autoRaf: true,
    smooth: true,
    lerp: .1
  });

  const animation_start = () => {

    if (animRef.current) {
      const aall = animRef.current.querySelectorAll('.animator1')
      const all = animRef.current.querySelectorAll('.animator2');

      aall.forEach(el => {
        el.classList.remove('animation-active');
        void animRef.current.offsetWidth;
        el.classList.add('animation-active');
      });

      all.forEach(el => {
        el.classList.remove('animation-active-re');
        void animRef.current.offsetWidth;
        el.classList.add('animation-active-re');
      })
    }
  }

  return (
    <>

      <BrowserRouter>

        <header className='header'>
          <div className="container">

            <div className="header-flex">
              <div className="header-logo">
                <h1>BraV<span>aa</span></h1>
              </div>

              <div className="header-main">
                <nav className='nav'>
                  <ul>
                    <li onClick={animation_start} ><NavLink to='/' >Home</NavLink></li>
                    <li onClick={animation_start} ><NavLink to='/about' >About</NavLink></li>
                    <li onClick={animation_start} ><NavLink to='/contact' >Contact</NavLink></li>
                  </ul>
                </nav>

                <div className="header-search">
                  <p>|</p>
                  <p>En<i class="ri-arrow-drop-down-line"></i></p>
                  <i class="ri-search-2-line"></i>
                  <i class="ri-shopping-bag-3-line"></i>
                </div>
              </div>

            </div>
          </div>

        </header>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter >

      <div ref={animRef} className="animators">
        <div className="animator1"></div>
        <div className="animator2"></div>
        <div className="animator1"></div>
        <div className="animator2"></div>
        <div className="animator1"></div>
      </div>

    </>
  )
}

export default App
