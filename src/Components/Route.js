import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Containers/Login';

class PVRoute extends React.Component {
  PrivateRoute = ({ children }) => {
    const { user } = this.props;
    return (
      <Route
        render={({ location }) =>
          Object.keys(user).length > 1 ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

export default PVRoute;
