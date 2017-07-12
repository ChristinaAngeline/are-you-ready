import React, { Component } from 'react';

import styles from './attendance.css';

class AttendancePage extends Component {
  render() {
    return (
      <div className={styles.attendance}>
        <section>
          <h1>Attendance </h1>
          <p>This is some text...</p>
        </section>
      </div>
    );

  }
}

export default AttendancePage;
