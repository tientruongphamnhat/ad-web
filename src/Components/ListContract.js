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
      listContract: []
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
          this.setState({
            listContract: response.data
          });
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
    const { listContract } = this.state;
    const mapListContract = listContract.map(contract => {
      return (
        <tr>
          <td>
            <Badge pill color="success">
              {contract.id ? contract.id : 'Chưa có'}
            </Badge>
          </td>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                // onClick={e => e.preventDefault()}
              >
                <img
                  alt="avatar"
                  src="https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQmQK7N6pWofiE0KgtgJ3iOOEZ5hBZajEgbBC7vDvB4IOA&_nc_ht=scontent-hkg3-2.xx&oh=58c179d6691c367bf118decdea6e5a29&oe=5EAF7B12"
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">Trương Phạm Nhật Tiến</span>
              </Media>
            </Media>
          </th>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                // onClick={e => e.preventDefault()}
              >
                <img
                  alt="avatar"
                  src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/p100x100/53023841_1076299825887962_7777782565821218816_o.jpg?_nc_cat=103&_nc_ohc=F7pBb5IC7dgAQk--bJezVDWDGFCt0g8rd_ht83v5YsRi1lpamlh14InZQ&_nc_ht=scontent.fsgn5-7.fna&oh=8a1889caad1be79e4a9c21399fceeb19&oe=5E6F6465"
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">Lê Thanh Thành Toại</span>
              </Media>
            </Media>
          </th>
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
