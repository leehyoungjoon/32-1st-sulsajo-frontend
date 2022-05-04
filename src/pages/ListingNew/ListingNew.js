import React, { useEffect, useState } from 'react';
import MainHeader from '../Main/components/MainHeader/MainHeader';
import ProductBoxCard from '../Main/components/ProductBoxCard/ProductBoxCard';
import './ListingNew.scss';

const ListingNew = () => {
  const [itemList, setItemList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.97:8000/products/list')
      .then(res => res.json())
      .then(data => {
        setItemList(data.product_list);
        setData(data.product_list);
      });
  }, []);

  const search = drinkType => {
    const filteredList =
      itemList && itemList.filter(el => el.category_id === drinkType);

    setData(filteredList);
  };

  return (
    <>
      <MainHeader />
      <section className="ListingNew">
        <div className="searchCategory">
          <span
            onClick={() => setData(itemList)}
            className="searchCategoryTitle"
          >
            List
          </span>
          <span onClick={() => search(1)} className="categoryTitle">
            탁주
          </span>
          <span onClick={() => search(2)} className="categoryTitle">
            약주
          </span>
          <span onClick={() => search(3)} className="categoryTitle">
            청주
          </span>
          <span onClick={() => search(4)} className="categoryTitle">
            증류주
          </span>
          <span onClick={() => search(5)} className="categoryTitle">
            맥주
          </span>
        </div>
        <div className="itemList">
          {data &&
            data.map(value => (
              <div key={value.id} className="card">
                <ProductBoxCard data={value} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default ListingNew;
