import firebase from 'firebase';
import React, { Component } from 'react';

import styles from './Personal.css';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: '',
      lastName: '',
      firstName: '',
      mos: '',
      gender: '',

      // contact info
      phoneNumber: '',
      militaryEmail: '',
      civilianEmail: '',

      // street address
      street: '',
      city: '',
      state: '',
      zip: '',

      // emergency contact
      emergencyName: '',
      // emergency address
      emergencyStreet: '',
      emergencyCity: '',
      emergencyState: '',
      emergencyZip: '',
      emergencyPhoneNumber: '',
      emergencyEmail: '',
      emergencyRelationship: '',

      //Clearance
      investigationType: '',
      investigationClosed: '',
      experationDate: '',

      //enlistment
      dateOfEnlistment: '',
      ets: '',

      //evaluations
      dateOfLastEvaluation: '',

      // Army Physical Fitness Test(APFT)
      total: '',
      passFail:'',
      pushups: '',
      situps: '',
      run: '',
      alternateRun: '',
      alternateEvent: '',
      profileType: '',
      ifTempExperationDate: '',

      //NCOES
      ssdI: '',
      blc: '',
      ssdII: '',
      alc: '',
      ssdIII: '',
      slc: '',
      ssDIV: '',
      sgm: '',

      notes: ''

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
        rank: this.state.rank,
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        mos: this.state.mos,
        gender: this.state.gender,

        // contact info
        phoneNumber: this.state.phoneNumber,
        militaryEmail: this.state.militaryEmail,
        civilianEmail: this.state.civilianEmail,

        // street address
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,

        // emergency contact
        emergencyName: this.state.emergencyName,
        // emergency address
        emergencyStreet: this.state.emergencyStreet,
        emergencyCity: this.state.emergencyCity,
        emergencyState: this.state.emergencyState,
        emergencyZip: this.state.emergencyZip,
        emergencyPhoneNumber: this.state.emergencyPhoneNumber,
        emergencyEmail: this.state.emergencyEmail,
        emergencyRelationship: this.state.emergencyRelationship,

        //Clearance
        investigationType: this.state.investigationType,
        investigationClosed: this.state.investigationClosed,
        experationDate: this.state.experationDate,

        //enlistment
        dateOfEnlistment: this.state.dateOfEnlistment,
        ets: this.state.ets,

        //evaluations
        dateOfLastEvaluation: this.state.dateOfLastEvaluation,

        // Army Physical Fitness Test(APFT)
        total: this.state.total,
        passFail: this.state.passFail,
        pushups: this.state.pushups,
        situps: this.state.situps,
        run: this.state.run,
        alternateRun: this.state.alternateRun,
        alternateEvent: this.state.alternateEvent,
        profileType: this.state.profileType,
        ifTempExperationDate: this.state.ifTempExperationDate,

        //NCOES
        ssdI: this.state.ssdI,
        blc: this.state.blc,
        ssdII: this.state.ssdII,
        alc: this.state.alc,
        ssdIII: this.state.ssdIII,
        slc: this.state.slc,
        ssDIV: this.state.ssDIV,
        sgm: this.state.sgm,

        notes: this.state.notes
      })

      .then(() => {
        this.setState({
          rank: '',
          lastName: '',
          firstName: '',
          mos:'',
          gender:'',

          // contact info
          phoneNumber:'',
          militaryEmail:'',
          civilianEmail:'',

          // street address
          street:'',
          city:'',
          state:'',
          zip:'',

          // emergency contact
          emergencyName:'',
          // emergency address
          emergencyStreet:'',
          emergencyCity:'',
          emergencyState:'',
          emergencyPhoneNumber:'',
          emergencyEmail:'',
          emergencyRelationship:'',

          //Clearance
          investigationType:'',
          investigationClosed:'',
          experationDate:'',

          //enlistment
          dateOfEnlistment:'',
          ets:'',

          //evaluations
          dateOfLastEvaluation:'',

          // Army Physical Fitness Test(APFT)
          total:'',
          passFail:'',
          pushups:'',
          situps:'',
          run:'',
          alternateRun:'',
          alternateEvent:'',
          profileType:'',
          ifTempExperationDate:'',

          //NCOES
          ssdI:'',
          blc:'',
          ssdII:'',
          alc:'',
          ssdIII:'',
          slc:'',
          ssDIV:'',
          sgm:'',

          notes:''
        });
      });
    }

  render() {
    return (
      <div className={styles.personal}>
        <section>
          <h1>Personal Information</h1>
            <form onSubmit={e => this.handleSubmit(e)}>
              <label htmlFor="rank">Rank:

                <select name="rank" value={this.state.rank} onChange={e => this.handleInput(e)}>
                  <option value="e1">E1</option>
                  <option value="e2">E2</option>
                  <option value="e3">E3</option>
                  <option value="e4">E4</option>
                  <option value="e5">E5</option>
                  <option value="e6">E6</option>
                  <option value="e7">E7</option>
                  <option value="e8">E8</option>
                  <option value="e9">E9</option>

                </select>
              </label>

              <label htmlFor="lastName">Last Name:
              <input name="lastName" value={this.state.lastName} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="firstName">First Name:
              <input name="firstName" value={this.state.firstName} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="mos">MOS:
              <input name="mos" value={this.state.mos} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="gender">Gender
                <select name="gender" value={this.state.gender} onChange={e => this.handleInput(e)}>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </label>

            <h1>Contact Info</h1>
              <label htmlFor="phoneNumber">Phone Number:
              <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="militaryEmail">Military Email:
              <input type="email" name="militaryEmail" value={this.state.militaryEmail} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="civilianEmail">Civilian Email:
              <input type="email" name="civilianEmail" value={this.state.civilianEmail} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Street Address: </h1>
              <label htmlFor="street">Street:
              <input type="street-address" name="street" value={this.state.street} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="city">City:
              <input name="city" value={this.state.city} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="state">State:
              <input name="state" value={this.state.state} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="zip">Zip Code:
              <input type="number" name="zip" value={this.state.zip} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Emergency Contact </h1>
              <label htmlFor="emergencyName"> Name:
              <input name="emergencyName" value={this.state.emergencyName} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyStreet">Street Address:
              <input name="emergencyStreet" value={this.state.emergencyStreet} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyCity">City:
              <input name="emergencyCity" value={this.state.emergencyCity} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyState">State:
              <input name="emergencyState" value={this.state.emergencyState} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyZip">Zip Code:
              <input name="emergencyZip" value={this.state.emergencyZip} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyPhoneNumber">Phone Number:
              <input name="emergencyPhoneNumber" value={this.state.emergencyPhoneNumber} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyEmail">Email Address:
              <input type="email" name="emergencyEmail" value={this.state.emergencyEmail} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="emergencyRelationship">Relationship:
              <input name="emergencyRelationship" value={this.state.emergencyRelationship} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Clearance </h1>
              <label htmlFor="investigationType">Investigation Type:
              <input name="investigationType" value={this.state.investigationType} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="investigationClosed">Investigation Closed:
              <input name="investigationClosed" value={this.state.investigationClosed} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="experationDate">Experation Date:
              <input name="experationDate" value={this.state.experationDate} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Enlistment </h1>
              <label htmlFor="dateOfEnlistment">Date Of Enlistment:
              <input name="dateOfEnlistment" value={this.state.dateOfEnlistment} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="ets">ETS:
              <input name="ets" value={this.state.ets} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Evaluation</h1>
              <label htmlFor="dateOfLastEvaluation">Date Of Last Evaluation:
              <input name="dateOfLastEvaluation" value={this.state.dateOfLastEvaluation} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Army Physical Fitness Test(APFT)</h1>
              <label htmlFor="total">Total:
              <input name="total" value={this.state.total} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="zip">Zip Code:
              <input name="zip" value={this.state.zip} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="passFail">Did you Pass or Fail:
              <input name="passFail" value={this.state.passFail} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="pushups">Pushups Score:
              <input name="pushups" value={this.state.pushups} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="situps">Situps Score:
              <input name="situps" value={this.state.situps} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="run">Run Score:
              <input name="run" value={this.state.run} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="alternateRun">Alternate Run:
              <input name="alternateRun" value={this.state.alternateRun} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="alternateEvent">Alternate Event:
              <input name="alternateEvent" value={this.state.alternateEvent} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="profileType">Profile Type:
              <input name="profileType" value={this.state.profileType} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="ifTempExperationDate">Temp Experation Date:
              <input name="ifTempExperationDate" value={this.state.ifTempExperationDate} onChange={e => this.handleInput(e)} />
              </label>

            <h1>NCOES</h1>
              <label htmlFor="ssdI">SSDI:
              <input name="ssdI" value={this.state.ssdI} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="blc">BLC:
              <input name="blc" value={this.state.blc} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="ssdII">SSDII:
              <input name="ssdII" value={this.state.ssdII} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="alc">ALC:
              <input name="alc" value={this.state.alc} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="ssdIII">SSDIII:
              <input name="ssdIII" value={this.state.ssdIII} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="slc">SLC:
              <input name="slc" value={this.state.slc} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="ssDIV">SSDIV:
              <input name="ssDIV" value={this.state.ssDIV} onChange={e => this.handleInput(e)} />
              </label>

              <label htmlFor="sgm">S:
              <input name="sgm" value={this.state.sgm} onChange={e => this.handleInput(e)} />
              </label>

            <h1>Notes</h1>
              <label htmlFor="notes">Notes:
              <input name="notes" value={this.state.notes} onChange={e => this.handleInput(e)} />
              </label>

              <input type="submit" />
            </form>
        </section>
      </div>
    );
  }
}


export default PersonalPage;
