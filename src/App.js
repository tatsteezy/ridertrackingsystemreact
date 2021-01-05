import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import CovidUpdates from "./components/covid_updates/CovidUpdates";
import InteractiveMap from "./components/map/InteractiveMap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/covid_updates">
            <Header />
            <CovidUpdates />
          </Route>
          <Route path="/interactive_map">
            <Header />
            <InteractiveMap />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>v
        </Switch>
      </div>
    </Router>
  );
}

export default App;
