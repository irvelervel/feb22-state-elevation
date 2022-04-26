import './App.css'
import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'

// for sharing the same state between multiple sibling components
// the only way is elevating the state UP to their nearest common ancestor
// and then pass the same state property down with the props
// because the props go only one way: from TOP to BOTTOM

class App extends Component {
  // if we move the state here, now we can pass it down to both Table and Detail
  // they will be in sync at that point, because there's a SINGLE SOURCE OF TRUTH
  // that is shared across the components

  state = {
    selected: undefined,
  }

  changeSelected = (newValue) => {
    this.setState({ selected: newValue })
    // this function is capable of changing the selected value
    // in App's state
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  changeSelected={this.changeSelected} // <-- this is for changing the value
                  selected={this.state.selected} // <-- this is for reading the value
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
