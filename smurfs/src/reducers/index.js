import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
} from '../actions'


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS_START: {
      return {
        ...state,
        fetchingSmurfs: true,
      }
    }
    case GET_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
      }
    }
    case GET_SMURFS_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }
    }
    case ADD_SMURF_START: {
      return {
        ...state,
        addingSmurf: true,
      }
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null,
      }
    }
    case ADD_SMURF_FAILED: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
