import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

class Login extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        isShowingModal: false
      }
      this.showMenu = this.showMenu.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }
    handleClick() {
      this.setState({isShowingModal: true})
    }
    handleClose() {
      this.setState({isShowingModal: false})
    }
    showMenu() {
      this.refs.menu.show();
    }
    componentDidMount() {
      this.handleClick()
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
                        <label htmlFor="username" className="label login__label">Username</label>
                        <input type="text" id="username" name="username" className="input input--txt" />                      
                      </li>
                      <li>
                        <label htmlFor="password" className="label login__label">Password</label>
                        <input type="password" id="password" name="password" className="input input--txt" />                      
                      </li>
                      <li>
                        <label onClick={this.handleClick}  htmlFor="login" className="label login__label--touch">Login with Touch ID</label>                      
                      </li>
                      <li>
                        <Link to={ {pathname: '/roadside-assistance', query: {isMember: true }} } className="btn btn--block">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={ {pathname: '/', query: {isMember: false}} } className="btn btn--block btn--dismiss">
                          Continue as Guest
                        </Link>
                      </li>
                    </ul>
                  </form>
                </div>
                
                <div onClick={this.handleClick}>
                      {
                        this.state.isShowingModal &&
                        <ModalContainer onClose={this.handleClose}>
                          <ModalDialog onClose={this.handleClose}>
                            <div className="touchid__modal">
                              <div className="fingerprint">
                                <Link to={ {pathname: '/roadside-assistance', query: {isMember: true}} }>
                                  <img src="images/fingerprint.png" />
                                </Link>
                              </div>
                              <h1 className="touchid__header">Touch ID for SPORK</h1>
                              <h2 className="touchid__label">Login with Online ID eliz8*****</h2>
                              <div>
                                <br />
                                <span onClick={this.handleClose} className="touchid__button">Cancel</span> 
                              </div>
                            </div>
                          </ModalDialog>
                        </ModalContainer>
                      }
                </div>

              </div>
            </div>
      )
    }
}                    

export default Login
