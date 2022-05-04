import React, { useEffect, useState } from 'react';
import ProductBoxCard from '../ProductBoxCard/ProductBoxCard';
import './SearchModal.scss';

const SearchModal = ({ closeModal }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.97:8000/products/list')
      .then(res => res.json())
      .then(data => {
        setData(data.product_list);
      });
  }, []);

  const search = e => {
    if (e.target.value === '') {
      setFilteredCards([]);
    } else {
      setFilteredCards(data.filter(data => data.name.includes(e.target.value)));
    }
  };

  return (
    <div className="searchModal">
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
