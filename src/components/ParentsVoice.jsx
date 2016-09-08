import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class ParentsVoice extends Component {

  componentDidMount() {
    document.title = 'Projects | Parents Voice';
  }

  render() {
    return (
      <div>
        <Nav />
        <div id='wrapper'>
          <div id='wrapper-projects'>
            <section className="profile-header">
              <h2>GC</h2>
              <h3>Parents Voice.</h3>
            </section>

            <section id='project-heading'>
              <img src='/assets/parentsVoice.jpg' />
              <div id='project-heading-text'>
                <p>Android application available on the play store <a href='https://play.google.com/store/apps/details?id=com.parentsvoice&hl=en'>here.</a> </p>
                <p>Code available at <a href='https://github.com/georgecook92/parents-voice'>repo.</a> </p>
              </div>
            </section>
            <section id='project-info'>
              <p>This android application was created for the Hackney based charity - Parents Voice. They hope to disrupt
                dangerous youth culture, by helping parents spot the signs and risks associated with this culture. </p>
              <p> The application was built on top of a basic working knowledge of Java and Android studio, through university and self study. </p>
              <p> The first release of this application had a release timeframe of about two weeks, so the application is the minimal viable product.
              The application will be designed and built again soon, along with a corresponding website and iOS application. As this first release was rushed,
            it was a good experience to write code in a pressured situation and to deliver on time.   </p>

            </section>
          </div>
        </div>

      </div>
    );
  }

}
