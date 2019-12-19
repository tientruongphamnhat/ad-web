/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar, Button, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  handleLogout = () => {
    const { logOut } = this.props;
    logOut();
  };

  render() {
    // const { userAdmin } = JSON.parse(localStorage.getItem('userAdmin'));
    const { userAdmin } = true;
    return (
      <Navbar color="light">
        <NavbarBrand>
          <h1 className="site-title">
            <a>
              Ezu<span>ca</span>
            </a>
          </h1>
        </NavbarBrand>
        {userAdmin ? (
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/viewUser">Người Dùng</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/skillManager">Kỹ Năng</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/viewContract">Hợp Đồng</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Khiếu Nại">Khiếu Nại</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Doanh Thu">Doanh Thu</Link>
            </Nav.Link>
          </Nav>
        ) : null}
        <Nav className="mr">
          <span className="mt-2 mr-2">
            {/* {userAdmin.name ? userAdmin.name : 'Chưa có'} */}
          </span>
          <Button color="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
