import React from 'react';
import { Card, Media, Table, Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: []
    };
  }

  componentDidMount() {
    let res = true;

    fetch('https://stormy-ridge-33799.herokuapp.com/users', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          this.setState({
            listUser: response.data
          });
        }
        res = true;
      });
  }

  handleClickDetailRequest(e) {
    const idUser = e.target.id;
    history.push('/detailUser/id:' + idUser);
    window.location.reload();
  }

  render() {
    const { listUser } = this.state;
    const mapListUser = listUser.map(user => {
      return (
        <tr>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <img
                  alt="avatar"
                  src={
                    user.attributes.image
                      ? `https://stormy-ridge-33799.herokuapp.com${user.attributes.image}`
                      : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                  }
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">
                  {user.attributes.name
                    ? user.attributes.name
                    : 'Chưa cập nhập tên'}
                </span>
              </Media>
            </Media>
          </th>
          <td>{user.attributes.email}</td>
          <td>
            {user.attributes.gender
              ? user.attributes.gender
              : 'Chưa cập nhập giới tính'}
          </td>
          <td>
            {user.attributes.phone
              ? user.attributes.phone
              : 'Chưa cập số điện thoại'}
          </td>
          <td>
            {user.attributes.city ? user.attributes.city : 'Chưa cập địa chỉ'}
          </td>
          <td className="text-right">
            <Button
              id={user.id}
              style={{ backgroundColor: '#34d986', border: 'none' }}
              className="detail-button"
              onClick={e => this.handleClickDetailRequest(e)}
            >
              Chi tiết
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Quản lý người dùng</h2>
            </header>
            <div className="search">
              <Form inline>
                <>
                  <Input
                    className="col-sm-4"
                    type="search"
                    placeholder="Tên Người dùng?"
                  ></Input>
                </>
                <>
                  <Button
                    style={{ backgroundColor: '#34d986', border: 'none' }}
                    type="submit"
                    classNameName="flex justify-content-center align-items-center"
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </>
              </Form>
            </div>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Người dùng</th>
                    <th scope="col">Email</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Nơi ở</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>{mapListUser}</tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUser;
