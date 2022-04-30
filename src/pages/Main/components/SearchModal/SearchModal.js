import React, { useState } from 'react';
import Data from '../../Data';
import ProductBoxCard from '../ProductBoxCard/ProductBoxCard';
import './SearchModal.scss';

const SearchModal = ({ closeModal }) => {
  const [filteredCards, setFilteredCards] = useState([]);

  const search = e => {
    if (e.target.value === '') {
      setFilteredCards([]);
    } else {
      setFilteredCards(
        Data.filter(value => value.name.includes(e.target.value))
      );
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalWrapper">
          <div className="closeBtn" onClick={() => closeModal(false)}>
            <i className="fa-solid fa-xmark" />
          </div>
          <input
            type="text"
            placeholder="무엇을 찾고 계신가요?"
            className="searchBar"
            onChange={search}
          />
          <div className="filteredCardSection">
            {filteredCards.map((value, i) => (
              <div key={i} className="filteredCard">
                <ProductBoxCard data={value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
