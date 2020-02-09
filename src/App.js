import React from 'react';
import {　BrowserRouter as Router, Redirect,　Switch,　Route　} from "react-router-dom";
import Home from "./components/pages/home"
import * as pageInfo from "./constants/pageInfo";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/"><Redirect to={pageInfo.HOME.path} /></Route>
        <Route exact path={pageInfo.HOME.path} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
