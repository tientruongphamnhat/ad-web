/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar, Button, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class NavBar extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    const { logOut } = this.props;
    logOut();
    history.push('/');
    window.location.reload();
  };

  render() {
    const user = localStorage.getItem('userAdminToken');
    return (
      <>
        <Navbar color="light">
          <NavbarBrand>
            <h1 className="site-title">
              <a>
                Ezu<span>ca</span>
              </a>
            </h1>
          </NavbarBrand>
          {user ? (
            <>
              <Nav className="mr-auto">
                <NavLink>
                  <Link to="/viewUser">Người Dùng</Link>
                </NavLink>
                <NavLink>
                  <Link to="/controlSkills">Kỹ Năng</Link>
                </NavLink>
                <NavLink>
                  <Link to="/contract">Hợp Đồng</Link>
                </NavLink>
                <NavLink>
                  <Link to="/complaint">Khiếu Nại</Link>
                </NavLink>
                <NavLink>
                  <Link to="/Doanh Thu">Doanh Thu</Link>
                </NavLink>
              </Nav>

              <Nav className="mr">
                <span className="mt-2 mr-2">
                  {/* {userAdmin.name ? userAdmin.name : 'Chưa có'} */}
                </span>
                <Button color="danger" onClick={this.handleLogout}>
                  Logout
                </Button>
              </Nav>
            </>
          ) : null}
        </Navbar>
      </>
    );
  }
}

export default NavBar;
