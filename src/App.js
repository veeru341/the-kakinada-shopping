import React from "react";
import Header from "./components/Header";
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login"

function App(){
  return(
    <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App;