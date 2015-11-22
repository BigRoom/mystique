import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { fetch_giphy }        from 'actions/giphy';

class GiphyView extends Component {
  getGiphy(e) {
    e.preventDefault();
    this.props.fetch_giphy(this.refs.search.value || 'funny cats');
    this.refs.search.value = '';
  }

  render() {
    const giphys = this.props.giphy.map((giphy, i) => {
      return (
        <li key={i}>
          {giphy.term + ' '}
          <img src={giphy.image.webp} className='img-responsive img-rounded' alt={giphy.term}/>
        </li>
      )
    });

    return (
      <div>
        <h1>Giphy test</h1>
        <form className='form-inline' onSubmit={::this.getGiphy}>
          <div className='form-group'>
            <label for='searchTerm'>Search Term</label>{' '}
            <input ref='search' type='text' className='form-control' id='searchTerm' placeholder='search term (funny cats)' size='30' />
          </div>{' '}
          <button type='submit' className='btn btn-primary'>get giphy</button>
        </form>
        <ul>{giphys}</ul>
      </div>
    );
  }
};

export default connect(state => ({giphy: state.giphy}),
                       dispatch => bindActionCreators({fetch_giphy}, dispatch))(GiphyView);
