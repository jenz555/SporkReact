import React from 'react'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

var TransportationAndLodging = React.createClass({
    showMenu: function() {
      this.refs.menu.show();
    },
    render: function() {
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
            <div className="header mb--0">Transportation And Lodging</div>
            <table className="background--dusty">
              <tr>
                <td><img src="images/transportation-and-lodging-lyft.png" /></td>
              </tr>
            <tr> <td><img src="images/transportation-and-lodging-hilton.png" /></td>
             </tr>
              <tr> <td><img src="images/transportation-and-lodging-enterprise.png" /></td></tr>
            </table>


          </div>
        </div>
      )
    }
})                    

export default TransportationAndLodging