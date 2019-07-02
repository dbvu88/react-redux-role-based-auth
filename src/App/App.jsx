import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { browserHistory } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <p>alert.message</p>
        <div>
          <Router history={browserHistory}>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
