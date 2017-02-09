import React from 'react'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'
import { Link } from 'react-router'


var DiscountOffer = React.createClass({
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

                    {/*<Link to={ {pathname: '/discounts', query: {isMember: this.props.location.query.isMember}} }>*/}
                        {/*<div className="backToDiscounts txt--sm pt--05 pb--05 ">Back to My Discounts</div>*/}
                    {/*</Link>*/}

                    <Link to={ {pathname: '/discounts', query: {isMember: this.props.location.query.isMember}} }>
                    <ul className="hList hList--middle p--05">
                        <li> <img src="images/arrow.svg" className="icon icon--arrow" /></li>
                        <li className="txt txt--brand--alt txt--sm ml--0">Back to my discounts</li>

                    </ul>
                    </Link>

                    <div className="sporkPage__header mb--05">


                        <div className="sporkPage__header--label ">Under Armour</div>
                    </div>
                    <div className="txt--centered">
                            <img src="images/myDiscountsCouponCode.png" width="95%"  />

                    </div>

                </div>
            </div>
        )
    }
})

export default DiscountOffer