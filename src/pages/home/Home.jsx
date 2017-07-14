import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './Home.css';

class HomePage extends Component {
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
        password:this.state.password

      })

      .then(() => {
        this.setState({
          // login
          militaryEmail: '',
          password:''

        });
      });
    }

  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
           <label htmlFor="militaryEmail"> Military Email:
             <input name="militaryEmail" value={this.state.militaryEmail} onChange={this.handleChange} />
             </label>

          <label htmlFor="password">Password:
           <input name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>

          <input type="submit" value="Submit" />
         </form>
        </section>
      </div>
    );
  }
}


export default HomePage;
