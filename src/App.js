import React from 'react';
import './App.css';
import './assets/css/slick.css'
import { Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import Properties from "./pages/Properties"

function App() {
  return (
   <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/properties" component={Properties} />
   </Switch>
   
  );
}

export default App;
