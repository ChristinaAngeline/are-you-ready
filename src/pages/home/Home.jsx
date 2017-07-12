import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
           <label>
             Email:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
           <input type="submit" value="Submit" />
         </form>
        </section>
      </div>
    );
  }
}


export default HomePage;
