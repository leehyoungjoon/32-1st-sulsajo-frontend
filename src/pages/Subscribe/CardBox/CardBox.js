import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal/Modal';
import CardBoxComponent from './CardBoxComponent';
import './CardBox.scss';

const CARD_DATA = [
  {
    id: 1,
    img: './images/box1.jpg',
    title: '담와박스',
    price: '39,000원 / 월',
    startDate: '결제일 : 12월 25일',
    endDate: '도착일 : 1월 28일',
    modal: '안녕하세요',
  },
  {
    id: 2,
    img: './images/box.jpg',
    title: '증류주 담와박스',
    price: '49,000원 / 월',
    startDate: '결제일 : 1월 25일',
    endDate: '도착일 : 2월 28일',
    modal: '감사합니다',
  },
];

const CardBox = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const outModal = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (outModal.current && !outModal.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cardBox">
      {CARD_DATA.map(cardItem => {
        const { img, endDate, title, price, startDate, id } = cardItem;

        return (
          <CardBoxComponent
            key={id}
            openModal={() => setModalOpen(true)}
            title={title}
            img={img}
            price={price}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          outModal={outModal}
          product={product}
        />
      )}
    </div>
  );
};

export default CardBox;
