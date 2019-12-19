import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Containers/Login';
import ViewListUser from './ViewListUser';
import Menu from './NavBar';

class PVRoute extends React.Component {
  PrivateRoute = ({ children }) => {
    const { user } = localStorage.getItem('userAdmin');
    return (
      <Route
        render={({ location }) =>
          user ? (
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
      <>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <this.PrivateRoute path="/listUser">
          <ViewListUser />
        </this.PrivateRoute> */}
          <Route path="/listUser">
            <ViewListUser />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    );
  }
}

export default PVRoute;
