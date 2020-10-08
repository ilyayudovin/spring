import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import showPasswordIcon from './../../assets/icons8-eye-24.png';
import hidePasswordIcon from './../../assets/icons8-hide-24.png';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === 'admin' && password === '1234') {
      history.push('/home');
    }
  };

  return (
    <div className="loginContainer">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleClick}>
          <div className="user-box">
            <input ref={usernameRef} type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input ref={passwordRef} type={showPassword ? 'text' : 'password'} name="" required="" />
            {
              showPassword
                ? <img onClick={handlePassword} className="passwordIcon" src={showPasswordIcon} />
                : <img onClick={handlePassword} className="passwordIcon" src={hidePasswordIcon} />
            }
            <label>Password</label>
          </div>
          <a onClick={handleClick}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
