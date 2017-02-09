import React from 'react'
import Links from '../nav/Links'
import LoginButton from '../nav/LoginButton'
import MemberIcon from './MemberIcon'
import AddMemberIcon from './AddMemberIcon'

class Memberships extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
                        reference: 'member1', 
                        member1Selected: true, member2Selected: false, member3Selected: false,
                        member4Selected: false, member5Selected: false
                    };
        this.handleState = this.handleState.bind(this);
        this.showMenu = this.showMenu.bind(this)
    }
    handleState (isSelectedPassed, referencePassed) {
        if(referencePassed == "member1") {
            this.setState({
                reference: referencePassed,
                member1Selected: true,
                member2Selected: false, 
                member3Selected: false,
                member4Selected: false, 
                member5Selected: false
            });
        }
        if(referencePassed == "member2") {
            this.setState({
                reference: referencePassed,
                member1Selected: false,
                member2Selected: true, 
                member3Selected: false,
                member4Selected: false, 
                member5Selected: false
            });
        }
        if(referencePassed == "member3") {
            this.setState({
                reference: referencePassed,
                member1Selected: false,
                member2Selected: false, 
                member3Selected: true,
                member4Selected: false, 
                member5Selected: false
            });
        }
        if(referencePassed == "member4") {
            this.setState({
                reference: referencePassed
            });
        }
        if(referencePassed == "member5") {
            this.setState({
                reference: referencePassed
            });
        }
    }

    showMenu() {
      this.refs.menu.show();
    }
    render() {
      var displayLogin;
      var isSelected
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

                <div className={'' + (isMemberProp != true ? 'show' : 'hide')}>
                    <div className="header mb--0">Membership Plans</div>
                    <div className="background--dusty">
                    <img src="images/membership-guest-premium-membership.png" />
                    <img src="images/membership-guest-essential-membership.png" />
                    <img src="images/membership-guest-basic-membership.png" />
                    <img src="images/membership-guest-pay-per-use.png" />
                    </div>
                </div>



                <div className={'' + (isMemberProp == true ? 'show' : 'hide')}>
                    <div className="header">My Membership</div>
                    <div className="flex__container membership__iconslist">
                        <div className="flex__item membership__member">
                            <div className="circle circle--lg circle--green">
                                <div className="circle__number--lg">
                                    3
                                </div>
                            </div>
                            <div className="txt">Members<br/>
                                Remaining</div>
                        </div>

                        <MemberIcon    reference="member1" passState={this.handleState} isSelected={this.state.member1Selected} memberName="Elizabeth" />
                        <MemberIcon    reference="member2" passState={this.handleState} isSelected={this.state.member2Selected} memberName="Charlie" />
                        <AddMemberIcon reference="member3" passState={this.handleState} isSelected={this.state.member3Selected} />
                        <AddMemberIcon reference="member4" passState={this.handleState} isSelected={this.state.member4Selected} />
                        <AddMemberIcon reference="member5" passState={this.handleState} isSelected={this.state.member5Selected} />
                    
                    </div>

                    <div className="member__details__container">
                        <div id="member__one--details" className={ 'member__details' + (this.state.member1Selected ? '' :  ' member--details--hidden')}>
                            <ul className="wrapper vList membership__memberlist">
                            <li>Elizabeth Richardson <span>Edit</span></li>
                            <li>Membership ID: <span>0000687</span></li>
                            <li>Member Since: <span>12/23/15</span></li>
                            <li>Phone: <span>815-456-7890</span></li>
                            <li>Address: <span>345 Smith Road, Streamwood, IL 60013</span></li>
                            </ul>
                        </div>
                        <div id="member__two--details"  className={ 'member__details' + (this.state.member2Selected ? '' :  ' member--details--hidden')}>
                            <ul className="wrapper vList membership__memberlist">
                            <li>Charles Richardson <span>Edit</span></li>
                            <li>Membership ID: <span>0000688</span></li>
                            <li>Member Since: <span>12/23/15</span></li>
                            <li>Phone: <span>815-456-7890</span></li>
                            <li>Address: <span>345 Smith Road, Streamwood, IL 60013</span></li>
                            </ul>
                        </div>
                        <div id="member__new--details"  className={ 'member__details' + (this.state.member3Selected ? '' :  ' member--details--hidden')}>
                            <ul className="wrapper vList membership__memberlist">
                            <li>Name... <span>Edit</span></li>
                            <li>Membership ID: <span></span></li>
                            <li>Member Since: <span></span></li>
                            <li>Phone: <span></span></li>
                            <li>Address: <span></span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="header">Your Profile and Settings</div>
                        <div>
                            <ul className="wrapper vList membershipSettings__list">
                            <li>Notification Settings</li>
                            <li>Paperless Settings</li>
                            <li>Payment Methods</li>
                            </ul>
                        </div>
                    </div>
                </div>


                    
          </div>
      )
    }
}                            

export default Memberships 