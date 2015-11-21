import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { fetch_giphy }        from 'actions/giphy';

class GiphyView extends Component {
  getGiphy() {
    this.props.fetch_giphy(this.refs.search.value || 'funny cats');
    this.refs.search.value = '';
  }

  render() {
    const giphys = this.props.giphy.map((giphy, i) => {
      return (
        <li key={i}>
          {giphy.term + ' '}
          <img src={giphy.image.url} />
        </li>
      )
    });

    return (
      <div>
        <h1>Giphy test</h1>
        <input type="text" ref='search' placeholder='search term'/>
        <button onClick={::this.getGiphy}>get giphy</button>
        <ul>{giphys}</ul>
      </div>
    );
  }
};

export default connect(state => ({giphy: state.giphy}),
                       dispatch => bindActionCreators({fetch_giphy}, dispatch))(GiphyView);
