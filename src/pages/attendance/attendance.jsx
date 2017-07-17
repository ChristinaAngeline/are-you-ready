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
      checkinStatus1: true,
      checkinStatus2: true,
      checkinStatus3: true,
      checkinStatus4: true,
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
        checkinStatus1: this.state.checkinStatus1,
        checkinStatus2: this.state.checkinStatus2,
        checkinStatus3: this.state.checkinStatus3,
        checkinStatus4: this.state.checkinStatus4,
        comments: this.state.comments

      })

      .then(() => {
        this.setState({
          rank: '',
          lastName: '',
          firstName: '',
          mos: '',
          checkinStatus: '',
          checkinStatus1: '',
          checkinStatus2: '',
          checkinStatus3: '',
          checkinStatus4: '',
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

                <tr>
                    <td name="rank" value={this.state.rank} >E5 </td>
                    <td name="lastName" value={this.state.lastName} >Jane </td>
                    <td name="firstName" value={this.state.firstName} >Mary </td>
                    <td name="mos" value={this.state.mos} >0311 </td>
                    <td name="checkinStatus1" value={this.state.checkinStatus1} onChange={e => this.handleInput(e)}>
                    <label>
                        <input
                          name="checkinStatus1"
                          type="checkbox"
                          checked={this.state.checkinStatus1}
                          onChange={this.handleInput} />
                    </label>
                    </td>
                    <td name="comments" value={this.state.comments} >
                    <label>
                        <input
                          name="comment"
                          type="text"
                          checked={this.state.checkinStatus1}
                          onChange={this.handleInput} />
                    </label> </td>
                </tr>

                <tr>
                    <td name="rank" value={this.state.rank} >E5 </td>
                    <td name="lastName" value={this.state.lastName} >Smith </td>
                    <td name="firstName" value={this.state.firstName} >John </td>
                    <td name="mos" value={this.state.mos} >0411 </td>
                    <td name="checkinStatus2" value={this.state.checkinStatus2} onChange={e => this.handleInput(e)}>
                    <label>
                        <input
                          name="checkinStatus2"
                          type="checkbox"
                          checked={this.state.checkinStatus2}
                          onChange={this.handleInput} />
                    </label>
                    </td>
                    <td name="comments" value={this.state.comments} >
                    <label>
                        <input
                          name="comment"
                          type="text"
                          checked={this.state.checkinStatus2}
                          onChange={this.handleInput} />
                    </label> </td>
                </tr>

                <tr>
                    <td name="rank" value={this.state.rank} >E5 </td>
                    <td name="lastName" value={this.state.lastName} >Kent </td>
                    <td name="firstName" value={this.state.firstName} >Clark </td>
                    <td name="mos" value={this.state.mos} >0311 </td>
                    <td name="checkinStatus3" value={this.state.checkinStatus3} onChange={e => this.handleInput(e)}>
                    <label>
                        <input
                          name="checkinStatus3"
                          type="checkbox"
                          checked={this.state.checkinStatus3}
                          onChange={this.handleInput} />
                    </label>
                    </td>
                    <td name="comments" value={this.state.comments} >
                     <label>
                        <input
                          name="comment"
                          type="text"
                          checked={this.state.checkinStatus3}
                          onChange={this.handleInput} />
                     </label>
                    </td>
                </tr>

                <tr>
                    <td name="rank" value={this.state.rank} >E5 </td>
                    <td name="lastName" value={this.state.lastName} >Wayne </td>
                    <td name="firstName" value={this.state.firstName} >Bruce </td>
                    <td name="mos" value={this.state.mos} >0311 </td>
                    <td name="checkinStatus4" value={this.state.checkinStatus4} onChange={e => this.handleInput(e)}>
                    <label>
                        <input
                          name="checkinStatus4"
                          type="checkbox"
                          checked={this.state.checkinStatus4}
                          onChange={this.handleInput} />
                    </label>
                    </td>
                    <td name="comments" value={this.state.comments} >
                    <label>
                        <input
                          name="comment"
                          type="text"
                          checked={this.state.checkinStatus4}
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
