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
      <div className="loginBox">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="userBox">
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
          <div className="userBox">
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
