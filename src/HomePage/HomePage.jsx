import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        {user.loading && <p>Loading Users...</p>}
        {users.error && <span>{user.error}</span>}
        {users.items && (
          <ul>
            {users.map((user, index) => (
              <li key={user.id}>{user.firstName + " " + user.lastName}</li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}
