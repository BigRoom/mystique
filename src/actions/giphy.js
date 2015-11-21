import * as C from 'constants/giphy';
import fetch from 'isomorphic-fetch';

const request_giphy = (term) => ({ type: C.REQUEST_GIPHY, payload: { term }});
const receive_giphy = (term, data) => ({ type: C.REQUEST_GIPHY_SUCCESS, payload: { image: data.data[0].images.original, term }});
const fetch_giphy = (term) => {
  return (dispatch) => {
    dispatch(request_giphy(term));
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${term.split(' ').join('+')}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(json => {
        dispatch(receive_giphy(term, json));
      })
  }
}

export default {
  request_giphy,
  receive_giphy,
  fetch_giphy
}
