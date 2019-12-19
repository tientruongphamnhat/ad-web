import React from 'react';
import { Card, Media, Table, Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';

class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  componentDidMount() {}

  render() {
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
                    type="submit"
                    value=""
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
                <tbody>
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
                            src="https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQmQK7N6pWofiE0KgtgJ3iOOEZ5hBZajEgbBC7vDvB4IOA&_nc_ht=scontent-hkg3-2.xx&oh=58c179d6691c367bf118decdea6e5a29&oe=5EAF7B12"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Trương Phạm Nhật Tiến
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>nhattien@gmail.com</td>
                    <td>Nam</td>
                    <td>097653524</td>
                    <td>Hồ Chí Minh</td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
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
                            src="https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQmQK7N6pWofiE0KgtgJ3iOOEZ5hBZajEgbBC7vDvB4IOA&_nc_ht=scontent-hkg3-2.xx&oh=58c179d6691c367bf118decdea6e5a29&oe=5EAF7B12"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Trương Phạm Nhật Tiến
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>nhattien@gmail.com</td>
                    <td>Nam</td>
                    <td>097653524</td>
                    <td>Hồ Chí Minh</td>
                    <td className="text-right">
                      <Button color="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUser;
