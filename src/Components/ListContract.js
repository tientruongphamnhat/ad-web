/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge, Card, Media, Table, Button, Form, Input } from 'reactstrap';
import '../Style.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class ListContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listContract: [],
      listTutor: [],
      listStudent: []
    };
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
          const listTutorTemp = [];

          response.data.forEach(contract => {
            let resStudent = true;
            let resTutor = true;

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
                    listStudent: listStudentTemp,
                    listTutor: listTutorTemp
                  });
                }
              });

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
                  listTutorTemp.push(response.data);
                }

                this.setState({
                  listContract: listContractTemp,
                  listStudent: listStudentTemp,
                  listTutor: listTutorTemp
                });
              });

            listContractTemp.push(contract);
          });
          // this.setState({
          //   listContract: response.data
          // });
        }
        res = true;
      });
  }

  handleClickDetailcontract(e) {
    const idUser = e.target.id;
    history.push('/detailContract/id:' + idUser);
    window.location.reload();
  }

  render() {
    const { listContract, listTutor, listStudent } = this.state;
    const mapListContract = listContract.map(contract => {
      console.log('tutor length' + listTutor.length);
      console.log('student length' + listStudent.length);
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {contract.id ? contract.id : 'Chưa có'}
            </Badge>
          </td>
          {listStudent.length > 0 &&
          listTutor.length > 0 &&
          listStudent.length === listContract.length &&
          listTutor.length === listContract.length ? (
            <>
              <th scope="row">
                <Media className="align-items-center">
                  <a className="avatar rounded-circle mr-3">
                    <img
                      alt="avatar"
                      src={
                        listStudent[listContract.indexOf(contract)].attributes
                          .image
                          ? 'https://stormy-ridge-33799.herokuapp.com' +
                            listStudent[listContract.indexOf(contract)]
                              .attributes.image
                          : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                      }
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      {listStudent[listContract.indexOf(contract)].attributes
                        .name
                        ? listStudent[listContract.indexOf(contract)].attributes
                            .name
                        : 'Chưa cập nhập tên'}
                    </span>
                  </Media>
                </Media>
              </th>
              <th scope="row">
                <Media className="align-items-center">
                  <a className="avatar rounded-circle mr-3">
                    <img
                      alt="avatar"
                      src={
                        listTutor[listContract.indexOf(contract)].attributes
                          .image
                          ? 'https://stormy-ridge-33799.herokuapp.com' +
                            listTutor[listContract.indexOf(contract)].attributes
                              .image
                          : 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                      }
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">
                      {listTutor[listContract.indexOf(contract)].attributes.name
                        ? listTutor[listContract.indexOf(contract)].attributes
                            .name
                        : 'Chưa cập nhập tên'}
                    </span>
                  </Media>
                </Media>
              </th>
            </>
          ) : null}

          <td>
            {contract.attributes.price ? contract.attributes.price : 'Chưa có'}
          </td>

          {contract.attributes.status === 'Đang chờ' ? (
            <td>
              <Badge pill color="warning">
                Đang chờ
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đang học' ? (
            <td>
              <Badge pill color="primary">
                Đang học
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đang khiếu nại' ? (
            <td>
              <Badge pill color="danger">
                Đang khiếu nại
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Hoàn thành' ? (
            <td>
              <Badge pill color="success">
                Hoàn thành
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đã hủy' ? (
            <td>
              <Badge pill color="danger">
                Đã hủy
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đã từ chối' ? (
            <td>
              <Badge pill color="success">
                Đã từ chối
              </Badge>
            </td>
          ) : null}

          {contract.attributes.status === 'Đã hoàn tiền' ? (
            <td>
              <Badge pill color="success">
                Đã hoàn tiền
              </Badge>
            </td>
          ) : null}

          {contract.attributes.paid ? (
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
              id={contract.id}
              color="info"
              className="detail-button"
              onClick={e => this.handleClickDetailcontract(e)}
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
              <h2 class="entry-title">Danh sách hợp đồng</h2>
            </header>
            <div className="search">
              <Form inline>
                <>
                  <Input
                    className="col-sm-4"
                    type="search"
                    placeholder="Tên người gia sư hoặc người học?"
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
                  <tr className="text-center">
                    <th scope="col">Mã HD</th>
                    <th scope="col">Gia Sư</th>
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

export default ListContract;
