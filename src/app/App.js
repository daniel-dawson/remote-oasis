import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Explore from "../components/Explore";
import styles from "./App.module.css";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route path="/home"></Route>
          <Route path="/about"></Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
