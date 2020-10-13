import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const App = () => {

  const isLoggedIn = () => {
    return localStorage.getItem('isAuthorized') === 'true';
  };

  return (
   <BrowserRouter basename="/spring">
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/login" component={Login}/>
       <Route render={() => (
         !isLoggedIn() ? (
           <Redirect to="/login"/>
         ) : (
           <Home />
         )
       )}/>
     </Switch>
   </BrowserRouter>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
