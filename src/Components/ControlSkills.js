import React from 'react';
import { Button, Card, Table, Form, Input } from 'reactstrap';

class ControlSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listSkill: []
    };
  }

  componentDidMount() {
    let res = true;

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
  }

  hanldeRemoveSkill(e) {
    const { listSkill } = this.state;
    for (var i = 0; i < listSkill.length; i++) {
      if (String(listSkill[i].id) === e.target.id) {
        listSkill.splice(i, 1);
        break;
      }
    }
    this.setState({
      listSkill: listSkill
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const nameSkill = e.target.ipNameSkill.value;
    if (!nameSkill) {
      return;
    }

    const { listSkill } = this.state;
    var newSkill = {
      id: listSkill.length + 100,
      attributes: {
        name: nameSkill
      }
    };

    listSkill.push(newSkill);

    this.setState({
      listSkill: listSkill
    });
  }

  render() {
    const { listSkill } = this.state;
    const mapListSkill = listSkill.map(Skill => {
      return (
        <tr>
          <td>{Skill.attributes.name}</td>
          <td className="text-right">
            <Button
              id={Skill.id}
              color="danger"
              style={{ width: '60px' }}
              className="detail-button"
              onClick={e => this.hanldeRemoveSkill(e)}
            >
              Xóa
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <div className="container">
          <div class="container instructors-info ml-5">
            <header class="entry-heading">
              <h2 class="entry-title">Quản Lý kỹ Năng</h2>
            </header>
            <div className="search">
              <Form inline onSubmit={e => this.handleSubmit(e)}>
                <>
                  <Input
                    id="ipNameSkill"
                    className="col-sm-4"
                    type="search"
                    placeholder="Tên kỹ năng"
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
            <Card className="mt-4" style={{ width: '500px' }}>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr className="text-center">
                    <th scope="col">Tên Kỹ Năng</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="text-center">{mapListSkill}</tbody>
              </Table>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default ControlSkill;
