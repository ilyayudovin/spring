import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import showPasswordIcon from './../../assets/icons8-eye-24.png';
import hidePasswordIcon from './../../assets/icons8-hide-24.png';
import './Login.scss';

const Login = () => {
  const { register, setError, errors, handleSubmit } = useForm();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const username = data.username;
    const password = data.password;
    if(username !== 'admin'){
      setError("username", {
        type: "wrong",
        message: "username field is incorrect"
      });
    }
    if(password !== '1234'){
      setError("password", {
        type: "wrong",
        message: "password field is incorrect"
      });
    }
    if (username === 'admin' && password === '1234') {
      history.push('/home');
    }
  };

  return (
    <div className="loginContainer">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input
              name='username'
              ref={register({ required: true })}
              type="text"
              className={errors.username && "wrongInput" }
            />
            {errors.username?.type === "wrong" && <p className="errorMessage">username field is incorrect</p>}
            {errors.username?.type === "required" && <p className="errorMessage">username field is required</p>}
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              name='password'
              ref={register({ required: true })}
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              className={errors.password && "wrongInput" }
            />
            {errors.password?.type === "wrong" && <p className="errorMessage">password field is incorrect</p>}
            {errors.password?.type === "required" && <p className="errorMessage">password field is required</p>}
            {
              showPassword
                ? <img onClick={handlePassword} className="passwordIcon" src={showPasswordIcon} />
                : <img onClick={handlePassword} className="passwordIcon" src={hidePasswordIcon} />
            }
            <label>Password</label>
          </div>
          <button type='submit'>
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
