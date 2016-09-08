import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class Home extends Component {

  componentDidMount() {
    document.title = 'Home';
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="wrapper">

          <Link to='/about' id='full-height'>

            <h2>GC</h2>

            <h3>Hello.</h3>
            <p className='about-text'>My name is George Cook, and I am a Web Developer. I am
            passionate about all things JavaScript.  </p>

            <p className='about-text'>Click to read more about what I do.</p>
            <img src='/assets/me.jpg' />
          </Link>

          <Link to='/projects' id="half-top">
            <div id='projects-wrap'>
              <h3>Projects.</h3>
              <h4>Click to view some projects of mine.</h4>
            </div>

          </Link>

          <div id="half-bottom">
            <h3>Contact.</h3>
            <div className='email-contact'> <img src='/assets/email.png' /> <a href='mailto:george.cook.92@hotmail.co.uk'>george.cook.92@hotmail.co.uk</a> </div>
            <div className='social-contact'>
              <a href='https://twitter.com/GeorgeTCook'><img className='icon-contact' src='/assets/twitter.png' /></a>
              <a href='https://github.com/georgecook92'><img className='icon-contact' src='/assets/github.png' /></a>
              <a href='http://stackoverflow.com/users/6488673/george-cook'><img className='icon-contact' src='/assets/stack-overflow.png' /></a>
            </div>
          </div>

        </div>
      </div>
    );
  }

}
