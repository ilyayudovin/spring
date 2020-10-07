import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const usernameRef = useRef('');
  const passwordRef = useRef('');

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
            <input ref={passwordRef} type="password" name="" required="" />
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
