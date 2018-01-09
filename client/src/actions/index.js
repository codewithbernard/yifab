import { FETCH_RESTAURANTS, INIT_LOADING } from './types';
import axios from 'axios';

export function initLoading() {
  return {
    type: INIT_LOADING,
    payload: INIT_LOADING
  };
}

export async function fetchRestaurants(city) {
  const res = await axios.get(`/api/getRestaurants?location=${city}`);
  return {
    type: FETCH_RESTAURANTS,
    payload: res.data
  };
}
