import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

class Logout extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        isShowingModal: false
      }
      this.showMenu = this.showMenu.bind(this)
    }
    showMenu() {
      this.refs.menu.show();
    }
    render() {
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
                <div>
                  <img src="images/login-screen-image.png" />
                </div>
                <div className="wrapper login__wrapper">
                  <form id="form1" name="form1" action="" method="">
                    <ul className="vList">
                      <li>
                          <div className="vr"><br /></div>                   
                      </li>
                      <li>
                        <Link to={ {pathname: '/', query: {isMember: false}} } className="btn btn--block">
                          Logout
                        </Link>
                      </li>
                      <li>
                        <Link to={ {pathname: '/roadside-assistance', query: {isMember: true}} } className="btn btn--block btn--dismiss">
                          Cancel
                        </Link>
                      </li>
                    </ul>
                  </form>
                </div>
                
              </div>
            </div>
      )
    }
}                    

export default Logout
