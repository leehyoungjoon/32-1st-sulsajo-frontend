import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    realname: '',
    pwd: '',
    pwdcheck: '',
    nickname: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const emailCheckToDB = () => {
    fetch('api 주소', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue.email,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('사용 가능한 이메일입니다.');
        } else {
          alert('이미 존재하는 이메일입니다. 다시 입력해 주세요.');
        }
      });
  };

  const signUpCheck =
    inputValue.email &&
    inputValue.realname &&
    inputValue.pwd &&
    inputValue.nickname;

  const goToSignUp = () => {
    if (signUpCheck) {
      fetch('api 주소', {
        method: 'POST',
        body: JSON.stringify({
          email: inputValue.email,
          realname: inputValue.realname,
          pwd: inputValue.pwd,
          nickname: inputValue.nickname,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.MESSAGE === 'SUCCESS') {
            alert('회원가입에 성공하였습니다.');
            navigate('/login');
          }
        });
    } else {
      alert(
        '이메일, 이름, 비밀번호, 닉네임을 제대로 입력했는지 확인해 주세요.'
      );
    }
  };

  const emailCheck =
    inputValue.email === ''
      ? 'hidden'
      : inputValue.email.includes('@')
      ? 'hidden'
      : 'show';
  const CheckPwd =
    inputValue.pwd === ''
      ? 'hidden'
      : inputValue.pwd.match(/^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/)
      ? 'hidden'
      : 'show';
  const DoubleCheckPwd =
    inputValue.pwdcheck === ''
      ? 'hidden'
      : inputValue.pwd === inputValue.pwdcheck
      ? 'hidden'
      : 'show';
  const nicknameCheck =
    inputValue.nickname === ''
      ? 'hidden'
      : inputValue.nickname.match(/^[가-힣].{1,10}$/)
      ? 'hidden'
      : 'show';

  return (
    <div id="signUp">
      <div className="signUpContainer">
        <img
          className="leftSignUpImg"
          src="https://cdn.pixabay.com/photo/2017/01/11/22/54/glass-of-wine-1973136_1280.png"
          alt="회원가입 메인이미지"
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
          <div className="signUpForm">
            <p className="signUpFormTitle">이메일로 가입하기</p>
            <p class="inputText">이메일</p>
            <input
              className="signUpInput"
              name="email"
              onChange={handleInput}
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <button className="emailCheck" onClick={emailCheckToDB}>
              중복확인
            </button>
            <div className={emailCheck}>올바르지 않은 이메일 형식입니다.</div>
            <p class="inputText">이름</p>
            <input
              className="signUpInput"
              name="realname"
              onChange={handleInput}
              type="text"
              placeholder="성함을 입력해 주세요"
            />
            <p class="inputText">비밀번호</p>
            <input
              className="signUpInput"
              name="pwd"
              onChange={handleInput}
              type="password"
              placeholder="8자 이상 / 영문 / 숫자를 조합해 주세요"
            />
            <div className={CheckPwd}>8자 이상, 영문, 숫자를 조합해 주세요</div>
            <p class="inputText">비밀번호 확인</p>
            <input
              className="signUpInput"
              name="pwdcheck"
              onChange={handleInput}
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <div className={DoubleCheckPwd}>비밀번호가 일치하지 않습니다.</div>
            <p class="inputText">닉네임설정</p>
            <input
              className="signUpInput"
              name="nickname"
              onChange={handleInput}
              type=""
              placeholder="2-10글자"
            />
            <div className={nicknameCheck}>
              닉네임을 확인해 주세요 한글만 입력할 수 있습니다.
            </div>
            <button className="btnSignUp" onClick={goToSignUp}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
