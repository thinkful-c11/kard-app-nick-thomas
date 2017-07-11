import * as actions from '../actions/kard';

const initialState={
  loading: false,
  error: null,
  kard: {
    contact: [],
    social: [],
    work: []
  }
};

const kardReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_KARD_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === actions.FETCH_KARD_SUCCESS) {
    return Object.assign({}, state, {
      kard: action.kard,
      loading: false,
      error: null
    });
  }
  else if (action.type === actions.FETCH_KARD_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  else {
    return state;
  }
};

export default kardReducer;
