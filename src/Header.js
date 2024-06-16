import React, { useRef, useState } from 'react'; // alle assets en components
import './Header.css';
import Logo from './Bierenslogo.png'; 
import Profilepic from './spiderman.jpg';
import ArrowIcon from './Arrow.png'; 

// afbeeldingen
import ItemImg1 from './ironman.png';
import ItemImg2 from './batman.png';
import ItemImg3 from './galactus.webp';
import ItemImg4 from './superman.png';

// defineer header
const Header = () => {
  // ref aangemaakt om later te gebruiken
  const headerItemsRef = useRef(null);

  // useState gemaakt om te zien of de gebruiker aan het slepen is (in de header van de site)
  const [isDragging, setIsDragging] = useState(false); 
  
  // useState voor de positie
  const [dragStartX, setDragStartX] = useState(null);
  const [scrollStartX, setScrollStartX] = useState(null);

  // als er geklikt wordt wordt setIsDragging op true gezet
  const handleMouseDown = (e) => {
    // dragging staat is nu true
    setIsDragging(true);
    
    // muis positie opslaan
    setDragStartX(e.clientX);
    
    // scroll positie header items
    setScrollStartX(headerItemsRef.current.scrollLeft);
  };


  const handleMouseMove = (e) => {
    // Is dragging state is true? 
	//zo ja update de positie van de header items op basis van de muis
    if (isDragging) {
      headerItemsRef.current.scrollLeft = scrollStartX + dragStartX - e.clientX;
    }
  };

  // Als de muisklik wordt losgelaten, stop met scrollen van de items
  const handleMouseUp = () => {
    // Dragging staat is nu false
    setIsDragging(false);
  };


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
            {/* Item 1 */}
            <div className="header-item">
              {/* Image sticking out */}
              <img src={ItemImg1} alt="Item Image 1" className="item-image" />

              {/* Content */}
              <p style={{ color: '#CD7F32', fontWeight: 600 }}>Bronze</p>

              <div className="progress-label">Completed</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="header-item">
              {/* Image sticking out */}
              <img src={ItemImg2} alt="Item Image 2" className="item-image" />

              {/* Content */}
              <p style={{ color: 'silver', fontWeight: 600 }}>Silver</p>
              <div className="progress-label">Completed</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="header-item">
              {/* Image sticking out */}
              <img src={ItemImg3} alt="Item Image 3" className="item-image" />

              {/* Content */}
              <p style={{ color: 'gold', fontWeight: 600 }}>Gold</p>
              <div className="progress-label">Completed</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="header-item">
              {/* Image sticking out */}
              <img src={ItemImg4} alt="Item Image 4" className="item-image" />

              {/* Content */}
              <p style={{ color: 'platinum', fontWeight: 600 }}>Platinum</p>
              <div className="progress-label">Completed</div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
