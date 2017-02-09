import React from 'react'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

var VehicleHealth = React.createClass({
    showMenu: function() {
      this.refs.menu.show();
    },
    render: function() {
      var isMemberProp = (this.props.location.query.isMember === 'true');
      var displayLogin;
      if ((this.props.location.query.isMember) !== 'true') {
        displayLogin = <LoginButton />
      }
      return (
        <div className="wrapper padding--left--zero">
          <Links isMember={ this.props.location.query.isMember } ref="menu" />
          <div className="sporkPage">
            <div className="topmenu">
              <div className="topmenu__menu">
                <button className="hamburger" onClick={ this.showMenu }>
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <div className="topmenu_label">MENU</div>
              </div>
              <a href="splashPage.html">
                <div className="topmenu__logo">
                  <img src="images/spork-logo.png" />
                </div>
              </a>
              <div className="topmenu__login">
                { displayLogin }
              </div>
            </div>
            <div className="topmenu__spacer">&nbsp;</div>

            <div className={'' + (isMemberProp == true ? 'show' : 'hide')}>
              <div className="sporkPage__header">
                <div className="sporkPage__header--label">My Vehicle(s) Health</div>
              </div>
              <div>
                <img className="p--1" src="images/vehicle-health-vw.png" />
                <ul className="wrapper vList vehiclehealth__list">
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Vehicle History Report<br />
                      <span className="vehiclehealth__list--link--add--text">from CarFax.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Warranty Status<br />
                      <span className="vehiclehealth__list--link--add--text">Valid through November 2018</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Vehicle Specs<br />
                      <span className="vehiclehealth__list--link--add--text">Ideal tire pressure, recommended oil changes...</span>
                    </Link>
                  </li>                  
                  <li>
                    <Link to={ {pathname: '/vehicle-health-recalls', query: {isMember: isMemberProp}} }>
                      Check for Vehicle Recalls<br />
                      <span className="vehiclehealth__list--link--add--text">from Data.gov</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-find-a-mechanic', query: {isMember: isMemberProp}} }>
                      Find a mechanic<br />
                      <span className="vehiclehealth__list--link--add--text">powered by Openbay</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <img className="p--1" src="images/vehicle-health-bmw.png" />
                <ul className="wrapper vList vehiclehealth__list">
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Vehicle History Report<br />
                      <span className="vehiclehealth__list--link--add--text">from CarFax.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Warranty Status<br />
                      <span className="vehiclehealth__list--link--add--text">expired</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-history-report', query: {isMember: isMemberProp}} }>
                      Vehicle Specs<br />
                      <span className="vehiclehealth__list--link--add--text">Ideal tire pressure, recommended oil changes...</span>
                    </Link>
                  </li>                                    
                  <li>
                    <Link to={ {pathname: '/vehicle-health-recalls', query: {isMember: isMemberProp}} }>
                      Check for Vehicle Recalls<br />
                      <span className="vehiclehealth__list--link--add--text">from Data.gov</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ {pathname: '/vehicle-health-find-a-mechanic', query: {isMember: isMemberProp}} }>
                      Find a mechanic<br />
                      <span className="vehiclehealth__list--link--add--text">powered by Openbay</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="images/vehicle-health-dont-see-your-vehicle.png" />
            </div>

            <div className={'' + (isMemberProp != true ? 'show' : 'hide')}>
              <div className="sporkPage__header">
                <div className="sporkPage__header--label">Vehicle(s) Health</div>
              </div>            
              <img src="images/vehicle-health-carfax.png" className="vehicle__health--img" />
              <img src="images/vehicle-health-services.png" className="vehicle__health--img" />
              <Link to={ {pathname: '/vehicle-health-search-results', query: {isMember: isMemberProp}} }>
                <img src="images/vehicle-health-search-by-vin.png" className="vehicle__health--img" />
              </Link>
              <img src="images/vehicle-health-history-warranty.png" className="vehicle__health--img" />
            </div>

          </div>
        </div>
      )
    }
}) 

export default VehicleHealth 