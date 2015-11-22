import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import 'styles/core.scss';

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    // Faster version of next line
    const route = this.props.route.charAt(0) === '/' ? this.props.route.substring(1, this.props.route.length) : this.props.route;
    // const route = this.props.route.replace('^/', '');

    const navItems = ['chat', 'giphy'].map((link, i) => {
      return (
        <li key={i} className={'nav-item' + (route === link ? ' active' : '')}>
          <Link to={link} className='nav-link'>{link}</Link>
        </li>
      )
    });

    return (
      <div className='page-container'>
        <nav className='navbar navbar-light bg-faded'>
          <Link to='/' className='navbar-brand'>Bigroom</Link>
          <ul className='nav navbar-nav'>
            {navItems}
          </ul>
        </nav>
        <div className='app-container container-fluid'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(state => ({route: state.routing.path}))(CoreLayout);
