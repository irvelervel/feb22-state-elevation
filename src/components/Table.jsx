import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined,
  // }

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => {
              // this.setState({ selected: 'First' })
              this.props.changeSelected('First')
            }}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => {
              // this.setState({ selected: 'Second' })
              this.props.changeSelected('Second')
            }}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => {
              // this.setState({ selected: 'Third' })
              this.props.changeSelected('Third')
            }}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Remote state is {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
