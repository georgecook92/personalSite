import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class Projects extends Component {

  componentDidMount() {
    document.title = 'Projects';
  }

  render() {
    return (
      <div>
        <Nav />
        <div id='wrapper'>
          <div id='wrapper-projects'>
            <section className="profile-header">
              <h2>GC</h2>
              <h3>Projects.</h3>
            </section>
            <section id='stir-app'>
              <Link to='/projects/stir'>
                <img src='/assets/stirLogo.png' />
                <h3>Stir - Progressive Web Application</h3>
                <h4>(Click for more details)</h4>
              </Link>
            </section>
            <section id='parents-voice'>
              <Link to='projects/parents-voice'>
                <img src='/assets/parentsVoice.jpg' />
                <h3>Parents Voice Android Application</h3>
                <h4>(Click for more details)</h4>
              </Link>
            </section>

            <section id='tbc'>

              <h3>More Projects To be Added Soon.</h3>

            </section>
          </div>
        </div>
      </div>
    );
  }

}
