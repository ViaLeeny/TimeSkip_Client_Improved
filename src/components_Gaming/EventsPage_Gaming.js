import React from 'react'
import TimelineContainer_Gaming from '../components_Gaming/Timeline_Gaming/TimelineContainer_Gaming';
import EventCard_Gaming from './EventCard_Gaming'
import NavBar from '../components/NavBar'


const eventsURL = `${process.env.REACT_APP_API_URL}/events`

class EventsPage_Gaming extends React.Component {
	state = {
        events: [], 
        selectedEvent: []
	}

	componentDidMount() {
		fetch(eventsURL)
		.then((resp) => resp.json())
        .then((data) => this.setState({events: data}))
        
        // if (!this.props.name){
        //     this.props.history.push('./signin')
        // }
	}

	//SORTED GAMING EVENTS
	sortedGamingEvents = () => {
		const eventsArray = [...this.state.events]

		//PASSING ONLY GAMING EVENTS TO SORT FUNCTION BELOW
		const onlyGamingEvents = [...eventsArray].filter(event => event.topic_id === 2)

		//sorts all of the events based on the conditions below
		return onlyGamingEvents.sort((event1, event2)=>{

		//bubble sort algorithm
			const event1date = parseInt(event1.date.slice(0,4),10)
			const event2date = parseInt(event2.date.slice(0,4),10)
			return event1date < event2date ? -1 : 0
		})
    }
    
    //THIS FUNCTION HANDLES THE CLICK ON ANY EVENT ON THE TIMELINE
    showGamingEventCard = (gamingEvent) => {
        this.setState({
            selectedEvent: [gamingEvent]
        })
    }

	render() {
        const {sortedGamingEvents, showGamingEventCard} = this
        const {selectedEvent} = this.state

            return (
            <div>
            <NavBar signOut={this.props.signOut}/>
            <TimelineContainer_Gaming 
                gamingEvents={sortedGamingEvents()} 
                showGamingEventCard={showGamingEventCard}
                selectedEvent = {selectedEvent}
            />
            {selectedEvent.length > 0 ?
				(<EventCard_Gaming selectedEvent={selectedEvent[0]} />) : <h1 class='choose-event'>Select a year to see an event</h1>
			}
		</div>
            )
	}
}

export default EventsPage_Gaming
