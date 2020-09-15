import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/homepage"));

function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage />}></Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
