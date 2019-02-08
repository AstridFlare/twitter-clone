import React, { Component } from "react";
import "./App.css";

// Importing Components
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />

          <Route component={Default} />
        </Switch> */}
        {/* <Modal /> */}
      </React.Fragment>
    );
  }
}

export default App;
