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
  }

    handleInput({ target: {name, value}}) {
      this.setState({
        [name]: value
      });
    }

    handleSubmit(e) {

      e.preventDefault();
      firebase.database()
      .ref('/UserInfo')
      .push({

        // login
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
         <form onSubmit={e => this.handleSubmit(e)}>
           <label htmlFor="militaryEmail"> Military Email:
            <input type="email" name="militaryEmail" value={this.state.militaryEmail} onChange={this.handleChange} placeholder="Email" />
           </label>

           <label htmlFor="password">Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
           </label>

           <span>
           <button id="btnLogin">Log in</button>

           <button id="btnSignUp">Sign up</button>

           <button id="btnLogout">Log out</button>

           </span>

         </form>
        </section>
      </div>
    );
  }
}


export default LoginPage;
