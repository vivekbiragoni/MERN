import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlaces";

const App = () => {
  return (
    <Router>
      <Switch>   
        <Route path="/" exact>
          <User />
        </Route>  
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
