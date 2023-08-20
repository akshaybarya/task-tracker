import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import initialCards from '../../utils/constants';
import {
  getCardDataFromLS,
  setCardDataToLS,
} from '../../utils/helpers';
import Card from '../Card';

const App = () => {
  const [ cardData, setCardData ] = useState(initialCards);
  const [ selectedCards, setSelectedCards ] = useState(0);


  const onCardSelect = (clickedCard) => {
    const newCardData = JSON.parse(JSON.stringify(cardData));
    
    newCardData[selectedCards].isSelected = true;
    setCardData(newCardData);
    setCardDataToLS(newCardData);
    setSelectedCards(prev => prev + 1);
  };

  const selectedCardCount = (cardData) => {
    let count = 0;

    cardData.forEach((val) => {
      if (val.isSelected) {
        count++;
      }
    })

    return count;
  };


  useEffect(() => {
    const cardData = getCardDataFromLS();
    
    if (cardData) {
      setCardData(cardData);

      setSelectedCards(selectedCardCount(cardData));
    }

    return () => setCardDataToLS(cardData);
  }, []);

  return (
    <div className='app-container'>
      <div className='title-container'>
        <h3 className='title-secondary-1'> 100 Days X-treak Challenge</h3>

        <h2 className='title-primary-1'> I am <b>Striving</b> to</h2>
        <h1 className='title-primary-2'> become my best self</h1>

        <h4 className='title-secondary-2'>#TheSuperiorYou #100DaysOfHustleWithAkshayBarya</h4>
      </div>

      <div className='card-container'>
        {
          cardData?.map((val, index) => <Card 
              isSelected={val.isSelected}
              key={`CARDS_${index}`}
              onClick={() => onCardSelect(index)}
            />
          )
        }
      </div>
    </div>
  )
}

export default App
