import React, {Component} from 'react';
import Nav from './Nav';

export default class Profile extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id='wrapper'>

          <section className="profile-header">
            <h2>GC</h2>
            <h3>Who I am.</h3>
          </section>
          <section id='interests-box'>
            <header>Interests.</header>


            <h4>Offline Web.</h4>
            <p>Web Applications need to function better with poor connectivity. Building offline-first web applications is a
            big passion of mine through the use of Service Workers and modern browser functionalities. This was the subject
            of my University thesis - and I am hoping to expand on this research in the future.  </p>

            <h4>JavaScript.</h4>
            <p>JavaScript is exciting in so many ways, there is always something to learn and I love it. Especially now
              with the release of ES6. I have a keen fullstack
              interest in JavaScript, especially with Node.js server-side and React.js client-side. I'm looking to
              learn new frameworks all the time to keep my knowledge fresh.  </p>
        </section>

          <section id='skills-box'>
            <header>Skills.</header>

            <ul>
              <li>JavaScript - React.js, Node.js, JQuery, Service Workers</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Browser Storage - including IndexedDB and Local Storage</li>
              <li>Version Control - Git</li>
              <li>Java/Android Development</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PHP</li>


            </ul>
          </section>
        </div>
      </div>
    );
  }

}
