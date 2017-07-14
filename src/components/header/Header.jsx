import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Personal Information',
          url: 'Personal'
        },
        {
          text: 'Formation Chart',
          url: 'Formation'
        },
        {
          text: 'Attendance',
          url: 'Attendance'
        },
        {
          text:'Employee Info',
          url:'Employee'
        }
      ]
    };
  }
  toggleMenu(open) {
    this.setState({
      menuIsOpen: open !== undefined ? open : !this.state.menuIsOpen
    });
  }
  render() {
    return (
      <div className={styles.header}>
        <section>
          <div className={styles.logo}>
          <img src="./images/logo.svg" alt="logo" />
          <ul>
            {this.state.menuItems.map((menuItem) => {
              return (
                <li>
                  <Link to={menuItem.url}>
                    {menuItem.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>
        </section>
      </div>
    );
  }
}


export default Header;
