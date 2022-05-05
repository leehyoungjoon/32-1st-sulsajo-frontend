import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const goToLogin = e => {
    e.preventDefault();
    if (idInput && pwInput) {
      fetch('http://10.58.1.7:8000/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            localStorage.setItem('token', result.token);
            alert('환영합니다!');
            navigate('/main');
          } else {
            alert('확인해주세요');
          }
        });
    } else {
      alert('이메일 및 비밀번호를 확인해 주세요');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  const isBtnActive =
    idInput.includes('@') && pwInput.match(/^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/);

  return (
    <div className="Login">
      <p className="topLogin">로그인</p>
      <form className="inputWrap" onSubmit={goToLogin}>
        <div className="topEmail">이메일</div>
        <div className="loginWrapper">
          <input
            className="inputId"
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={handleIdInput}
          />
          <span className="separator" />
        </div>
        <div className="topEmail">비밀번호</div>
        <div className="loginWrapper">
          <input
            className="inputPw"
            type="password"
            placeholder="비밀번호을 입력해주세요"
            onChange={handlePwInput}
            autoComplete="on"
          />
          <span className="separator" />
        </div>

        <button
          className={`loginButton ${isBtnActive ? 'active' : 'loginButton'}`}
        >
          로그인
        </button>
      </form>
      <div className="socialLogin">
        <button className="socialLoginBtn kakao">
          <i className="fa-regular fa-1x fa-comment" />
          카카오 로그인
        </button>
        <button className="socialLoginBtn naver">
          <i className="fa-brands fa-1x fa-neos" />
          네이버 로그인
        </button>
        <button className="socialLoginBtn google">
          <i className="fa-brands fa-1x fa-google" />
          구글 로그인
        </button>
      </div>
      <div className="linkWrap">
        <button className="memberJoin" onClick={goToSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
