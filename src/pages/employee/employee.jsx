import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './employee.css';

class EmployeesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersFirstNames: "",
      usersLastNames: ""

      };

    var _this = this

    firebase.database().ref('UserInfo').once('value').then(function(snapshot) {
      var usrs = [];
      var data = snapshot.val()
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          usrs.push(data[key])
        }
      }

      const usersFirstNames = usrs.map((usr) =>
        <li> {usr.firstName}</li>
      );
      const usersLastNames = usrs.map((usr) =>
        <li> {usr.lastName}</li>
      );

      _this.setState({
        usersFirstNames: usersFirstNames,
        usersLastNames: usersLastNames
      })
    })

  }


  render() {

    return (
      <div className={styles.employee}>
        <section>
          <h1>Employee Information</h1>
          <ul>{this.state.usersFirstNames}</ul>
          <ul>{this.state.usersLastNames}</ul>
          <p>This is some text...</p>
        </section>
      </div>
    );
  }
}


export default EmployeesPage;
