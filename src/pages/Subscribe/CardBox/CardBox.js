import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal/Modal';
import CardBoxComponent from './CardBoxComponent';
import './CardBox.scss';

const CARD_DATA = [
  {
    id: 13,
    img: './images/box1.jpg',
    title: '담와박스',
    price: '39,000원 / 월',
    description: '다양한 경험을 할 수 있는 담와박스',
    startDate: '결제일 : 12월 25일',
    endDate: '도착일 : 1월 28일',
  },
  {
    id: 10,
    img: './images/box.jpg',
    title: '증류주 담와박스',
    price: '49,000원 / 월',
    description: '20도 이상의 증류주로만 구성된 담와박스',
    startDate: '결제일 : 1월 25일',
    endDate: '도착일 : 2월 28일',
  },
];

const CardBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const outModal = useRef();
  const [product, setProduct] = useState([]);
  const [modalId, setModalId] = useState();

  const fetchData = () => {
    fetch(`http://10.58.2.197:8000/products/subscribe/${modalId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data.subscribe_detail[0]);
      });
  };

  // console.log(typeof modalId == 'undefined');

  useEffect(() => {
    typeof modalId !== 'undefined' && fetchData();
  }, [modalId]);

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.code === 'Escape') {
        setModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    const handleClickOutside = e => {
      if (outModal.current && !outModal.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const openModalFn = id => {
    setModalOpen(true);
    setModalId(id);
  };

  return (
    <div className="cardBox">
      {CARD_DATA.map(cardItem => {
        const { img, endDate, title, price, description, startDate, id } =
          cardItem;

        return (
          <CardBoxComponent
            key={id}
            id={id}
            openModal={() => setModalOpen(true)}
            title={title}
            img={img}
            price={price}
            description={description}
            startDate={startDate}
            endDate={endDate}
            openModalFn={openModalFn}
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
