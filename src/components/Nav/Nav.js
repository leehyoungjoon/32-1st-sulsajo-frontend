import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="navHeader">
      <nav className="navBar">
        <Link to="/">
          <div className="navLogo">
            <img alt="logo" src="/images/logo.jpg" className="logoImg" />
          </div>
        </Link>
        <div className="navLogin">
          <Link to="subscribe">
            <div className="subscribeBtn">구독서비스</div>
          </Link>
          <Link to="/">
            <div className="storeBtn">담아마켓(스토어)</div>
          </Link>
          <Link to="/login">
            <div className="loginBtn">로그인</div>
          </Link>
          <div className="logoutBtn">로그아웃</div>
          <Link to="/cart">
            <i className="fa-solid fa-1x fa-cart-shopping" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
