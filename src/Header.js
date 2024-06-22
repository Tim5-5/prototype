import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

import Logo from './Bierenslogo.png';
import Profilepic from './spiderman.jpg';
import ArrowIcon from './Arrow.png';
import ItemImg1 from './ironman.png';
import ItemImg2 from './batman.png';
import ItemImg3 from './galactus.webp';
import ItemImg4 from './superman.png';
import LockIcon from './lock-icon.png';

const Header = () => {
  const headerItemsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [scrollStartX, setScrollStartX] = useState(null);
  const [progress2, setProgress2] = useState(0); // progress van huidige tier in dit geval progressbar 2


const handleMouseDown = (e) => {
  setIsDragging(true); // isDragging naar true als er gesleept wordt
  setDragStartX(e.clientX); // positie van muisklik
  setScrollStartX(headerItemsRef.current.scrollLeft); // Huidige positie scroll
};

// Functie als de muis beweegt als de muisknop ingedrukt is
const handleMouseMove = (e) => {
  if (isDragging) { 
    // scrollpositie aanpassen op basis van muisbeweging
    headerItemsRef.current.scrollLeft = scrollStartX + dragStartX - e.clientX;
  }
};

// muisknop losgelaten
const handleMouseUp = () => {
  setIsDragging(false); // isDragging naar false
};


  useEffect(() => {
    // progress bar vuleffect
    setTimeout(() => {
      setProgress2(70); // progress van de huidige tier voor dit prototype kan hier aangepast worden. 
    }, 1000); // vul na 1 sec na laden van pagina
  }, []);

  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-profile">
          <img src={Profilepic} alt="Profile" className="navbar-profile-picture" />
          <span className="navbar-profile-name">
            Profile Name
            <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
          </span>
        </div>
      </nav>
      <div className="header">
        <h1 className="welcome-message">Welcome back, Profile</h1>
        <div
          className={`header-container ${isDragging ? 'dragging' : ''}`}
          ref={headerItemsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="header-items">
            {/* Bronze */}
            <div className="header-item">
              <img src={ItemImg1} alt="Item Image 1" className="item-image" />
              <p className="gradient-bronze">Bronze</p>
              <div className="progress-label">Completed</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            {/* Silver */}
            <div className="header-item current-tier">
              <img src={ItemImg2} alt="Item Image 2" className="item-image" />
              <p className="gradient-silver">Silver</p>
              <div className="progress-label">150 points</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress2}%` }}></div>
              </div>
            </div>
            {/* Gold */}
            <div className="header-item locked-item">
              <img src={ItemImg3} alt="Item Image 3" className="item-image" />
              <p className="gradient-gold">Gold</p>
              <div className="progress-label">
                Locked
                <img src={LockIcon} alt="Lock Icon" className="lock-icon" />
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '0%' }}></div>
              </div>
            </div>
            {/* Plat */}
            <div className="header-item locked-item">
              <img src={ItemImg4} alt="Item Image 4" className="item-image" />
              <p className="gradient-platinum">Platinum</p>
              <div className="progress-label">
                Locked
                <img src={LockIcon} alt="Lock Icon" className="lock-icon" />
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;