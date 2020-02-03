import React from 'react';
import './App.css';
import './assets/dist/css/plugins.min.css'
import './assets/dist/css/main.min.css'
import './assets/css/slick.css'
import { Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Login from './pages/Login';

function App() {
  return (
   <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/properties" component={Properties} exact />
       <Route path="/login" component={Login} exact />

   </Switch>
   
  );
}

export default App;
