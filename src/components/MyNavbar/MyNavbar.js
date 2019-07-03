import React from 'react';
import { NavLink as RRNavlink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state= {
    isOpen: false,
  }

  toggle() {
    this.setState({ isOPen: !this.state.isOpen });
  }

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const buildNavBar = () => {
        if (authed) {
          return (
            <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink tag={ RRNavlink } to='/home'>Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={ RRNavlink } to='/new' >New Scat</NavLink>
             </NavItem>
             <NavItem>
               <NavLink onClick={this.logMeOut}>Logout</NavLink>
             </NavItem>
           </Nav>
          );
        }
        return <Nav className="ml-auto" navbar />;
      };
      return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">scat surprise</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavBar()}
          </Collapse>
        </Navbar>
      </div>
      );
    }
}

export default MyNavbar;
