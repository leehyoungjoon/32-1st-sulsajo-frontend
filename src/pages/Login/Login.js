import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Login.scss';

const Login = () => {
  // const navigate = useNavigate();

  const [idInput, setIdInput] = useState('');
  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  // const goToSignUp = () => {
  // navigate("/");
  // };

  const [pwInput, setPwInput] = useState('');
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const [isButtonActive, setIsButtonActive] = useState(false);

  const buttonColorChange = () => {
    idInput.includes('@') && pwInput.match(/^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/)
      ? setIsButtonActive(true)
      : setIsButtonActive();
  };
  return (
    <div>
      <div className="loginWrap">
        <p className="topLogin">로그인</p>
        <form className="inputWrap" onKeyUp={buttonColorChange}>
          <div className="topEmail">이메일</div>
          <div className="loginWrapper">
            <input
              className="inputId"
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={handleIdInput}
            />
            <span className="separator"> </span>
          </div>
          <div className="loginWrapper">
            <input
              className="inputPw"
              type="password"
              placeholder="비밀번호을 입력해주세요"
              onChange={handlePwInput}
            />
            <span className="separator"> </span>
          </div>

          <button
            className={isButtonActive ? 'loginButtonActive ' : 'loginButton'}
          >
            로그인
          </button>
        </form>
        <div className="socialLogin">
          <button className="kakaoLoginButton">
            <i class="fa-regular fa-1x fa-comment"></i>카카오 로그인
          </button>
          <button className="naverLoginButton">
            <i class="fa-brands fa-1x fa-neos"></i>네이버 로그인
          </button>
          <button className="googleLoginButton">
            <i class="fa-brands fa-1x fa-google"></i>구글 로그인
          </button>
        </div>
        <div className="linkWrap">
          <a className="findId" href="">
            아이디 찾기
          </a>
          <a className="findPw" href="">
            비밀번호 찾기
          </a>
          {/* <button className="memberJoin" onClick={goToSignUp}>
            회원가입
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
