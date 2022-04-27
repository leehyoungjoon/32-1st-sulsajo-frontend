import React, { useState } from 'react';
import './CategoryCard.scss';

const CategoryCard = () => {
  return (
    <div className="drinkType">
      <img alt="wineImg" src="/images/Main/wine.png" className="drinkTypeImg" />
      <span className="drinkTypeName">소주</span>
    </div>
  );
};

export default CategoryCard;
