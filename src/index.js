import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
const App = () => {
  const history = useHistory();
  console.log(history);
  return (
    <BrowserRouter basename="/spring">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
