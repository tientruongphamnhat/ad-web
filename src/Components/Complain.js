/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge, Card, Media, Table, Button } from 'reactstrap';
import '../Style.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class ListComplain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listContract: [],
      listStudent: []
    };
  }

  handleClickDetailRequest(e) {
    const idContract = e.target.id;
    history.push('/detailContract/id:' + idContract);
    window.location.reload();
  }

  componentDidMount() {
    let res = true;
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
          const listContractTemp = [];
          const listStudentTemp = [];

          response.data.forEach(contract => {
            if (String(contract.attributes.status) === 'Đang khiếu nại') {
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
                    listStudentTemp.push(response.data);
                    this.setState({
                      listContract: listContractTemp,
                      listStudent: listStudentTemp
                    });
                  }
                });
              listContractTemp.push(contract);
            }
          });

          this.setState({
            listContract: listContractTemp
          });
        }
        res = true;
        return true;
      });

    // fetch(`https://stormy-ridge-33799.herokuapp.com/contracts`, {
    //   method: 'get',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(response => {
    //     if (response.status !== 200) {
    //       res = false;
    //     }
    //     return response.json();
    //   })
    //   .then(response => {
    //     if (res) {
    //       var listRequestToOthers = [];
    //       response.data.map(contract => {
    //         if (contract.attributes.student_id === userProfile.id) {
    //           listRequestToOthers.push(contract);
    //         }
    //       });

    //       this.setState({
    //         listRequestToOthers: listRequestToOthers
    //       });
    //     }
    //     res = true;
    //   });
  }

  render() {
    const { listContract, listStudent } = this.state;
    const mapListContract = listContract.map(request => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {request.id ? request.id : 'Chưa có'}
            </Badge>
          </td>
          {listContract.length === listStudent.length &&
          listStudent.length > 0 ? (
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  // onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      listStudent[listContract.indexOf(request)].attributes
                        .image
                        ? 'https://stormy-ridge-33799.herokuapp.com' +
                          listStudent[listContract.indexOf(request)].attributes
                            .image
                        : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    }
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">Trương Phạm Nhật Tiến</span>
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
      <div>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Danh sách học sinh yêu cầu</h2>
            </header>
            <Card className="mt-4">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Mã Hợp Đồng</th>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListContract}</tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ListComplain;
