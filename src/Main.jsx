import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import Admin from "./Admin";
// import "./Main.css";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/admin" component={Admin} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
