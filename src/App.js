import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <>
        <Main>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News pageSize={this.pageSize} key="health" category="health" />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News pageSize={this.pageSize} key="sport" category="sport" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  key="technology"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Main>
      </>
    );
  }
}
