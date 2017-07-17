import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './login.css';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // login
      militaryEmail: '',
      password:''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleChange({ target: {name, value}}) {
      this.setState({
        [name]: value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      firebase.database().ref('/UserInfo').push({
        militaryEmail: this.state.militaryEmail,
        password: this.state.password

        })

      .then(() => {
        this.setState({
          // login
          militaryEmail: '',
          password: ''

        });
      });
    }

  render() {
    return (
      <div className={styles.login}>
        <section>
        <h1>Login</h1>

          <form onClick={e => this.handleSubmit(e)} className={styles.container}>

           <label htmlFor="militaryEmail"> Military Email:
            <input type="email" name="militaryEmail" value={this.state.militaryEmail} onChange={e => this.handleChange(e)} placeholder="Email" />
           </label>

           <label htmlFor="password">Password:
            <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} placeholder="Password" />
           </label>

           <input type="submit" value="Submit" />

           </form>

        </section>
      </div>
    );
  }
}


export default LoginPage;
