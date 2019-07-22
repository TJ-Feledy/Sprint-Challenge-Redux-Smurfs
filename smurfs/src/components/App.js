import React, { Component } from 'react';
import './App.css';
import {getSmurfs} from '../actions/index'
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList'
import AddSmurf from './AddSmurf'
import { Link, Route } from 'react-router-dom'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  
  render() {
    return (
      <div className="App">
        <nav>
          <Link className='listLink' to='/'>Village</Link>
          <Link className='addLink' to='/addSmurf'>Add a Smurf</Link>
        </nav>

        <Route path='/' exact render={props => <SmurfsList {...props} /> } />
        <Route path='/addSmurf' render={props => <AddSmurf {...props} /> } />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getSmurfs: getSmurfs,
}

export default connect(null, mapDispatchToProps)(App);
