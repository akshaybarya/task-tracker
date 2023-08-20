import './card.css';

import React from 'react';

import TickIcon from '../TickIcon';

const Card = (props) => {
  const { isSelected, onClick } = props;

  const onCardClick = () => {
    if (!isSelected) {
      onClick();
    }
  };

  return (
    <div 
      className='card'
      data-is-selected={isSelected}
      onClick={onCardClick}
    >
      { isSelected ? <TickIcon /> : null }
    </div>
  )
}

export default React.memo(Card);
