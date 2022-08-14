import axios from 'axios';
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENTS = 'CREATE_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// export const readEvents = () => async dispatch => {
//   const response = axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
//   console.log(response);
//   dispatch({ type: READ_EVENTS, response});
// };

export const readEvents = () => async dispatch => {
  axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    .then(function (response) {
      dispatch({ type: READ_EVENTS, response });
    });
};

export const postEvent = values => async dispatch => {
  axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    .then(function (response) {
      dispatch({ type: CREATE_EVENTS, response });
    });
};