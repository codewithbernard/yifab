import { FETCH_RESTAURANTS, INIT_LOADING } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_RESTAURANTS:
      return action.payload;
    case INIT_LOADING:
      return action.payload;
    default:
      return state;
  }
}
