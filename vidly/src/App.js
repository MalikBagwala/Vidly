import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import Customers from "./components/cusomters";
import Rentals from "./components/rental";
import NotFound from "./components/notFount";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container content">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
