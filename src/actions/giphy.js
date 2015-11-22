import * as C from 'constants/giphy';
import fetch from 'isomorphic-fetch';

const request_giphy = (term) => ({ type: C.REQUEST_GIPHY, payload: { term }});
const receive_giphy = (term, json) => ({ type: C.REQUEST_GIPHY_SUCCESS, payload: { image: json.data[0].images.original, term }});
const receive_giphy_error = (error) => ({ type: C.REQUEST_GIPHY_ERROR, payload: { error }});
const fetch_giphy = (term) => {
  return (dispatch) => {
    dispatch(request_giphy(term));
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${term.split(' ').join('+')}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(json => {
        if(json.data[0]) {
          dispatch(receive_giphy(term, json));
        } else {
          dispatch(receive_giphy_error('no image'));
        }
      }).catch(err => receive_giphy_error(err));
  }
}

export default {
  fetch_giphy
}
