import React from 'react'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'
import RoadsideAssistanceHelpCards from '../roadside-assistance/RoadsideAssistanceHelpCards'

var Home = React.createClass({
    getInitialState: function() {
        return {
            okGotItStatus: 'default'  
        };
    },

    okGotItClickHandler: function() {
        if (this.state.okGotItStatus == 'default') {
            this.setState({ okGotItStatus: 'true' });
        }
    },

    memberships: function() {
        if (this.state.imageShown == 'cancel') {
            this.setState({ imageShown: 'draw' });
        } else if (this.state.imageShown == 'draw') {
            this.setState({ imageShown: 'draw-details' });
        }
    },

    showMenu: function() {
      this.refs.menu.show();
    },
    render: function() {
      var displayLogin;
      if ((this.props.location.query.isMember) !== 'true') {
        displayLogin = <LoginButton />
      }
      var isMemberProp = (this.props.location.query.isMember === 'true');
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

                <div className={' ' + (
                                        ((this.props.location.query.isMember == null)
                                        && (this.state.okGotItStatus == 'default')) ? 'show' : 'hide')}>
                  <img src="images/ok-got-it.png" />
                  <div className="wrapper">
                    <button className="btn btn--block" onClick={ this.okGotItClickHandler }>Ok, got it!</button>
                    <div><br /><br /></div>
                  </div>
                </div>

                <div className={' ' + (
                                        ((this.props.location.query.isMember == null)
                                        && (this.state.okGotItStatus == 'default')) ? 'hide' : 'show')}>
                  <img src="images/login-screen-image.png" className="img img--fill" />
                    <div className="sporkPage__header">
                  <div className="sporkPage__header--label">How can we help?</div>
                    </div>


                  <RoadsideAssistanceHelpCards isMember={ (isMemberProp.toString()) } />
                    <div className="background--dusty ">
                    <ul className="hList hList--justify ">
                        <li>
                            <Link to={ {pathname: '/memberships', query: {isMember: isMemberProp}} }>
                              <img src="images/membershipGuestIcons_01.png" />
                        </Link>
                        </li>
                        <li>
                            <Link to={ {pathname: '/discounts', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_02.png" />
                            </Link>
                            </li>
                        <li>
                            <Link to={ {pathname: '/vehicle-health', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_03.png" />
                            </Link>
                        </li>

                    </ul>
                    <ul className="hList hList--justify">
                        <li>
                            <Link to={ {pathname: '/transportation-and-lodging', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_04.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ {pathname: '/parking-reminder', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_05.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ {pathname: '/repair-facilities', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_06.png" />
                            </Link>
                        </li>

                    </ul>

                    </div>

                   {/* <div className="homepage__link--rectangle--container">
                      <div className="flex__item">
                          <Link to={ {pathname: '/memberships', query: {isMember: isMemberProp}} }>



                          </Link>
                      </div>
                      <div className="flex__item">
                          <Link to={ {pathname: '/discounts', query: {isMember: isMemberProp}} }>

                          </Link>
                      </div>
                      <div className="flex__item">
                          <Link to={ {pathname: '/vehicle-health', query: {isMember: isMemberProp}} }>

                          </Link>
                      </div>
                      <div className="flex__item">
                          <Link to={ {pathname: '/transportation-and-lodging', query: {isMember: isMemberProp}} }>
                                <img src="images/membershipGuestIcons_04.png" />
                          </Link>
                      </div>
                      <div className="flex__item">
                        <Link to={ {pathname: '/parking-reminder', query: {isMember: isMemberProp}} }>

                        </Link>
                      </div>
                      <div className="flex__item">
                          <Link to={ {pathname: '/repair-facilities', query: {isMember: isMemberProp}} }>


                          </Link>
                      </div>
                  </div>*/}
                </div>

              </div>
          </div>
      )
    }
})

export default Home 