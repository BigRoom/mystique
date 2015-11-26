import { GET_DEFAULT, REQUEST_DEFAULT, RECEIVE_DEFAULT } from 'constants/api';
import fetch from 'isomorphic-fetch';

const request_default = () => ({ type: REQUEST_DEFAULT });

const receive_default = (json) => ({ type: RECEIVE_DEFAULT, payload: { server: json.data.server }});

export const get_default = () => {
  return dispatch => {
    dispatch(request_default());
    return fetch(`http://beta.bigroom.co/api/servers/default`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        dispatch(receive_default(json));
      })
  }
};
