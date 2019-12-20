/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar, Button, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  handleLogout = () => {
    const { logOut } = this.props;
    logOut();
  };

  render() {
    // const { userAdmin } = JSON.parse(localStorage.getItem('userAdmin'));
    // const { userAdmin } = true;
    return (
      // <Navbar color="light">
      //   <NavbarBrand>
      //     <h1 className="site-title">
      //       <a>
      //         Ezu<span>ca</span>
      //       </a>
      //     </h1>
      //   </NavbarBrand>
      //   {userAdmin ? (
      //     <Nav className="mr-auto">
      //       <Nav.Link>
      //         <Link to="/viewUser">Người Dùng</Link>
      //       </NavLink>
      //       <Nav.Link>
      //         <Link to="/skillManager">Kỹ Năng</Link>
      //       </NavLink>
      //       <Nav.Link>
      //         <Link to="/viewContract">Hợp Đồng</Link>
      //       </NavLink>
      //       <Nav.Link>
      //         <Link to="/Khiếu Nại">Khiếu Nại</Link>
      //       </NavLink>
      //       <Nav.Link>
      //         <Link to="/Doanh Thu">Doanh Thu</Link>
      //       </NavLink>
      //     </Nav>
      //   ) : null}
      //   <Nav className="mr">
      //     <span className="mt-2 mr-2">
      //       {/* {userAdmin.name ? userAdmin.name : 'Chưa có'} */}
      //     </span>
      //     <Button color="danger" onClick={this.handleLogout}>
      //       Logout
      //     </Button>
      //   </Nav>
      // </Navbar>
      <>
        <Navbar color="light">
          <NavbarBrand>
            <h1 className="site-title">
              <a>
                Ezu<span>ca</span>
              </a>
            </h1>
          </NavbarBrand>

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
              <Link to="/complain">Khiếu Nại</Link>
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
        </Navbar>
      </>
    );
  }
}

export default NavBar;
