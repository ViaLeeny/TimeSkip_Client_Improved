import React from 'react'
import TimelineCard_Gaming from './TimelineCard_Gaming'

class TimelineContainer_Gaming extends React.Component {
	
	render() {
		return (
			<div className="ui segment inverted blue gaming-timeline">

				<h1>Gaming Timeline</h1>
				<div className="ui five column grid">
				<div className="row bot-army-row">
					{this.props.gamingEvents.map((gamingEvent, index) =>  
						<TimelineCard_Gaming key={index} date={gamingEvent.date} 
							clickFunction={() => this.props.showGamingEventCard(gamingEvent)} 
						/>)}
				</div>
				</div>
			</div>
		)
		}
	}


export default TimelineContainer_Gaming