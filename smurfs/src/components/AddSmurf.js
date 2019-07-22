import React from 'react'
import {addSmurf} from '../actions/index'
import { connect } from 'react-redux'

class AddSmurf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const {name, age, height} = this.state
    const payload = {name, age, height}

    this.props.addSmurf(payload)

    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className='formButtons'>
            <button type="submit">Add to the village</button>
          </div>
        </form>
      </div>

    )
  }
}

const mapDispatchToProps = {
  addSmurf,
}

export default connect(null,mapDispatchToProps)(AddSmurf)