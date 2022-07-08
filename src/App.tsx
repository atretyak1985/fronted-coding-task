import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/charts" />
      </Route>
      <Route path="/charts" exact component={MainPage} />
      <Route path="*" component={MainPage} />
    </Switch>
  );
}

export default App;
