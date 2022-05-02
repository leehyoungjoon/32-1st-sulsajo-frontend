import React from 'react';
import './CardBox.scss';
import Modal from '../Modal/Modal';
import CardBoxComponent from './CardBoxComponent';

const CARD_DATA = [
  {
    id: 1,
    img: './images/damhwabox_basic.png',
    title: '담와박스',
    price: '39,000원 / 월',
    startDate: '결제일 : 12월 25일',
    endDate: '도착일 : 1월 28일',
    modal: '안녕하세요',
  },
  {
    id: 2,
    img: './images/damhwabox_soju.png',
    title: '증류주 담와박스',
    price: '49,000원 / 월',
    startDate: '결제일 : 1월 25일',
    endDate: '도착일 : 2월 28일',
    modal: '감사합니다',
  },
];

const CardBox = ({ outModal, modalOpen, closeModal, openModal }) => {
  return (
    <div className="cardBox">
      {CARD_DATA.map((cardItem, index) => {
        const { img, endDate, title, price, startDate, id } = cardItem;
        return (
          <CardBoxComponent
            key={index}
            outModal={outModal}
            modalOpen={modalOpen}
            closeModal={closeModal}
            openModal={openModal}
            img={img}
            endDate={endDate}
            title={title}
            price={price}
            startDate={startDate}
            id={id}
          />
        );
      })}

      {modalOpen && <Modal closeModal={closeModal} outModal={outModal} />}
    </div>
  );
};

export default CardBox;
