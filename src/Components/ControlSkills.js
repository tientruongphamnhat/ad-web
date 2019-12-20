import React from 'react';
import { Button, Card, Table, Form, Input } from 'reactstrap';

class ControlSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Quản Lý kỹ Năng</h2>
            </header>
            <div className="search">
              <Form inline>
                <>
                  <Input
                    className="col-sm-4"
                    type="search"
                    placeholder="Tên kỹ năng?"
                  ></Input>
                </>
                <>
                  <Button
                    style={{
                      backgroundColor: '#34d986',
                      border: 'none',
                      marginLeft: '10px'
                    }}
                    type="submit"
                  >
                    Thêm
                  </Button>
                </>
              </Form>
            </div>
            <Card className="mt-4 col-7">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tên Kỹ Năng</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Toán</td>
                    <td className="text-right">
                      <Button
                        color="danger"
                        style={{ width: '60px' }}
                        className="detail-button"
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Lý</td>

                    <td className="text-right">
                      <Button
                        color="danger"
                        style={{ width: '60px' }}
                        className="detail-button"
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default ControlSkill;
