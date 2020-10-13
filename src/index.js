import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from "./components/RequireAuth/RequireAuth";

const App = () => {

  return (
   <BrowserRouter basename="/spring">
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/login" component={Login}/>
       <RequireAuth>
         <Route exact path={'/home'} component={Home} />
       </RequireAuth>
     </Switch>
   </BrowserRouter>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
