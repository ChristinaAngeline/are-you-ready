import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './employee.css';

class EmployeesPage extends Component {
  render() {
    return (
      <div className={styles.employee}>
        <section>
          <h1>Employee Information</h1>
          <p>This is some text...</p>
        </section>
      </div>
    );
  }
}


export default EmployeesPage;
