import firebase from 'firebase';
import React, { Component } from 'react';
import styles from './employee.css';

class EmployeesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRanks: '',
      usersFirstNames: '',
      usersLastNames: '',
      usersMOSs: '',
      //genders: '',

      // contact info
      usersphoneNumberss: '',
      usersmilitaryEmails: '',
      userscivilianEmails: '',
      //
      // street address
      usersstreets: '',
      userscitys: '',
      usersstates: '',
      userszips: ''
      //
      // // emergency contact
      // usersemergencyNames: '',
      // // emergency address
      // usersemergencyStreets: '',
      // usersemergencyCitys: '',
      // usersemergencyStates: '',
      // usersemergencyZips: '',
      // usersemergencyPhoneNumbers: '',
      // usersemergencyEmails: '',
      // usersemergencyRelationships: '',
      //
      // //Clearance
      // usersinvestigationTypes: '',
      // usersinvestigationCloseds: '',
      // usersexperationDates: '',
      //
      // //enlistment
      // usersdateOfEnlistments: '',
      // usersETSs: '',
      //
      // //evaluations
      // usersdateOfLastEvaluations: '',
      //
      // // Army Physical Fitness Test(APFT)
      // usersapftDates: '',
      // usersapftDateExpires: '',
      // userstotals: '',
      // userspassFails:'',
      // userspushupss: '',
      // userssitupss: '',
      // usersruns: '',
      // usersalternateRunScores: '',
      // usersalternateEvents: '',
      // usersprofileTypes: '',
      // usersifTempExperationDates: '',
      //
      // //NCOES
      // usersssdIs: '',
      // usersblcs: '',
      // usersssdIIs: '',
      // usersalcs: '',
      // usersssdIIIs: '',
      // usersslcs: '',
      // usersssDIVs: '',
      // userssgms: '',
      //
      // usersnotes: ''
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

      const usersRanks = usrs.map((usr) =>
          <tr>{usr.rank} </tr>
      );

      const usersFirstNames = usrs.map((usr) =>
          <tr> {usr.firstName} </tr>
      );
      const usersLastNames = usrs.map((usr) =>
        <tr> {usr.lastName}</tr>
      );

      const usersMOSs = usrs.map((usr) =>
          <tr> {usr.mos} </tr>
      );

      const usersphoneNumbers = usrs.map((usr) =>
          <tr> {usr.phoneNumber} </tr>
      );

      const usersmilitaryEmails = usrs.map((usr) =>
          <tr> {usr.militaryEmail} </tr>
      );

      const userscivilianEmails = usrs.map((usr) =>
          <tr> {usr.civilianEmail} </tr>
      );

/////////////////////////Street Address Information////////////////////
      const usersstreets = usrs.map((usr) =>
          <tr> {usr.street} </tr>
      );

      const usersstates = usrs.map((usr) =>
          <tr> {usr.state} </tr>
      );

      const userscitys = usrs.map((usr) =>
          <tr> {usr.city} </tr>
      );

      const userszips = usrs.map((usr) =>
          <tr> {usr.zip} </tr>
      );



      _this.setState({
        usersRanks: usersRanks,
        usersFirstNames: usersFirstNames,
        usersLastNames: usersLastNames,
        usersMOSs: usersMOSs,
        // usersGenders: usersGender,

        // contact info
        usersphoneNumbers: usersphoneNumbers,
        usersmilitaryEmails: usersmilitaryEmails,
        userscivilianEmails: userscivilianEmails,
        //
        // // street address
        usersstreets: usersstreets,
        userscitys: userscitys,
        usersstates: usersstates,
        userszips: userszips
        //
        // // emergency contact
        // usersemergencyNames: usersemergencyNames,
        // // emergency address
        // usersemergencyStreets: usersemergencyStreets,
        // usersemergencyCitys: usersemergencyCitys,
        // usersemergencyStates: usersemergencyStates,
        // usersemergencyZips: usersemergencyZips,
        // usersemergencyPhoneNumbers: usersemergencyPhoneNumbers,
        // usersemergencyEmails: usersemergencyEmails,
        // usersemergencyRelationships: usersemergencyRelationships,
        //
        // //Clearance
        // usersinvestigationTypes: usersinvestigationTypes,
        // usersinvestigationCloseds: usersinvestigationCloseds,
        // usersexperationDates: usersexperationDates,
        //
        // //enlistment
        // usersdateOfEnlistments: usersdateOfEnlistments,
        // usersETSs: usersETSs,
        //
        // //evaluations
        // usersdateOfLastEvaluations: usersdateOfLastEvaluations,
        //
        // // Army Physical Fitness Test(APFT)
        // usersapftDates: usersapftDates,
        // usersapftDateExpires: usersapftDateExpires,
        // userstotals: userstotals,
        // userspassFails: userspassFails,
        // userspushupss: userspushupss,
        // userssitupss: userssitupss,
        // usersruns: usersruns,
        // usersalternateRunScores: usersalternateRunScores,
        // usersalternateEvents: usersalternateEvents,
        // usersprofileTypes: usersprofileTypes,
        // usersifTempExperationDates: usersifTempExperationDates,
        //
        // //NCOES
        // usersssdIs: usersssdIs,
        // usersblcs: usersblcs,
        // usersssdIIs: usersssdIIs,
        // usersalcs: usersalcs,
        // usersssdIIIs: usersssdIIIs,
        // usersslcs: usersslcs,
        // usersssDIVs: usersssDIVs,
        // userssgms: userssgms,
        //
        // usersnotes: usersnotes

      })
    })

  }


  render() {

    return (
      <div className={styles.employee}>
        <section>
          <h1>Employee Information</h1>
          <table>

              <tr>
                <th>Rank</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>MOS</th>
                <th>Phone Number</th>
                <th>Military Email</th>
                <th>Civilian Email</th>
              </tr>


                <td>{this.state.usersRanks}</td>
                <td>{this.state.usersFirstNames}</td>
                <td>{this.state.usersLastNames}</td>
                <td>{this.state.usersMOSs}</td>
                <td>{this.state.usersphoneNumbers}</td>
                <td>{this.state.usersmilitaryEmails}</td>
                <td>{this.state.userscivilianEmails}</td>

          </table>

        <h1>Street Address</h1>

        <table>

            <tr>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Street Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </tr>

              <td>{this.state.usersRanks}</td>
              <td>{this.state.usersFirstNames}</td>
              <td>{this.state.usersLastNames}</td>
              <td>{this.state.usersstreets}</td>
              <td>{this.state.userscitys}</td>
              <td>{this.state.usersstates}</td>
              <td>{this.state.userszips}</td>


        </table>


        </section>
      </div>
    );
  }
}


export default EmployeesPage;
