import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import instance from './../../api/instance';
import showPasswordIcon from './../../assets/icons8-eye-24.png';
import hidePasswordIcon from './../../assets/icons8-hide-24.png';
import './Login.scss';

const Login = () => {
  const { register, setError, errors, handleSubmit } = useForm();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const сhangePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    instance.post('/login', { username: data.username, password: data.password })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          history.push('/home');
        }
        else {
          setError(res.data.type, {
            type: "notFound",
            message: res.data.error
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

  const moveToSignUp = () => {
    history.push('/signup');
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
            {errors.username?.type === "notFound" && <p className="errorMessage">{errors.username.message}</p>}
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
            {errors.password?.type === "notFound" && <p className="errorMessage">{errors.password.message}</p>}
            {errors.password?.type === "required" && <p className="errorMessage">Password field is required</p>}
            {
              showPassword
                ? <img alt="" onClick={сhangePasswordVisibility} className="passwordIcon" src={showPasswordIcon} />
                : <img alt="" onClick={сhangePasswordVisibility} className="passwordIcon" src={hidePasswordIcon} />
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
        <div className="noAccount">Don't have an account? <a onClick={moveToSignUp}>Sign up</a></div>
      </div>
    </div>
  );
};

export default Login;
