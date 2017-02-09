import React from 'react'
import { Link } from 'react-router'

var Links = React.createClass({

getInitialState: function() {
      return {
          visible: false,
          loaded: false
      };
  },
  show: function() {
      
      this.setState({ visible: true });
      document.addEventListener("click", this.hide.bind(this));
      this.setState({ loaded: true });
  },
  hide: function() {
      
      document.removeEventListener("click", this.hide.bind(this));
      this.setState({ visible: false });
      this.setState({ loaded: true });
  },
  render: function() {
    var isMemberProp = (this.props.isMember === 'true');

    if (isMemberProp) {
          return (
              <div className={
                (
                  (this.state.loaded) ? 
                  (this.state.visible ? "slide-in " : "slide-out ")
                  : 
                  ' '
                )
                 + 'slidemenu'
              }>
                <div className="slidemenu__close">
                  <div className="hamburger hamburger--squeeze is-active">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
                <div className="slidemenu__image">
                  <img src="images/member-menu-image.png" />
                  <Link to={ {pathname: '/', query: {isMember: false}} }>
                  <div className="slidemenu__logInLogOut"></div>
                  </Link>
                </div>
                <div className="slidemenu__menu">
                  <ul className="wrapper vList slidemenu__list">
                      <li><Link to={ {pathname: '/roadside-assistance', query: {isMember: isMemberProp}} }>Use Roadside Assistance</Link></li>
                      <li><Link to={ {pathname: '/memberships', query: {isMember: isMemberProp}} }>My Memberships</Link></li>
                      <li><Link to={ {pathname: '/discounts', query: {isMember: isMemberProp}} }>My Discounts</Link></li>
                      <li><Link to={ {pathname: '/vehicle-health', query: {isMember: isMemberProp}} }>My Vehicle(s) Health</Link></li>
                      <li><Link to={ {pathname: '/transportation-and-lodging', query: {isMember: isMemberProp}} }>Transportation &amp; Lodging</Link></li>                   
                      <li><Link to={ {pathname: '/parking-reminder', query: {isMember: isMemberProp}} }>Parking Reminder</Link></li>
                      <li><Link to={ {pathname: '/repair-facilities', query: {isMember: isMemberProp}} }>Repair Facilities</Link></li>
                      <li><span>Concierge Support 800-123-4567</span></li>
                      <li><span></span></li>
                  </ul>
                </div>
              </div>
          )
    } else {
          return (
            <div className={
                (
                  (this.state.loaded) ? 
                  (this.state.visible ? "slide-in " : "slide-out ")
                  : 
                  ' '
                )
                 + 'slidemenu'
              }>
                <div className="slidemenu__close">
                  <div className="hamburger hamburger--squeeze is-active">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
                <div className="slidemenu__image">
                  <img src="images/guest-menu-image.png" />
                  <Link to={ {pathname: 'login', query: {isMember: isMemberProp}} }>
                    <div className="slidemenu__logInLogOut"></div>
                  </Link>
                </div>
                <div className="slidemenu__menu">
                  <ul className="wrapper vList slidemenu__list">
                      <li><Link to={ {pathname: '/', query: {isMember: isMemberProp}} }>Get Roadside Assistance</Link></li>
                      <li><Link to={ {pathname: '/memberships', query: {isMember: isMemberProp}} }>Memberships</Link></li>
                      <li><Link to={ {pathname: '/discounts', query: {isMember: isMemberProp}} }>Discounts</Link></li>
                      <li><Link to={ {pathname: '/vehicle-health', query: {isMember: isMemberProp}} }>Vehicle Health</Link></li>
                      <li><Link to={ {pathname: '/transportation-and-lodging', query: {isMember: isMemberProp}} }>Transportation &amp; Lodging</Link></li>
                      <li><Link to={ {pathname: '/parking-reminder', query: {isMember: isMemberProp}} }>Parking Reminder</Link></li>
                      <li><Link to={ {pathname: '/repair-facilities', query: {isMember: isMemberProp}} }>Repair Facilities</Link></li>
                      <li><span>Concierge Support 800-123-4567</span></li>
                      <li><span></span></li>            
                  </ul>
                </div>
              </div>
          )
    }

  }
})

Links.propTypes = {
  isMember: React.PropTypes.string
}

export default Links