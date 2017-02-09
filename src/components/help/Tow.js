import React from 'react'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'

var Tow = React.createClass({
    getInitialState: function() {
        return {
            imageShown: 'default',
            checkBoxCheckedStatus: false,
            drawCheckBoxCheckedStatus: false
        };
    },
    takingClickHandler: function() {
      if (this.state.imageShown == 'default') {
        this.setState({ imageShown: 'taking' });
      } else {
        this.setState({ imageShown: 'default' });
      }
    },
    drawClickHandler: function() {
      if (this.state.imageShown == 'cancel') {
        this.setState({ imageShown: 'draw' });
      } else if (this.state.imageShown == 'draw') {
        this.setState({ imageShown: 'draw-details' });
      }
    },
    drawCancelClickHandler: function() {
      if (this.state.imageShown == 'taking') {
        this.setState({ imageShown: 'cancel' });
      } else {
        this.setState({ imageShown: 'taking' });
      }
    },
    confirmLocationClickHandler: function() {
      this.setState({ imageShown: 'taking' });
    },
    nearbyClickHandler: function() {
      this.setState({ imageShown: 'nearby' });
    },
    selectClickHandler: function() {
      this.setState({ imageShown: 'nearby-selected' });
    },
    continueClickHandler: function() {
      if (this.props.location.query.isMember == 'true') {
        this.setState({ imageShown: 'summary-member' });
      } else {
        this.setState({ imageShown: 'contact-information' });
      }
    },
    toggleFirstCheckbox: function() {
      this.setState({ checkBoxCheckedStatus: !this.state.checkBoxCheckedStatus })
    },
    toggleDrawFirstCheckbox: function() {
      this.setState({ drawCheckBoxCheckedStatus: !this.state.drawCheckBoxCheckedStatus })      
    },
    givePermissionClickHandler: function() {
      this.setState({ imageShown: 'locate-permission-granted' })
    },
    summaryMemberClickHandler: function() {
      this.setState({ imageShown: 'summary-member' });
    },
    summaryGuestClickHandler: function() {
      this.setState({ imageShown: 'summary-guest' });
    },
    useMembershipClickHandler: function() {
      this.setState({ imageShown: 'provider-en-route' });
      window.scrollTo(0, 0)
    },
    requestServiceClickHandler: function() {
      this.setState({ imageShown: 'provider-en-route' });
      window.scrollTo(0, 0)
    },
    providerEnRouteClickHandler: function() {
      this.setState({ imageShown: 'provider-on-site' });
      window.scrollTo(0, 0)
    },
    providerOnSiteClickHandler: function() {
      this.setState({ imageShown: 'service-delivered' });
      window.scrollTo(0, 0)
    },
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

                <div className={ (
                                  (this.state.imageShown != 'default') 
                                  && (this.state.imageShown != 'locate-permission-granted')
                                  && (this.state.imageShown != 'contact-information')
                                  && (this.state.imageShown != 'summary-member')
                                  && (this.state.imageShown != 'summary-guest')
                                  && (this.state.imageShown != 'provider-en-route')
                                  && (this.state.imageShown != 'provider-on-site')
                                  && (this.state.imageShown != 'service-delivered')) ? 'show' : 'hide' }>
                  <div className="header mb--0">Where are we taking your vehicle?</div>
                </div>
                <div className={ this.state.imageShown == 'default' ? 'show' : 'hide' }>
                  <div className="header--gray">How can we help?</div>
                  <div className="header--tow">
                    <div className="icon icon__container icon--tow">
                      <img src="images/icon_tow.png" />
                    </div>
                    <span className="txt txt--xs">
                      Tow
                    </span>
                  </div>
                  <div className="header mb--0">Where are you currently located?</div>
                </div>
                <div className={'tow__image--container ' + (this.state.imageShown != 'contact-information' ? 'show' : 'hide')}>
                  
                  
                  <div className={ this.props.location.query.isMember == 'true' ? 'show' : 'hide'}>
                    <img src="images/help/where-are-we-taking-confirm-location.png" className={ this.state.imageShown == 'default' ? 'tow__image--show' : 'tow__image--hidden' } />
                  </div>
                  <div className={ this.props.location.query.isMember == 'false' ? 'show' : 'hide'}>
                    <div onClick={ this.givePermissionClickHandler } className='location-container'>
                      <img src="images/help/where-are-you-located.png" 
                          className={ this.state.imageShown == 'default' ? 'tow__image--show' : 'tow__image--hidden' }
                            />
                    </div>
                    <div onClick={ this.confirmLocationClickHandler } className='location-container'>
                      <img src="images/help/where-are-we-taking-confirm-location.png" 
                      className={ this.state.imageShown == 'locate-permission-granted' ? 'tow__image--show' : 'tow__image--hidden' } />
                    </div>
                  </div>
                  
                  
                  <img src="images/help/where-are-we-taking-your-vehicle.png" className={ this.state.imageShown == 'taking' ? 'tow__image--show' : 'tow__image--hidden' } />
                  <img src="images/help/where-are-we-taking-your-vehicle-cancel.png"  className={ this.state.imageShown == 'cancel' ? 'tow__image--show' : 'tow__image--hidden' }/>
                  <img src="images/help/where-are-we-taking-your-vehicle-draw.png"  className={ this.state.imageShown == 'draw' ? 'tow__image--show' : 'tow__image--hidden' }/>


                  <div className={'draw--container ' + (this.state.imageShown == 'draw-details' ? 'show' : 'hide')}>
                    <img src="images/help/where-are-we-taking-your-vehicle-draw-details.png"  
                    className={ 'nearby--image ' + (this.state.imageShown == 'draw-details' ? 'tow__image--show' : 'tow__image--hidden') }/>
                      <div className="nearby--anderson">
                        <div className="nearby--checkbox">
                            <label className="option nearby--checkbox" htmlFor="option1">
                              <input className="option__input" type="checkbox" checked={ this.state.drawCheckBoxCheckedStatus } value="" name="draw-option1" id="draw-option1" />
                              <span className="option__icon"></span>
                            </label>
                        </div>
                        <div className="nearby--image-container">
                            <img className="nearby--image" src="images/help/where-are-we-taking-your-vehicle-nearby-selected-anderson.png" />
                        </div>
                      </div>
                      <div className="wrapper draw-details-button">
                        <button className="btn btn--block" onClick={ this.continueClickHandler }>
                            Continue
                        </button>
                      </div>
                  </div>
                  
                  
                  <img src="images/help/where-are-we-taking-your-vehicle-nearby.png"  className={ this.state.imageShown == 'nearby' ? 'tow__image--show' : 'tow__image--hidden' }/>
                  
                  <div className={'tow__image--taking ' + (this.state.imageShown == 'default' ? 'tow__image--show' : 'tow__image--hidden')} onClick={ this.takingClickHandler }></div>
                  <div className="tow__image--drawcancel" onClick={ this.drawCancelClickHandler }></div>
                  <div className="tow__image--nearby" onClick={ this.nearbyClickHandler }></div>
                  <div className="tow__image--draw" onClick={ this.drawClickHandler }></div>

                  <div className={ this.props.location.query.isMember == 'false' ? 'show' : 'hide'}>
                    <div className={ 'find-me-fast ' + (this.state.imageShown == 'default' ? 'show' : 'hide') } 
                        onClick={ this.givePermissionClickHandler }>
                        </div>
                  </div>

                  <div className={'green-pin ' + (this.state.imageShown == 'nearby-selected' ? 'show' : 'hide') }
                        onClick={ this.toggleFirstCheckbox }>
                  </div>

                  <div className={'draw-green-pin ' + (this.state.imageShown == 'draw-details' ? 'show' : 'hide') }
                        onClick={ this.toggleDrawFirstCheckbox }>
                  </div>


                  <div className={'tow__image--select ' + (this.state.imageShown == 'nearby' ? 'tow__image--show' : 'tow__image--hidden')} onClick={ this.selectClickHandler }></div>
                    <div className={'nearby--container ' + (this.state.imageShown == 'nearby-selected' ? 'show' : 'hide') }>
                      <img src="images/help/where-are-we-taking-your-vehicle-nearby-selected.png" 
                      className={'nearby--image ' + (this.state.imageShown == 'nearby-selected' ? 'show' : 'hidden' )}/>                   
                      <div className="nearby-scrolling-checkboxes">
                        <div className="nearby--anderson">
                          <div className="nearby--checkbox">
                              <label className="option nearby--checkbox" htmlFor="option1">
                                <input className="option__input" type="checkbox" checked={ this.state.checkBoxCheckedStatus } value="" name="option1" id="option1" />
                                <span className="option__icon"></span>
                              </label>
                          </div>
                          <div className="nearby--image-container">
                              <img className="nearby--image" src="images/help/where-are-we-taking-your-vehicle-nearby-selected-anderson.png" />
                          </div>
                        </div>
                        <div className="nearby--bmw">
                          <div className="nearby--checkbox">
                              <label className="option nearby--checkbox" htmlFor="option2">
                                <input className="option__input" type="checkbox" value="" name="option2" id="option2" />
                                <span className="option__icon"></span>
                              </label>
                              </div>
                          <div className="nearby--image-container">
                              <img className="nearby--image" src="images/help/where-are-we-taking-your-vehicle-nearby-selected-bmw.png" />
                          </div>
                        </div>
                        <div className="nearby--rex">
                          <div className="nearby--checkbox">
                              <label className="option nearby--checkbox" htmlFor="option3">
                                <input className="option__input" type="checkbox" value="" name="option3" id="option3" />
                                <span className="option__icon"></span>
                              </label>
                              </div>
                          <div className="nearby--image-container">
                              <img className="nearby--image" src="images/help/where-are-we-taking-your-vehicle-nearby-selected-rex.png" />
                          </div>
                        </div>
                      </div>
                      <div className={'wrapper tow__image--continue--container ' + (this.state.imageShown == 'nearby-selected' ? 'tow__image--show' : 'tow__image--hidden')}>
                        <button className="btn btn--block" onClick={ this.continueClickHandler }>
                            Continue
                        </button>
                      </div>
                  </div>
                </div>


                <div className={'tow_contact-information--container ' + (this.state.imageShown == 'contact-information' ? 'slide--show' : 'slide--hide')}>
                  <div className="header">Contact Information</div>
                  <div className="wrapper login__wrapper">
                      <ul className="vList">
                        <li>
                          <div className="txt txt--sm txt--green txt--strikethrough">
                              <span>
                                Members login to apply benefits
                              </span>
                            </div>                      
                        </li>
                        <li>
                          <label htmlFor="username" className="label login__label">Username</label>
                          <input type="text" id="username" name="username" className="input input--txt" />                      
                        </li>
                        <li>
                          <label htmlFor="password" className="label login__label">Password</label>
                          <input type="password" id="password" name="password" className="input input--txt" />                      
                        </li>
                        <li>
                          <button className="btn btn--block" onClick={ this.summaryMemberClickHandler }>
                            Login
                          </button>
                        </li>
                        <li>
                            <span></span>                     
                        </li>                        
                        <li>
                          <div className="txt txt--sm txt--green txt--strikethrough">
                              <span>
                                Or continue as guest
                              </span>
                            </div>                      
                        </li>
                        <li>
                          <label htmlFor="username" className="label login__label">Name</label>
                          <input type="text" id="username" name="username" className="input input--txt" />                      
                        </li>
                        <li>
                          <label htmlFor="username" className="label login__label">Phone</label>
                          <input type="text" id="username" name="username" className="input input--txt" />
                          <span className="txt txt--xs txt--green">In case the driver needs to reach you</span>                  
                        </li>
                        <li>
                          <label htmlFor="email" className="label login__label">Email</label>
                          <input type="text" id="email" name="email" className="input input--txt" />
                          <span className="txt txt--xs txt--green">So we can send you a receipt</span>                 
                        </li>
                        <li>
                          <label className="option" htmlFor="option">
                              <input className="option__input" type="checkbox" value="" name="option" id="option" />
                              <span className="option__icon"></span>
                              <span className="option__text txt txt--xs">Send me SMS text messages with updates on my requested service (for this transaction only, please)</span>
                          </label>
                        </li>
                        <li>
                          <span></span>                    
                        </li>
                      </ul>
                  </div>
                  <div className="header">Vehicle Information</div>
                  <div className="wrapper login__wrapper">
                      <ul className="vList">
                        <li>
                          <label htmlFor="year" className="label">Year</label>
                          <div className="select">
                              <select className="select__menu">
                                  <option defaultValue>Select</option>
                                  <option>2016</option>
                                  <option>2015</option>
                              </select>
                              <div className="select__icon"></div>
                          </div>
                        </li>
                        <li>
                          <label htmlFor="make" className="label">Make</label>
                          <div className="select">
                              <select className="select__menu">
                                  <option defaultValue>Select</option>
                                  <option>Ford</option>
                                  <option>Licoln</option>
                              </select>
                              <div className="select__icon"></div>
                          </div>
                        </li>
                        <li>
                          <label htmlFor="model" className="label">Model</label>
                          <div className="select">
                              <select className="select__menu">
                                  <option defaultValue>Select</option>
                                  <option>Continental</option>
                                  <option>Navigator</option>
                              </select>
                              <div className="select__icon"></div>
                          </div>
                        </li>
                        <li>
                          <label htmlFor="color" className="label">Color</label>
                          <div className="select">
                              <select className="select__menu">
                                  <option defaultValue>Select</option>
                                  <option>Black</option>
                                  <option>Silver</option>
                              </select>
                              <div className="select__icon"></div>
                          </div>
                        </li>
                        <li>
                          <span className="txt txt--xs txt--green">This allows us to find you quicker</span>
                        </li>
                        <li>
                          <button className="btn btn--block" onClick={ this.summaryGuestClickHandler }>
                            Continue
                          </button>
                        </li>   
                        <li>
                          <span>
                          </span>
                        </li>                                       
                      </ul>
                  </div>                
                </div>

                <div className={'tow_contact--summary--member ' + (this.state.imageShown == 'summary-member' ? 'slide--show' : 'slide--hide')}>
                  <img src="images/help/summary-member-logged-in.png" />
                  <img src="images/help/summary-member-logged-in-vehicles.png" />
                  <div className="wrapper login__wrapper">
                      <ul className="vList">
                        <li>
                          <button className="btn btn--block" onClick={ this.useMembershipClickHandler }>
                            Use Membership
                          </button>                        
                        </li>
                        <li>
                          <div></div>
                        </li>
                      </ul>
                  </div>
                </div>

                <div className={'tow_contact--summary--guest ' + (this.state.imageShown == 'summary-guest' ? 'slide--show' : 'slide--hide')}>
                  <img src="images/help/summary-guest-estimated-total.png" />
                  <img src="images/help/summary-guest-payment-method.png" />
                  <div className="wrapper login__wrapper">
                      <ul className="vList">
                        <li>
                          <button className="btn btn--block" onClick={ this.requestServiceClickHandler }>
                            Request Service
                          </button>                        
                        </li>
                        <li>
                          <div></div>
                        </li>
                      </ul>
                  </div>
                </div>

                <div className={'background--dusty tow_contact--provider-en-route ' + (this.state.imageShown == 'provider-en-route' ? 'slide--show' : 'hide')}>
                  <img src="images/help/provider-en-route-header-image.png" onClick={ this.providerEnRouteClickHandler } />
                  <img src="images/help/provider-en-route-driver.png" />
                  <img src="images/help/provider-en-route-map.png" />
                  <img src="images/help/provider-en-route-service-summary.png" />
                  <img src="images/transportation-and-lodging-lyft.png" />
                  <img src="images/transportation-and-lodging-enterprise.png" />
                  <img src="images/transportation-and-lodging-hilton.png" />
                  <img src="images/help/provider-en-route-additional-services.png" />             
                </div>

                <div className={'tow_contact--provider-on-site ' + (this.state.imageShown == 'provider-on-site' ? 'show' : 'hide')}>
                  <img src="images/help/provider-on-site-header-image.png" onClick={ this.providerOnSiteClickHandler } />
                  <img src="images/help/provider-on-site-driver.png" />
                  <img src="images/help/provider-on-site-map.png" />
                  <img src="images/help/provider-on-site-service-summary.png" />
                  <img src="images/help/provider-en-route-additional-services.png" />             
                </div>

                <div className={'tow_contact--service-delivered ' + (this.state.imageShown == 'service-delivered' ? 'show' : 'hide')}>
                  <img src="images/help/service-delivered-header-image.png" />
                  <img src="images/help/service-delivered-driver.png" />
                  <img src="images/help/service-delivered-vehicle-location.png" />
                  <img src="images/help/provider-on-site-service-summary.png" />
                  <img src="images/help/provider-en-route-additional-services.png" />             
                </div>

              </div>
          </div>
      )
    }
})                   

export default Tow 