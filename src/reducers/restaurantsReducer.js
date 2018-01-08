import { FETCH_RESTAURANTS } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}
