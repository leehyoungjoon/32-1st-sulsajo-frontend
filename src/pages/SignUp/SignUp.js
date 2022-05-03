import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    password: '',
    passwordcheck: '',
    nick_name: '',
  });
  const [isCheckEmailFirst, setIsCheckEmailFirst] = useState(false);

  const { email, name, password, passwordcheck, nick_name } = inputValue;
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const checkEmailValid = e => {
    e.preventDefault();
    fetch('http://10.58.5.183:8000/users/signup', {
      method: 'post',
      body: JSON.stringify({
        email,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'KEY_ERROR') {
          alert('사용 가능한 이메일입니다.');
          setIsCheckEmailFirst(true);
        } else if (result.message === 'ALREADY_EXISTS_EMAIL') {
          alert('이미 존재하는 이메일입니다. 다시 입력해 주세요.');
          setIsCheckEmailFirst(false);
        }
      });
  };

  const isSignUpCheck =
    inputValue.email.includes('@') &&
    inputValue.name &&
    inputValue.password.match(/^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/);

  const goToSignUp = e => {
    e.preventDefault();
    if (isCheckEmailFirst) {
      if (isSignUpCheck) {
        fetch('http://10.58.5.183:8000/users/signup', {
          method: 'post',
          body: JSON.stringify({
            email,
            name,
            password,
            nick_name,
          }),
        })
          .then(response => response.json())
          .then(result => {
            if (result.message === 'SUCCESS') {
              alert('회원가입에 성공하였습니다.');
              navigate('/login');
            }
          });
      } else {
        alert(
          '이메일, 이름, 비밀번호, 닉네임을 제대로 입력했는지 확인해 주세요.'
        );
      }
    } else {
      alert('이메일 중복체크를 먼저 해 주세요');
    }
  };

  const emailCheck =
    email === '' ? 'hidden' : email.includes('@') ? 'hidden' : 'show';
  const checkPwd =
    password === ''
      ? 'hidden'
      : password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ? 'hidden'
      : 'show';
  const doubleCheckPwd =
    passwordcheck === ''
      ? 'hidden'
      : password === passwordcheck
      ? 'hidden'
      : 'show';
  const nick_nameCheck =
    nick_name === ''
      ? 'hidden'
      : nick_name.match(/^[가-힣].{1,10}$/)
      ? 'hidden'
      : 'show';

  return (
    <div className="signUp">
      <div className="signUpContainer">
        <img
          className="leftSignUpImg"
          src="https://cdn.pixabay.com/photo/2017/01/11/22/54/glass-of-wine-1973136_1280.png"
          alt="SignUp Main Img"
        />
        <div className="rightSignUp">
          <div className="signupHeader">
            <p className="signupTitle">회원가입</p>
            <img
              className="signUpImg"
              src="https://cdn.pixabay.com/photo/2019/04/26/16/30/id-4157974_1280.jpg"
              alt="Signupimg"
            />
          </div>
          <form className="signUpForm">
            <p className="signUpFormTitle">이메일로 가입하기</p>
            <p className="inputText">이메일</p>
            <input
              className="signUpInput"
              name="email"
              onChange={handleInput}
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <button className="emailCheck" onClick={checkEmailValid}>
              중복확인
            </button>
            <div className={emailCheck}>올바르지 않은 이메일 형식입니다.</div>
            <p className="inputText">이름</p>
            <input
              className="signUpInput"
              name="name"
              onChange={handleInput}
              type="text"
              placeholder="성함을 입력해 주세요"
            />
            <p className="inputText">비밀번호</p>
            <input
              className="signUpInput"
              name="password"
              onChange={handleInput}
              type="password"
              placeholder="8자 이상 / 영문 / 숫자를 조합해 주세요"
            />
            <div className={checkPwd}>8자 이상, 영문, 숫자를 조합해 주세요</div>
            <p className="inputText">비밀번호 확인</p>
            <input
              className="signUpInput"
              name="passwordcheck"
              onChange={handleInput}
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <div className={doubleCheckPwd}>비밀번호가 일치하지 않습니다.</div>
            <p className="inputText">닉네임설정</p>
            <input
              className="signUpInput"
              name="nick_name"
              onChange={handleInput}
              type=""
              placeholder="2-10글자"
            />
            <div className={nick_nameCheck}>
              닉네임을 확인해 주세요 한글만 입력할 수 있습니다.
            </div>
            <button className="btnSignUp" onClick={goToSignUp}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
