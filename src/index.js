import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to='/login'/>
      </Route>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
