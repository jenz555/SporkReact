import React from 'react'
import { Link } from 'react-router'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'
import Carousel from '../carousel/Carousel'
import RoadsideAssistanceHelpCards from './RoadsideAssistanceHelpCards'

var RoadsideAssistance = React.createClass({
    getInitialState: function() {
        return {
            helpVisible: false  
        };
    },
    toggleHelp: function() {
        this.setState({ helpVisible: !this.state.helpVisible });
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
              <img src="images/masthead_MemberWelcome.png" className="img img--fill" />
              <div className="header">Premium Member Benefits</div>
              <Carousel  />


           {/*<div className={ this.state.helpVisible ? 'show' : 'hide' }>*/}
                {/*<div className="header header--help">*/}
                    {/*How can we help?*/}
                    {/*<div className="hamburger hamburger--header hamburger--squeeze is-active" onClick={ this.toggleHelp }>*/}
                        {/*<div className="hamburger-box">*/}
                            {/*<div className="hamburger-inner">*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<RoadsideAssistanceHelpCards isMember={ this.props.location.query.isMember } />*/}

            {/*</div>*/}

            <div className='show'>
                <div className={'map__container map__container--roadside'}>
                <img src="images/googleMapRadar.png" />
                    <Link to={ {pathname: '/roadside-assistance-location', query: {isMember: isMemberProp}} }>
                    <div className="btn btn--primary map--button" >Use Benefits & Get Help Now</div>
                    </Link>
                </div>
            </div>
        
          </div>
        </div>
      )
    }
})


export default RoadsideAssistance
