import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Containers/Login';
import ViewListUser from './ViewListUser';
import Menu from './NavBar';
import DetailUsser from './DetailUser';
import Footer from './Footer';
import DetailContract from './DetailContract';
import Contract from './ListContract';
import Complain from './Complain';
import ControlSkill from './ControlSkills';

class PVRoute extends React.Component {
  PrivateRoute = ({ children }) => {
    const { user } = localStorage.getItem('userAdminToken');
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
          {/* <this.PrivateRoute path="/viewUser">
          <ViewListUser />
        </this.PrivateRoute> */}
          {/* <this.PrivateRoute path="/detailUser">
          <DetailUsser/>
        </this.PrivateRoute> */}
          {/* <this.PrivateRoute path="/detailContract">
          <DetailContract/>
        </this.PrivateRoute> */}
          {/* <this.PrivateRoute path="/contract">
          <Contract/>
        </this.PrivateRoute> */}
          {/* <this.PrivateRoute path="/controlSkills">
          <ControlSkill/>
        </this.PrivateRoute> */}
          <Route path="/viewUser">
            <ViewListUser />
          </Route>
          <Route path="/detailUser">
            <DetailUsser />
          </Route>
          <Route path="/detailContract">
            <DetailContract />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          <Route path="/complain">
            <Complain />
          </Route>
          <Route path="/controlSkills">
            <ControlSkill />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default PVRoute;
