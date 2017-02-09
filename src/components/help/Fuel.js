import React from 'react'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

var Fuel = React.createClass({
    showMenu: function() {
      this.refs.menu.show();
    },
    render: function() {
      var displayLogin;
      if ((this.props.location.query.isMember) !== 'true') {
        displayLogin = <LoginButton />
      }
      var isMemberProp = (this.props.location.query.isMember == 'true');
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
                <div className="sporkPage__header">
                  <div className="sporkPage__header--label">Fuel</div>
                </div>
                <div className="wrapper">
                  <div class="card__body txt animated ">
                      <div class="card animated fadeIn" id="content">
                          <br />
                          <br />
                          <h3> Welcome to the Fuel page.</h3>
                          <p class="splashPage--text">
                            <br />
                            <br />
                            This page is currently not implemented in the Spork prototype.
                            <br />
                            <br />
                            Please try 
                            the <Link to={ {pathname: '/help-tow', query: {isMember: isMemberProp}} }>tow</Link> page 
                            to experience the app.
                            <br />
                            <br />
                            Or alternatively click <Link to={ {pathname: '/', query: {isMember: isMemberProp}} }>back</Link>.
                          </p>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      )
    }
})                   

export default Fuel 