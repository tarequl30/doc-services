import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/login" children={ <Login/> } />
      </Switch>
    </Router>
  );
}

export default App;
