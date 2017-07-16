import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Sign Up
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

        // Sign Up
        militaryEmail: this.state.militaryEmail,
        password: this.state.password

      })

      .then(() => {
        this.setState({
          // Sign Up
          militaryEmail: '',
          password:''

        });
      });
    }

  render() {
    return (
      <div className={styles.contact}>
        <section>

         <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>

           <label htmlFor="militaryEmail"> Military Email:
            <input  type="email" name="militaryEmail" value={this.state.militaryEmail} onChange={this.handleChange} placeholder="Email" />
           </label>

           <label htmlFor="password">Password:
            <input  name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
           </label>

           <span>

           <button type="submit" value="Submit" onClick={(e) => this.handleClick(e)}> Submit </button>
           </span>

         </form>
        </section>
      </div>
    );
  }
}


export default HomePage;
