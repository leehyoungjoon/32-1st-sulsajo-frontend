import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className="Nav">
      <nav className="navBar">
        <Link to="/" className="navLogo">
          <img alt="logo" src="/images/logo.jpg" className="logoImg" />
        </Link>
        <div className="navLogin">
          <Link to="subscribe" className="moveBtn">
            구독서비스
          </Link>
          <Link to="/" className="moveBtn">
            담아마켓(스토어)
          </Link>
          {isLogin ? (
            <div
              onClick={() => {
                setIsLogin(false);
              }}
              className="moveBtn"
            >
              로그아웃
            </div>
          ) : (
            <Link to="/login" className="moveBtn">
              로그인
            </Link>
          )}

          <Link to="/cart">
            <i className="fa-solid fa-1x fa-cart-shopping" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
