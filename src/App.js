import React from 'react';
import Home from "./Pages/Home";
import "./styles/input.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BankAccounts from './Pages/AboutUs/BankAccounts';
import TransactionFeeCosts from './Pages/AboutUs/TransactionFeeCosts';
import BranchesAndAgencies from "./Pages/AboutUs/BranchesAndAgencies";
import CollaborationWithUs from "./Pages/AboutUs/CollaborationWithUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/BankAccounts" component={ BankAccounts }/>
        <Route exect path="/TransactionFeeCosts" component= { TransactionFeeCosts }/>
        <Route exact path="/BranchesAndAgencies" component={ BranchesAndAgencies }/>
        <Route exact path="/CollaborationWithUs" component={ CollaborationWithUs }/>
      </Switch>
  </Router>
  );
}

export default App;
