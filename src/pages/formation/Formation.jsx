import React, { Component } from 'react';
import styles from './formation.css';

class FormationPage extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h1>Formation Chart</h1>
          <div className={styles.formation}>
            <img src="./images/formation.png" alt="formation" />
          </div>
        </section>
      </div>
    );
  }
}


export default FormationPage;
