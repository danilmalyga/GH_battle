import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Popular from './Popular';
import Battle from './Battle';
import Contacts from './Contacts';
import Nav from './Nav';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/battle" component={Battle} />
          <Route path="/contacts" component={Contacts} />
          <Route render={() => <h2>404:Page not found</h2>} />
        </Switch>
      </div>
    </Router>
  );
}

// {
//   /* <h1>Name:{this.toggleChange(this.state.status)}</h1>
// <button onClick={this.changeNameHandler}>Change name</button> */
// }
// {
//   /* {this.state.status ? <Home status={this.toggleChange(this.state.status)} /> : null} */
// }
