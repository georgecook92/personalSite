import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class Stir extends Component {

  componentDidMount() {
    document.title = 'Projects | Stir';
  }

  render() {
    return (
      <div>
        <Nav />
        <div id='wrapper'>
          <div id='wrapper-projects'>
            <section className="profile-header">
              <h2>GC</h2>
              <h3>Stir.</h3>
            </section>

            <section id='project-heading'>
              <img src='/assets/stirLogo.png' />
              <div id='project-heading-text'>
                <p>Application available at <a href='https://stir-recipe.herokuapp.com'>Stir.</a> </p>
                <p>Code available at <a href='https://github.com/georgecook92/Stir'>repo.</a> </p>
              </div>
            </section>
            <section id='project-info'>
              <p>Stir is an offline-first Progressive Web Application which was built for my University Dissertation. Service Workers are used heavily to control the network, and provide a better experience for users. If you have not used Service Workers before, please have a read of the API <a href='https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API'>here</a>. </p>
              <p>The front-end of Stir is built with a combination of React and Redux. The back-end is a RESTful API built with Node.js, Express.js and MongoDB.</p>
              <p>The application and general research behind my dissertation was a lot of fun, it was great to be working on the forefront of emerging JavaScript technologies. If you are interested in having a read of my dissertation, it is available <a href='/assets/thesis.pdf' target='_blank'>here.</a> No hard feelings if not! </p>
              <p>Please note, the application is NOT production ready - it is just a fairly basic prototype showcasing the offline features.</p>
            </section>
          </div>
        </div>

      </div>
    );
  }

}
