import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import Login from "../src/Pages/Login";
// import Registration from "../src/Pages/Registration"
import Home from "../src/Pages/Home";
import 'antd/dist/antd.css';

function App() {
  
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Registration} /> */}
        <Route exact path="/" component={Home} />


      </Switch>
    </Router>
  );
}

export default App;
