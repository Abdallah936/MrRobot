import React from "react";
import useSticky from "./hooks/useSticky.js";
import Welcome from "./Components/Welcome";
import Navbar1 from "./Components/Navbar1";
import { FooterContainer } from "./containers/Footer";
import Quizz from "./Components/Quizz/Quizz.js";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Dashboard from "./pages/dashboard";
import Layout from "./Components/Layout";
import LogIn from "./Components/Login";
import SignUp from "./Components/Signup";

export default App;
function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" Component={Layout} exact />
          <Route path="/login" Component={LogIn} exact />
          <Route path="/signup" Component={SignUp} exact />
          {/* <Route path="/" render={(props) => <Layout {...props} isAuthorized={this.props.isAuthorized} />} exact />
          <Route path="/login" render={(props) => <LogIn {...props} isAuthorized={this.props.isAuthorized} />} exact />
          <Route path="/signup" render={(props) => <SignUp {...props} isAuthorized={this.props.isAuthorized} />} exact /> */}
        </Switch>
        <Navbar1 sticky={isSticky} />
        <Welcome element={element} />
        <Quizz />
        <FooterContainer element={element} />
      </BrowserRouter>
    </>
  );
}
