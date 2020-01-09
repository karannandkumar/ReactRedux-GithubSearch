import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./store/reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/search";
import Bookmark from "./components/bookmark";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <header className="header">
          <div className="head">Coding Challenge</div>

          <ul className="main-nav">
            <li>
              {" "}
              <Link to="/Search">Search</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/Bookmark">Bookmarks</Link>{" "}
            </li>
          </ul>
          <p>Karan Nandkumar</p>
        </header>

        <Switch>
          <Route path="/Search" exact>
            <ErrorBoundary>
              <Search />
            </ErrorBoundary>
          </Route>
          <Route path="/Bookmark" component={Bookmark}></Route>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
