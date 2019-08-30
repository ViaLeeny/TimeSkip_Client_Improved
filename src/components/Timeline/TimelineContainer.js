import React from 'react'
import TimelineCard from './TimelineCard'

class TimelineContainer extends React.Component {

	render() {
		return (
			<div className="ui segment inverted blue gaming-timeline">
				<h1>Space Timeline</h1>
				<div className="ui five column grid">
				<div className="row bot-army-row">
					{this.props.events.map((event, index) => 
						<TimelineCard key={index} date={event.date} eventObj={event} 
						selectYear={this.props.selectionOfYear}/>)}
				</div>
				</div>
			</div>
		)
	}

}

export default TimelineContainer