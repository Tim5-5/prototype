import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import './LayoutComponent.css';
import ItemImg1 from './cookiejar.webp';
import ItemImg2 from './chocolade.webp';
import ItemImg3 from './powerbank.jpg';
import ItemImg4 from './superhero.jpg';
import ItemImg5 from './diner-cadeau-logo.jpg';
import ItemImg6 from './comic.webp';
import ItemImg7 from './efteling.jpg';
import ItemImg8 from './disney.jpg';

const MainContent = () => {
  // State variabelen voor klikstatus van buttons en de tiers
  const [clickedButtons, setClickedButtons] = useState({}); // State voor bijgehouden geklikte buttons
  const [isBronzeUnlocked, setIsBronzeUnlocked] = useState(true); // State voor Bronze tier unlock status
  const [isSilverUnlocked, setIsSilverUnlocked] = useState(true); // State voor Silver tier unlock status
  const [isGoldUnlocked, setIsGoldUnlocked] = useState(false); // State voor Gold tier unlock status
  const [isPlatinumUnlocked, setIsPlatinumUnlocked] = useState(false); // State voor Platinum tier unlock status

  // Functie om te zien welke button is geklikt
  const handleClick = (index) => {
    setClickedButtons((prevState) => ({ ...prevState, [index]: true }));
  };

  // Alle rewards met afbeeldingen, titels, tiers en beschrijving
  const items = [
    { img: ItemImg1, title: 'Cookie Jar', category: 'Bronze', description: 'Bierens-branded cookie jar, perfect for home or office!' },
    { img: ItemImg2, title: 'Bierens Chocolate', category: 'Bronze', description: "Enjoy a Tony's Chocolonely bar with custom Bierens packaging." },
    { img: ItemImg3, title: 'Power bank', category: 'Silver', description: 'A portable power bank to keep devices charged on the go!' },
    { img: ItemImg4, title: 'Superhero Figurine', category: 'Silver', description: 'A collectible superhero figurine, embodying strength and resilience.' },
    { img: ItemImg5, title: 'Dinner Cheque', category: 'Silver', description: 'Enjoy a memorable dining experience with a dinner cheque.' },
    { img: ItemImg6, title: 'Vintage Marvel comic', category: 'Silver', description: "Dive into nostalgia with a vintage Marvel comic book from Bierens' curated collection." },
    { img: ItemImg7, title: 'Trip to Efteling', category: 'Gold', description: 'Experience the magic of Efteling with a sponsored trip.' },
    { img: ItemImg8, title: 'Trip to Disneyland Paris', category: 'Platinum', description: 'Embark on a magical journey to Disneyland Paris, creating unforgettable moments in the heart of Europe\'s most beloved theme park.' }
  ];

  // Items sorteren op categorie
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Tiers
  const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum'];

  // index van het item berekenen
  const calculateItemIndex = (tierIndex, categoryIndex) => {
    // verzamel  categorieën tot de huidige tierIndex
    const categories = Object.keys(groupedItems).slice(0, tierIndex);

    // vereken de lengte van items in alle eerdere categorieën
    let totalItemsCount = 0;
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      totalItemsCount += groupedItems[category].length;
    }

    // index van het huidige item binnen de categorie 
    const itemIndex = totalItemsCount + categoryIndex;

    return itemIndex;
  };

  return (
    <div className="main-content">
      {tiers.map((tier, tierIndex) => (
        <div key={tierIndex}>
          <div className="main-title">
            {/* dynamische classname op basis van de tier */}
            <p className={`gradient-${tier.toLowerCase()}`}>{`${tier} Rewards`}</p>
          </div>
          <div className="main-items">
            {/* render de items per categorie */}
            {groupedItems[tier] && groupedItems[tier].map((item, index) => {
              // bereken index van het item in de volledige lijst
              const itemIndex = calculateItemIndex(tierIndex, index);
              let isLocked = false;

              // check of tier is unlocked of niet
              switch (tier) {
                case 'Bronze':
                  isLocked = !isBronzeUnlocked;
                  break;
                case 'Silver':
                  isLocked = !isSilverUnlocked;
                  break;
                case 'Gold':
                  isLocked = !isGoldUnlocked;
                  break;
                case 'Platinum':
                  isLocked = !isPlatinumUnlocked;
                  break;
                default:
                  isLocked = false;
                  break;
              }

              return (
                <div className="main-item" key={itemIndex}>
                  <img src={item.img} alt={`Item ${itemIndex + 1}`} />
                  <div className="main-item-content">
                    <h2>{item.title}</h2>
                    <div className="main-item-divider"></div>
                    <p className="main-item-description">
                      {item.description}
                    </p>
					{/* dynamische classname op basis lockstatus, klikstatus en de stijl */}
                    <button
                      className={`main-item-button ${clickedButtons[itemIndex] ? 'clicked' : ''} ${isLocked ? 'locked' : ''}`}
                      onClick={() => handleClick(itemIndex)}
                      disabled={isLocked}
                    >
                      {isLocked && <FontAwesomeIcon icon={faLock} className="lock-icon" />}
                      {!clickedButtons[itemIndex] && !isLocked && 'Redeem'}
                      {clickedButtons[itemIndex] && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
