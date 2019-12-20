/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Button, Media, Badge, Card, Table } from 'reactstrap';
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input
// } from 'reactstrap';

class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '1',
        type: 'user',
        attributes: {
          name: 'Ho Quan Dai',
          email: 'hoquandai@example.com',
          dob: '1998-08-08T00:00:00.000Z',
          gender: 'male',
          phone: '033444987',
          city: 'HCM',
          price: 25000,
          skills: [
            {
              id: 1,
              name: 'Math',
              desc: 'Math skills',
              created_at: '2019-12-09T16:37:27.385Z',
              updated_at: '2019-12-09T16:37:27.385Z',
              user_id: 1
            },
            {
              id: 2,
              name: 'Physic',
              desc: 'Physic skills',
              created_at: '2019-12-09T16:37:27.391Z',
              updated_at: '2019-12-09T16:37:27.391Z',
              user_id: 2
            }
          ]
        }
      }
    };
  }

  render() {
    const { user } = this.state;
    const mapListSkill = user.attributes.skills.map(skill => {
      return <li>{skill.name}</li>;
    });
    return (
      <>
        <div class="container col-12 col-lg-8">
          <div class="single-course-wrap">
            <div class="instructors-info ml-5">
              <header class="entry-heading">
                <h2 class="entry-title">Thông tin chi tiết</h2>
              </header>
              {/* .entry-heading */}

              <div className="instructor-short-info flex flex-wrap">
                <div className="instructors-stats">
                  <img
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=BxVlFSkgWDAAQlgPodsDXQ2rCpKHjvwFZ5S8m8bEixrJ_MXFie1OpC_-Q&_nc_ht=scontent.fsgn5-3.fna&oh=f21a00b657d0a8f48773aba2c22a117f&oe=5EAF7B12"
                    alt=""
                  />

                  <ul className="p-0 m-0 mt-3">
                    <li>
                      <i className="fa fa-star" /> 4.7 .7 Average rating
                    </li>
                    <li>
                      <i className="fa fa-comment" /> 25,182 Reviews
                    </li>
                    <li>
                      <i className="fa fa-user" /> 11,085 Học sinh
                    </li>
                  </ul>
                </div>
                {/* .instructors-stats */}

                <div className="instructors-details">
                  <div className="course-teacher mt-3">
                    Họ tên:{' '}
                    {user.attributes.name ? (
                      <a>{user.attributes.name}</a>
                    ) : null}
                  </div>
                  {/* .course-teacher */}

                  <div className="course-teacher mt-3">
                    Nơi ở:{' '}
                    {user.attributes.city ? (
                      <a>{user.attributes.city}</a>
                    ) : null}
                  </div>

                  <div className="course-teacher mt-3">
                    Số điện thoại:{' '}
                    {user.attributes.phone ? (
                      <a>{user.attributes.phone}</a>
                    ) : null}
                  </div>
                  <div className="course-teacher mt-3">
                    Giá dạy học:{' '}
                    {user.attributes.price ? (
                      <a>{user.attributes.price} VND/h</a>
                    ) : null}
                  </div>

                  <div className="entry-content mt-3">
                    {user.attributes.intro ? (
                      <p>{user.attributes.intro}</p>
                    ) : null}
                  </div>

                  <div className="single-course-cont-section">
                    <h2>Kỹ Năng</h2>

                    <ul className="p-0 m-0 green-ticked">{mapListSkill}</ul>
                  </div>
                  {/* .entry-content */}
                </div>
                {/* .instructors-details */}
              </div>
              {/* .instructor-short-info */}
            </div>
            {/* .instructors-info */}
            <div className="ml-5 mt-3 mb-2">
              <Button
                style={{
                  color: '#19c880',
                  background: '#fff',
                  borderColor: '#34d986'
                }}
              >
                Khóa Tài Khoản
              </Button>
            </div>

            <div className="instructors-info ml-5">
              <header class="entry-heading">
                <h2 class="entry-title">Danh sách dạy</h2>
              </header>
              <Card className="mt-4">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Học sinh</th>
                      <th scope="col">Phí</th>
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
                      <td>160000d</td>
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
                      <td>120000d</td>
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

            <div className="instructors-info ml-5">
              <header class="entry-heading">
                <h2 class="entry-title">Danh sách học</h2>
              </header>
              <Card className="mt-4">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Học sinh</th>
                      <th scope="col">Phí</th>
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
                      <td>160000d</td>
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
                      <td>120000d</td>
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
          {/* .single-course-wrap */}
        </div>
      </>
    );
  }
}

export default user;
