import React from 'react';
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BankAccounts from './Pages/BankAccounts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/BankAccounts" component={ BankAccounts }/>
      </Switch>
  </Router>
  );
}

export default App;
