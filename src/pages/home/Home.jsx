import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // login
      email: '',
      password:'',
      error:'',
      loading: false,
      success: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.btnSignUp = this.handleChange.bind(this);
  }

  handleChange({ target: {name, value}}) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true});
    firebase.database().ref('/UserInfo').push({
      militaryEmail: this.state.email,
      password: this.state.password

    })

    .then(() => {
      this.setState({
        // login
        militaryEmail: '',
        password: '',
        loading: false,
        success: true
      });
    });
  }

  render() {
    return (
      <div className={styles.contact}>
        <section>
        <h1>Create a New Account</h1>
        {!this.state.success && (
         <form onSubmit={e => this.handleSubmit(e)} className={styles.container}>
           <label htmlFor="email"> Military Email:
            <input  type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
           </label>

           <label htmlFor="password">Password:
            <input  name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
           </label>

           <button disabled={this.state.loading}> Sign Up</button>
         </form>
       )}
       {this.state.success && (
         <div className={styles.success}>
          <h3>Thank you for Signing Up</h3>
        </div>
       )}
        </section>
      </div>
    );
  }
}


export default HomePage;
