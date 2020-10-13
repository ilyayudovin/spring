import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import showPasswordIcon from './../../assets/icons8-eye-24.png';
import hidePasswordIcon from './../../assets/icons8-hide-24.png';
import './Login.scss';

const Login = () => {
  const { register, setError, errors, handleSubmit } = useForm();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const ChangePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const username = data.username;
    const password = data.password;
    if (username !== 'admin') {
      setError("username", {
        type: "wrong"
      });
    }
    if (password !== '1234') {
      setError("password", {
        type: "wrong"
      });
    }
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isAuthorized', 'true');
      history.push('/home');
    }
  };

  return (
    <div className="loginPageContainer">
      <div className="loginForm">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              name='username'
              ref={register({ required: true })}
              type="text"
              className={errors.username && "wrongInput"}
            />
            {errors.username?.type === "wrong" && <p className="errorMessage">Username field is incorrect</p>}
            {errors.username?.type === "required" && <p className="errorMessage">Username field is required</p>}
            <label>Username</label>
          </div>
          <div className="inputContainer">
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
            {errors.password?.type === "wrong" && <p className="errorMessage">Password field is incorrect</p>}
            {errors.password?.type === "required" && <p className="errorMessage">Password field is required</p>}
            {
              showPassword
                ? <img alt="" onClick={ChangePasswordVisibility} className="passwordIcon" src={showPasswordIcon} />
                : <img alt="" onClick={ChangePasswordVisibility} className="passwordIcon" src={hidePasswordIcon} />
            }
            <label>Password</label>
          </div>
          <button className="submitButton" type='submit'>
            <span className="corner" />
            <span className="corner" />
            <span className="corner" />
            <span className="corner" />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
