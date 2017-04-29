import React, { Component } from 'react';

class Nav extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 400) {
      document.querySelector('.navbar-default').classList.add('navbar-scrolled');
    } else {
      document.querySelector('.navbar-default').classList.remove('navbar-scrolled');
    }
  }
  render() {
    return (
      <div className='container'>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="http://www.soul4fit.com"></a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#workout">Workout</a></li>
            <li><a href="#alim">Alimentación</a></li>
            <li><a href="http://laduranb.blogspot.com/" target="_blank">Blog de Angelica Durán</a></li>
            <li><a href="http://reto90.soul4fit.net" target="_blank">Reto 90</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
