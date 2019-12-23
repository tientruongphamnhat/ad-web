import React, { Component } from 'react';
import {
  Container,
  CardBody,
  CardHeader,
  Row,
  Col,
  Card,
  Badge
} from 'reactstrap';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  ButtonGroup,
  Button
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
// import ErrorIcon from '@material-ui/icons/Error';
// import PaymentIcon from '@material-ui/icons/Payment';
import '../Style.css';

class DetailContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractDetail: {
        id: '',
        type: '',
        attributes: {
          course: '',
          subject: '',
          addr: '',
          schedule: '',
          time: '',
          status: '',
          paid: '',
          tutor_id: '',
          price: '',
          student_id: '',
          created_at: '',
          updated_at: ''
        }
      }
    };
  }

  componentDidMount() {
    const contractID = window.location.pathname.split('id:')[1];

    let res = true;

    fetch('https://stormy-ridge-33799.herokuapp.com/contracts/' + contractID, {
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
            contractDetail: response.data
          });
        }
        res = true;
      });
  }

  handleCompleteClick() {
    const { updateContract } = this.props;
    const { contractDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userAdminToken'));
    var contract = { status: 'Hoàn thành' };

    updateContract(userToken.token, contractDetail.id, contract);
    contractDetail.attributes.status = 'Hoàn thành';
    this.setState({
      contractDetail: contractDetail
    });
  }

  handleRefundClick() {
    const { updateContract } = this.props;
    const { contractDetail } = this.state;
    const userToken = JSON.parse(localStorage.getItem('userAdminToken'));
    var contract = { status: 'Đã hoàn tiền' };

    updateContract(userToken.token, contractDetail.id, contract);
    contractDetail.attributes.status = 'Đã hoàn tiền';
    this.setState({
      contractDetail: contractDetail
    });
  }

  render() {
    const { contractDetail } = this.state;
    return (
      <div className="container mt-5">
        <div class="container instructors-info ml-5">
          <header class="entry-heading">
            <h2 class="entry-title">Chi tiết hợp đồng</h2>
          </header>
          <Row className="mt-4">
            <Col sm={8} className="noMargin noPadding">
              <Card>
                <CardBody>
                  <Container>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field">Ngày tạo:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail">
                          {contractDetail.attributes.created_at}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lớp</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.course}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Môn học:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.subject}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Địa chỉ:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.addr}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lịch:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.schedule}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Số giờ:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.time} giờ
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Giá thuê:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          100000/giờ
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Chi phí:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.price}
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Trạng thái:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.status === 'Đang chờ' ? (
                            <Badge pill color="warning">
                              Đang chờ
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status === 'Đã từ chối' ? (
                            <Badge pill color="success">
                              Đã từ chối
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status === 'Đã hủy' ? (
                            <Badge pill color="danger">
                              Đã hủy
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status === 'Đang học' ? (
                            <Badge pill color="primary">
                              Đang học
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status ===
                          'Đang khiếu nại' ? (
                            <Badge pill color="danger">
                              Đang khiếu nại
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status === 'Hoàn thành' ? (
                            <Badge pill color="success">
                              Hoàn thành
                            </Badge>
                          ) : null}

                          {contractDetail.attributes.status ===
                          'Đã hoàn tiền' ? (
                            <Badge pill color="success">
                              Đã hoàn tiền
                            </Badge>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Thanh toán:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {contractDetail.attributes.paid ? (
                            <Badge color="success">Đã thanh toán</Badge>
                          ) : (
                            <Badge color="danger">Chưa thanh toán</Badge>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardHeader>
                  <h5 className="mb-0">Thông tin các bên</h5>
                </CardHeader>
                <CardBody>
                  <div className="text-left ml-3">Gia sư</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p720x720/77054448_2395267320735838_6975058001447092224_o.jpg?_nc_cat=111&_nc_ohc=ymh_DbtN4OoAQkwDf1RrSeDg0q4-1oBeo6MA8XgeGnd_SAjk9Ew_gx4Tw&_nc_ht=scontent.fsgn5-3.fna&oh=42f32e4b9ca1c08781385cf517a19443&oe=5EAB49FE"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">Trương Phạm Nhật Tiến</div>
                      }
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
                    />
                  </ListItem>
                  <Divider color="middle" component="li" className="d-block" />
                  <div className="text-left ml-3 mt-3">Học sinh</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/p100x100/53023841_1076299825887962_7777782565821218816_o.jpg?_nc_cat=103&_nc_ohc=7x2EufkFARsAQnn7u7koJ-vi8Nxyl55mC7R2dOQ4eBfXxrZwKutOzkhxg&_nc_ht=scontent.fsgn5-7.fna&oh=ab662d673e5d0665df05914441c0b64e&oe=5E6F6465"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">Lê Thanh Thành Toại</div>
                      }
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
                    />
                  </ListItem>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {contractDetail.attributes.status === 'Đang khiếu nại' ? (
            <Row className="mt-4">
              <Col sm={8} className="noMargin noPadding">
                <Card>
                  <CardHeader>
                    <p
                      style={{
                        paddingTop: '10px',
                        fontSize: '20px'
                      }}
                    >
                      Khiếu Nại
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Container>
                      <Row>
                        <p>{contractDetail.attributes.complaint}</p>
                      </Row>
                      <Row>
                        <Col>
                          <ButtonGroup className="mt-5">
                            <Button
                              style={{
                                color: '#4DA503',
                                background: null,
                                border: '1px solid #4DA503',
                                borderRadius: 6
                              }}
                              startIcon={<DoneIcon />}
                              onClick={() => this.handleCompleteClick()}
                            >
                              Hoàn thành
                            </Button>

                            <Button
                              color="outlined"
                              style={{
                                color: '#F70000',
                                background: null,
                                border: '1px solid #F70000',
                                borderRadius: 6
                              }}
                              startIcon={<CloseIcon />}
                              className="ml-5"
                              onClick={() => this.handleRefundClick()}
                            >
                              Hoàn Tiền lại
                            </Button>
                          </ButtonGroup>
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : null}
        </div>
      </div>
    );
  }
}

export default DetailContract;
