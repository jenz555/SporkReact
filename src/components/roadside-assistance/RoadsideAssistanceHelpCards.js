import React from 'react'
import { Link } from 'react-router'

class RoadsideAssistanceHelpCards extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var isMemberProp = this.props.isMember;
    return (
      <div className="flex__container flex__container--dropshadow mb--0">
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-fuel', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                      <div className="icon icon__container icon--fuel">
                          <img src="images/icon_fuel.png" />
                      </div>
                      <div className="txt txt--xs">
                          <span className="txt txt--sf">Fuel</span>
                      </div>
                  </div>
              </Link>
          </div>
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-tow', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                          <div className="icon icon__container icon--tow icon--tow--image">

                          </div>
                          <div className="txt txt--xs">
                              <span className="txt txt--sf">Tow</span>
                          </div>
                  </div>
              </Link>
          </div>
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-lockout', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                      <div className="icon icon__container icon--lockOut">
                          <img src="images/icon_lockOut.png" />
                      </div>
                      <div className="txt txt--xs">
                          <span className="txt txt--sf">Lock<br />Out</span>
                      </div>
                  </div>
              </Link>
          </div>
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-tirechange', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                      <div className="icon icon__container icon--flatTire">
                          <img src="images/icon_flatTire.png" />
                      </div>
                      <div className="txt txt--xs">
                          <span className="txt txt--sf">Tire<br />Change</span>
                          <br /><br />
                      </div>
                  </div>
              </Link>
          </div>
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-jumpstart', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                      <div className="icon icon__container icon--jumpStart">
                          <img src="images/icon_jumpStart.png" />
                      </div>
                      <div className="txt txt--xs">
                          <span className="txt txt--sf">Jump<br />Start</span>
                      </div>
                  </div>
              </Link>
          </div>
          <div className="flex__item homepage__link--card">
              <Link to={ {pathname: '/help-notsure', query: {isMember: isMemberProp}} }>
                  <div className="homepage__link--card--inner">
                      <div className="icon icon__container icon--notSure">
                          <img src="images/icon_notSure.png" />
                      </div>
                      <div className="txt txt--xs">
                          <span className="txt txt--sf">Not<br />Sure</span>
                      </div>
                  </div>
              </Link>
          </div>
      </div>
    )
  }
}

export default RoadsideAssistanceHelpCards
