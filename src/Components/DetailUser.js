/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import { Button, Media, Badge, Card, Table } from 'reactstrap';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        type: '',
        attributes: {
          name: '',
          email: '',
          dob: '',
          gender: '',
          phone: '',
          city: '',
          price: '',
          skills: []
        }
      },
      listSkill: [],
      listRequestToMe: [],
      listStudents: [],
      listRequestToOthers: [],
      listTutor: []
    };
  }

  componentDidMount() {
    const userID = window.location.pathname.split('id:')[1];
    // const token = JSON.parse(localStorage.getItem('userToken')).token;

    let res = true;

    //Lấy thông tin user
    fetch('https://stormy-ridge-33799.herokuapp.com/users/' + userID, {
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
            user: response.data
          });
        }
        res = true;
      });

    //Lấy list kỹ năng
    fetch('https://stormy-ridge-33799.herokuapp.com/skills', {
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
            listSkill: response.data
          });
        }
        res = true;
      });

    //Lấy danh sách dạy
    fetch(`https://stormy-ridge-33799.herokuapp.com/contracts`, {
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
          const listRTMeTemp = [];
          const listRTOthersTemp = [];
          const listStudentTemp = [];
          const listTutorTemp = [];

          response.data.forEach(contract => {
            if (String(contract.attributes.tutor_id) === userID) {
              console.log('contract others hire me' + contract);
              let resStudent = true;
              fetch(
                'https://stormy-ridge-33799.herokuapp.com/users/' +
                  String(contract.attributes.student_id),
                {
                  method: 'get',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                }
              )
                .then(response => {
                  if (response.status !== 200) {
                    resStudent = false;
                  }
                  return response.json();
                })
                .then(response => {
                  if (resStudent) {
                    console.log('học sinh' + response.data);
                    listStudentTemp.push(response.data);
                    console.log('học sinh length' + listStudentTemp.length);
                    this.setState({
                      listStudents: listStudentTemp
                    });
                  }
                });
              listRTMeTemp.push(contract);
              console.log('hire length' + listRTMeTemp.length);
              this.setState({
                listRequestToMe: listRTMeTemp
              });
            }
            if (String(contract.attributes.student_id) === userID) {
              console.log('contract hire others' + contract);
              let resTutor = true;

              fetch(
                'https://stormy-ridge-33799.herokuapp.com/users/' +
                  String(contract.attributes.tutor_id),
                {
                  method: 'get',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                }
              )
                .then(response => {
                  if (response.status !== 200) {
                    resTutor = false;
                  }
                  return response.json();
                })
                .then(response => {
                  if (resTutor) {
                    console.log(response.data);
                    listTutorTemp.push(response.data);
                  }
                  this.setState({
                    listTutor: listTutorTemp
                  });
                });
              listRTOthersTemp.push(contract);
              this.setState({
                listRequestToOthers: listRTOthersTemp
              });
            }
          });

          // this.setState({
          //   listRequestToMe: listRTMeTemp,
          //   listRequestToOthers: listRTOthersTemp,
          //   listStudents: listStudentTemp,
          //   listTutor: listTutorTemp
          // });
        }
        res = true;
        return true;
      });
  }

  handleClickDetailRequest(e) {
    const idContract = e.target.id;
    history.push('/detailContract/id:' + idContract);
    window.location.reload();
  }

  render() {
    const {
      user,
      listRequestToMe,
      listRequestToOthers,
      listStudents,
      listTutor
    } = this.state;
    const mapListSkill = user.attributes.skills.map(skill => {
      return <li>{skill.name}</li>;
    });

    const mapListRequestToMe = listRequestToMe.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          {listStudents.length > 0 &&
          listStudents.length === listRequestToMe.length ? (
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  // onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      listStudents[listRequestToMe.indexOf(request)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listStudents[listRequestToMe.indexOf(request)]
                            .attributes.image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                    {listStudents[listRequestToMe.indexOf(request)].attributes
                      .name
                      ? listStudents[listRequestToMe.indexOf(request)]
                          .attributes.name
                      : 'Chưa cập nhập tên'}
                  </span>
                </Media>
              </Media>
            </th>
          ) : null}

          <td>
            {request.attributes.price ? request.attributes.price : 'Chưa có'}
          </td>

          {request.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}
          {request.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {request.attributes.paid ? (
            <td>
              <Badge pill color="success">
                Đã thanh toán
              </Badge>
            </td>
          ) : (
            <td>
              <Badge pill color="danger">
                Chưa thanh toán
              </Badge>
            </td>
          )}

          <td className="text-right">
            <Button
              id={request.id}
              color="info"
              className="detail-button"
              onClick={e => this.handleClickDetailRequest(e)}
            >
              Chi tiết
            </Button>
          </td>
        </tr>
      );
    });

    const mapListRequestToOthers = listRequestToOthers.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          {listTutor.length > 0 &&
          listTutor.length === listRequestToOthers.length ? (
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  // onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      listTutor[listRequestToOthers.indexOf(request)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listTutor[listRequestToOthers.indexOf(request)]
                            .attributes.image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                    {listTutor[listRequestToOthers.indexOf(request)].attributes
                      .name
                      ? listTutor[listRequestToOthers.indexOf(request)]
                          .attributes.name
                      : 'Chưa cập nhập tên'}
                  </span>
                </Media>
              </Media>
            </th>
          ) : null}
          <td>
            {request.attributes.price ? request.attributes.price : 'Chưa có'}
          </td>

          {request.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}
          {request.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {request.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {request.attributes.paid ? (
            <td>
              <Badge pill color="success">
                Đã thanh toán
              </Badge>
            </td>
          ) : (
            <td>
              <Badge pill color="danger">
                Chưa thanh toán
              </Badge>
            </td>
          )}

          <td className="text-right">
            <Button
              id={request.id}
              color="info"
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
                    <tr className="text-center">
                      <th scope="col">Mã HD</th>
                      <th scope="col">Học sinh</th>
                      <th scope="col">Phí</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thanh toán</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody className="text-center">{mapListRequestToMe}</tbody>
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
                      <th scope="col">Mã HD</th>
                      <th scope="col">Người dạy</th>
                      <th scope="col">Phí</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thanh toán</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>{mapListRequestToOthers}</tbody>
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
