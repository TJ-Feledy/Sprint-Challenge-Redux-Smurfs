import React from 'react'
import { connect } from 'react-redux'

function SmurfsList(props) {
  if (props.fetchingSmurfs) {
    return <p>Loading the Village...</p>
  }

  return (
    <ul>
      {props.error && <p className='error'>{props.error}</p> }
      <h1>Your Friendly Blue Friends</h1>
      {props.smurfs.map((smurf,index) => {
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


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps,)(SmurfsList)