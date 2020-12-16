import React from "react";
import Index from "./components/Index";
import SignIn from "./Signin/SignIn";
import ListingHome from "./components/ListingHome";

import { useEffect } from "react";
import { fetchListings } from "./actions";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <div className="container">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/signin" component={SignIn} />
          <Route path="/listing/:name" component={ListingHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
