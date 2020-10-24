import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import instance from './../../api/instance';
import showPasswordIcon from './../../assets/icons8-eye-24.png';
import hidePasswordIcon from './../../assets/icons8-hide-24.png';
import './../Login/Login.scss';

const SignUp = () => {
  const { register, setError, errors, clearErrors, handleSubmit, watch } = useForm();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");


  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      age: data.age
    };
    instance.post('/signup', user)
      .then(res => {
        localStorage.setItem('token', res.data);
        history.push('/home');
      })
      .catch(error => {
        console.log(error);
      })
  };

  const moveToLogin = () => {
    history.push('/login');
  };

  return (
    <div className="loginPageContainer">
      <div className="loginForm">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              name='username'
              ref={register({ required: true, minLength: 3 })}
              type="text"
            />
            <label>Username</label>
            {errors.username?.type === "required" &&
            <p className="errorMessage">Username input is required</p>}
            {errors.username?.type === "minLength" &&
            <p className="errorMessage">Username length should be more than 3</p>}
          </div>
          <div className="inputPasswordContainer">
            <div className="inputContainer">
              <input
                name='password'
                ref={register({ required: true, minLength: 4 })}
                onChange={(e) => {
                  if(!(/\d/.test(e.target.value) && /[a-zA-Z]/g.test(e.target.value))){
                    setError("password", {
                      type: "contain"
                    });
                  }
                  else {
                    clearErrors('password');
                  }
                }}
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
              />
              {
                showPassword
                  ? <img alt="" onClick={changePasswordVisibility} className="passwordIcon" src={showPasswordIcon}/>
                  : <img alt="" onClick={changePasswordVisibility} className="passwordIcon" src={hidePasswordIcon}/>
              }
              <label>Password</label>
              {errors.password?.type === "required" &&
              <p className="errorMessage">Password input is required</p>}
              {errors.password?.type === "minLength" &&
              <p className="errorMessage">At least 4 symbols</p>}
              {errors.password?.type === "contain" &&
              <p className="errorMessage">Password must contain at least 1 number and 1 letter</p>}
            </div>
            <div className="inputContainer">
              <input
                name='repeatPassword'
                ref={register({ required: true, validate: value => value === password.current })}
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
              />
              {
                showPassword
                  ? <img alt="" onClick={changePasswordVisibility} className="passwordIcon" src={showPasswordIcon}/>
                  : <img alt="" onClick={changePasswordVisibility} className="passwordIcon" src={hidePasswordIcon}/>
              }
              <label>Repeat password</label>
              {errors.repeatPassword &&
              <p className="errorMessage">Passwords do not match</p>}
            </div>
          </div>
          <div className="nameInputContainer">
            <div className="inputContainer">
              <input
                name='firstName'
                ref={register({ required: true, minLength: 3 })}
                type='text'
              />
              <label>First Name</label>
              {errors.firstName?.type === "required" &&
              <p className="errorMessage">First name is required</p>}
              {errors.firstName?.type === "minLength" &&
              <p className="errorMessage">First name length should be more than 3</p>}
            </div>
            <div className="inputContainer">
              <input
                name='lastName'
                ref={register({ required: true, minLength: 3 })}
                type='text'
              />
              <label>Last Name</label>
              {errors.lastName?.type === "required" &&
              <p className="errorMessage">Last name is required</p>}
              {errors.lastName?.type === "minLength" &&
              <p className="errorMessage">Last name length should be more than 3</p>}
            </div>
          </div>
          <div className="emailInputContainer">
          <div className="inputContainer">
            <input
              name='age'
              ref={register({ required: true, min: 1 })}
              type='number'
            />
            <label>Age</label>
            {errors.age?.type === "min" &&
            <p className="errorMessage">Age can’t be a zero</p>}
          </div>
            <div className="inputContainer">
              <input
                name='email'
                ref={register({ required: true })}
                type="text"
              />
              <label>Email</label>
              {errors.email?.type === "required" &&
              <p className="errorMessage">email is required</p>}
            </div>
          </div>
          <button className="submitButton" type='submit'>
            <span className="corner"/>
            <span className="corner"/>
            <span className="corner"/>
            <span className="corner"/>
            Submit
          </button>
        </form>
        <div className="noAccount">Already have an account? <a onClick={moveToLogin}>Log in</a></div>
      </div>
    </div>
  );
};

export default SignUp;
