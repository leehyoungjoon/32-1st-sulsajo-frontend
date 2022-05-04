import React, { useState } from 'react';
import './CategoryCard.scss';

const CategoryCard = ({ index, title, scrollToCard }) => {
  return (
    <div className="CategoryCard" onClick={() => scrollToCard(index)}>
      <img alt="wineImg" src="/images/Main/wine.png" className="drinkTypeImg" />
      <span className="drinkTypeName">{title}</span>
    </div>
  );
};

export default CategoryCard;
