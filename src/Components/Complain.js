import React from 'react';
import { Badge, Card, Media, Table, Button } from 'reactstrap';
import '../Style.css';

class Complain extends React.Component {
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
              <h2 class="entry-title">Danh sách khiếu nại</h2>
            </header>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Gia Sư</th>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Xác nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
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
                            Trương Phạm Nhât Tiến
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="avatar"
                            src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/p100x100/53023841_1076299825887962_7777782565821218816_o.jpg?_nc_cat=103&_nc_ohc=7x2EufkFARsAQmQKkBs6ZZkKqDn1loPPvklLfqTmsqUsNYFOg4MeIUUuw&_nc_ht=scontent.fsgn5-7.fna&oh=0f167a5eedc8944efe338d36f5bc5b80&oe=5E6F6465"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Lê Thanh Thành Toại
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <Badge pill color="success">
                        Đã xác nhận
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="primary">
                        Đang học
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
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
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="avatar"
                            src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/p100x100/53023841_1076299825887962_7777782565821218816_o.jpg?_nc_cat=103&_nc_ohc=7x2EufkFARsAQmQKkBs6ZZkKqDn1loPPvklLfqTmsqUsNYFOg4MeIUUuw&_nc_ht=scontent.fsgn5-7.fna&oh=0f167a5eedc8944efe338d36f5bc5b80&oe=5E6F6465"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Lê Thanh Thành Toại
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                      <Badge pill color="warning">
                        Đang chờ
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Đang khiếu nại
                      </Badge>
                    </td>
                    <td>
                      <Badge pill color="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
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

export default Complain;
