import { useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { Home, About, Contact } from './Pages/Index';
import './App.css';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    revealTransition();
  }, [location.pathname]);

  const revealTransition = () => {
    gsap.set('.block', { scaleY: 1, transformOrigin: 'bottom' });
    gsap.to('.block', {
      scaleY: 0,
      duration: 1,
      ease: 'power4.inOut',
      stagger: .1,
    });
  };

  const animateTransition = () => {
    return new Promise((resolve) => {
      gsap.set('.block', {
        scaleY: 0,
        transformOrigin: 'top',
        visibility: 'visible',
      });
      gsap.to('.block', {
        scaleY: 1,
        duration: 1,
        ease: 'power4.inOut',
        stagger: .1,
        onComplete: resolve,
      });
    });
  };

  const handleNavigation = async (path) => {
    if (path !== location.pathname) {
      await animateTransition();
      navigate(path);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-flex">
            <div className="header-logo">
              <h1 onClick={() => handleNavigation('/')}>BraV<span>aa</span></h1>
            </div>
            <div className="header-main">
              <nav className="nav">
                <ul>
                  <li onClick={() => handleNavigation('/')}>Home</li>
                  <li onClick={() => handleNavigation('/about')}>About</li>
                  <li onClick={() => handleNavigation('/contact')}>Contact</li>
                </ul>
              </nav>
              <div className="header-search">
                <p>|</p>
                <p>En<i className="ri-arrow-drop-down-line"></i></p>
                <i className="ri-search-2-line"></i>
                <i className="ri-shopping-bag-3-line"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="transition">
        <div className="transition-row row-1">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
        <div className="transition-row row-2">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
    </>
  );
}
