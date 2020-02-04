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
          <Route exact path="/home"></Route>
          <Route exact path="/about"></Route>
          <Route path="/explore/cafes">
            <Explore />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
