import React, { useState } from 'react';
import './CategoryCard.scss';

const CategoryCard = ({ index, value, scrollToCard }) => {
  return (
    <div className="CategoryCard" onClick={() => scrollToCard(index)}>
      <img alt="wineImg" src={value.img} className="drinkTypeImg" />
      <span className="drinkTypeName">{value.title}</span>
    </div>
  );
};

export default CategoryCard;
