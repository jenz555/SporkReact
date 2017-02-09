import React from 'react'
import classnames from 'classnames'

class MemberIcon extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isSelected: (this.props.isSelected === true ? true : false)
    }
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected})
    this.props.passState(this.state.isSelected, this.props.reference);
  }
  
  render() {
    var isSelectedClass = ( this.props.isSelected ? ' membership__member--selected' : '')
    return (
        <div className={ 'flex__item membership__member' + isSelectedClass} onClick={this.handleClick.bind(this)}>
            <div className="icon icon__container icon--member">
                <img src="images/icon_member.png" />
            </div>
            <div className="txt">
                <span className="txt--brand">{ this.props.memberName }</span>
            </div>
        </div>
    )
  }
}

export default MemberIcon
