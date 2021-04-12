// import { Route, Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import SearchPage from "./Pages/SearchPage";
import BookDetailPage from "./Pages/BookDetailPage";

// Styling
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/book/:id" exact component={BookDetailPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
