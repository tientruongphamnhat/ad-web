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
      numPages: null,
      pageNumber: 4
    };
  }

  componentDidMount() {}

  render() {
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
                          11/11/2011
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lớp</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">10</div>
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
                          Toán
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
                          48 Bùi Thị Xuân
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">Lịch:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          T2, T4, T6
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
                          10 giờ
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
                          Trạng thái:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          <Badge color="danger">Chưa thanh toán</Badge>
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
                      <p>Thầy dạy chưa thường xuyên tới trễ</p>
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
                            onClick={() => this.handleCancelClick()}
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
        </div>
      </div>
    );
  }
}

export default DetailContract;
