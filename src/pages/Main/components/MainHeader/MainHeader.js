import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';
import './MainHeader.scss';

const MainHeader = ({ data }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="MainHeader">
      <section className="mainHeaderTitle">
        <Link to="/listing/new" className="mainHeaderMenu">
          신상품
        </Link>
        <div className="mainHeaderMenu">베스트</div>
        <div className="mainHeaderMenu">선물세트</div>
        <div className="mainHeaderMenu">이벤트</div>
        <div className="mainSearchBar" onClick={() => setSearchModalOpen(true)}>
          검색어를 입력해주세요
        </div>
      </section>
      {searchModalOpen && (
        <SearchModal data={data} closeModal={setSearchModalOpen} />
      )}
    </header>
  );
};

export default MainHeader;
