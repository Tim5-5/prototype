import React from 'react';
import './LayoutComponent.css'; 
import ItemImg1 from './spiderman.jpg'; 
import ItemImg2 from './spiderman.jpg';
import ItemImg3 from './spiderman.jpg';
import ItemImg4 from './spiderman.jpg';
import ItemImg5 from './spiderman.jpg'; 
import ClipboardIcon from './copy.png';

const LayoutComponent = () => {
  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Code "${code}" copied to clipboard!`);
  };

  return (
    <div className="layout-container">
      <div className="sidebar">
        <div className="sidebar-title">
          <p>Refer a Business & Earn 100 Points</p>
        </div>
        <div className="sidebar-description">
          <p>Tell a friend to show your code when opening a case with Bierens:</p>
          <div className="referral-code">
<p className="code-info">LW9M<button className="copy-icon" onClick={() => copyCodeToClipboard('LW9M')}>
  {/* */}
  <img src="https://cdn-icons-png.flaticon.com/512/12204/12204456.png" alt="Copy icon"  />
</button></p>
            
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="main-title">
          <p>Bronze Rewards</p>
        </div>
        <div className="main-items">
          <div className="main-item">
            <img src={ItemImg1} alt="Item 1" />
            <div className="main-item-content">
              <h2>Cookie Jar</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
          <div className="main-item">
            <img src={ItemImg2} alt="Item 2" />
            <div className="main-item-content">
              <h2>Bierens Chocolate</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
          <div className="main-item">
            <img src={ItemImg3} alt="Item 3" />
            <div className="main-item-content">
              <h2>Power bank</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
          <div className="main-item">
            <img src={ItemImg4} alt="Item 4" />
            <div className="main-item-content">
              <h2>Superhero Figurine</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
        </div>

        <div className="main-title">
          <p>Silver Rewards</p>
        </div>
        <div className="main-items">
          <div className="main-item">
            <img src={ItemImg5} alt="Item 5" />
            <div className="main-item-content">
              <h2>Dinner Cheque</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
          <div className="main-item">
            <img src={ItemImg1} alt="Item 6" />
            <div className="main-item-content">
              <h2>Vintage Marvel comic</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
        </div>

        <div className="main-title">
          <p>Gold Rewards</p>
        </div>
        <div className="main-items">
          <div className="main-item">
            <img src={ItemImg2} alt="Item 7" />
            <div className="main-item-content">
              <h2>Trip to Efteling</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
        </div>

        <div className="main-title">
          <p>Platinum Rewards</p>
        </div>
        <div className="main-items">
          <div className="main-item">
            <img src={ItemImg3} alt="Item 8" />
            <div className="main-item-content">
              <h2>Trip to Disneyland Paris</h2>
              <div className="main-item-divider"></div>
              <p className="main-item-description">
                {/* beschrijving */}
              </p>
              <button className="main-item-button">Redeem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
