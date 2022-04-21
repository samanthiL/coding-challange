import './App.css';
import Logins from './Login';
import Homes from './Home';

import { BrowserRouter,Switch,  Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';

function App() {

  return (
    <div className="App">

     <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Logins} />  
         <Route exact path="/Home" component={Homes} />
   

      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
