import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './attendance.css';

class AttendancePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: '',
      lastName: '',
      firstName: '',
      mos: '',
      checkinStatus: true,
      comments: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

    handleInput(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(e) {

      e.preventDefault();
      firebase.database()
      .ref('/UserInfo')
      .get({
        rank: this.state.rank,
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        mos: this.state.mos,
        checkinStatus: this.state.checkinStatus,
        comments: this.state.comments

      })

      .then(() => {
        this.setState({
          rank: '',
          lastName: '',
          firstName: '',
          mos: '',
          checkinStatus: '',
          comments: ''
        });
      });
    }

  render() {
    return (
      <div className={styles.attendance}>
        <section>
          <h1>Attendance Information</h1>
            <table onSubmit={e => this.handleSubmit(e)}>
            <colgroup span="6"></colgroup>
              <thead>
                <tr>
                    <th name="rank" value={this.state.rank} onChange={e => this.handleInput(e)}>Rank </th>
                    <th name="lastName" value={this.state.lastName} onChange={e => this.handleInput(e)}>Last Name </th>
                    <th name="firstName" value={this.state.firstName} onChange={e => this.handleInput(e)}>First Name </th>
                    <th name="mos" value={this.state.mos} onChange={e => this.handleInput(e)}>MOS</th>
                    <th name="checkinStatus" value={this.state.checkinStatus} onChange={e => this.handleInput(e)}>Check in Status
                    </th>
                    <th name="comments" value={this.state.comments} onChange={e => this.handleInput(e)}>Comments</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <td name="rank" value={this.state.rank} >E5 </td>
                    <td name="lastName" value={this.state.lastName} >Angeline </td>
                    <td name="firstName" value={this.state.firstName} >Christina </td>
                    <td name="mos" value={this.state.mos} >0621 </td>
                    <td name="checkinStatus" value={this.state.checkinStatus} onChange={e => this.handleInput(e)}>
                    <label>
                        <input
                          name="checkinStatus"
                          type="checkbox"
                          checked={this.state.checkinStatus}
                          onChange={this.handleInput} />
                    </label>
                    </td>
                    <td name="comments" value={this.state.comments} >
                    <label>
                        <input
                          name="comment"
                          type="text"
                          checked={this.state.checkinStatus}
                          onChange={this.handleInput} />
                    </label> </td>
                </tr>

              </tbody>

            </table>
            <input type="submit" value="submit" />

        </section>
      </div>
    );
  }
  }

export default AttendancePage;
