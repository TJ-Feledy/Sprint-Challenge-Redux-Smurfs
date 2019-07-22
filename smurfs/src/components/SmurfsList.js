import React from 'react'
import { connect } from 'react-redux'

class SmurfsList extends React.Component {
  render() {
    return (
  
      <ul>
        <h1>Your Friendly Blue Friends</h1>
        {this.props.smurfs.map((smurf,index) => {
          return (
            <li key={index}>
              <div className='smurfCard'>
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps,)(SmurfsList)