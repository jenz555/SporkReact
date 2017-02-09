import React from 'react'

class AddMemberIcon extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
    }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected})
    this.props.passState(this.state.isSelected, this.props.reference);
  }
  render() {
    var isSelectedClass = ( this.props.isSelected ? ' membership__member--selected' : '')
    return (
            <div className={'flex__item membership__member' + isSelectedClass} onClick={this.handleClick.bind(this)}>
                <div className="icon icon__container icon--addMember">
                    <img src="images/icon_addMember.png" />
                </div>
                <div className="txt">
                    <span className="txt--brand"></span>
                </div>
            </div>
    )
  }
}

export default AddMemberIcon

