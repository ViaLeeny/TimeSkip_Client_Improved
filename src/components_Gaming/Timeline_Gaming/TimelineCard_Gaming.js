import React from 'react'

class TimelineCard_Gaming extends React.Component {

	render() {
		return (
			
		<div>
			<button className="button-s" onClick={this.props.clickFunction }>{this.props.date.slice(0, 4)}</button>
	
		</div>
		)
	}
}

export default TimelineCard_Gaming