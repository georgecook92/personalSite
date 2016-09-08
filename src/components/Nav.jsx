import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {

  eventFire(el, etype){
    if (el.fireEvent) {
      debugger;
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  componentDidMount() {
    var toggled = false;
    var menuImage = document.getElementById('menu');
    var wrapper = document.getElementById('wrapper');
    var nav = document.getElementById('navigation');
    menuImage.addEventListener('click', () => {
      if (!toggled) {
        nav.style.display = 'block';
        wrapper.style.display = 'none';
        toggled = true;
      } else {
        nav.style.display = 'none';
        wrapper.style.display = 'block';
        toggled = false;
      }
    });
  }

  render() {
    return (
      <div>
        <img src='/assets/menu-new.png' id='menu'  />
        <div id='navigation'>
          <h2>GC</h2>
          <h3>Navigation.</h3>
          <ul>
            <li><Link to='/' onClick={ () => this.eventFire(document.getElementById('menu'), 'click') }>Home</Link></li>
            <li><Link to='/about' onClick={ () => this.eventFire(document.getElementById('menu'), 'click') }>About Me</Link></li>
            <li><Link to='/projects' onClick={ () => this.eventFire(document.getElementById('menu'), 'click') }>Projects</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
