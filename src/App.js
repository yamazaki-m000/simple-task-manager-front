import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/test"><p>test</p></Link>
        <Link to="/irisawa"><p>irisawa</p></Link>
        <Link to="/yamazaki"><p>yamazaki</p></Link>
        <Link to="/test2"><p>test2</p></Link>
        <Link to="/test3"><p>test3</p></Link>
      </header>
          <Switch>
            <Route path="/test"><p>test</p></Route>
            <Route path="/irisawa"><p>irisawa</p></Route>
            <Route path="/yamazaki"><p>yamazaki</p></Route>
            <Route path="/test2"><p>test2</p></Route>
            <Route path="/test3"><p>test3</p></Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
