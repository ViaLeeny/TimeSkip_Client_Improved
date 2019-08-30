import React from 'react'
import TimelineContainer from './Timeline/TimelineContainer.js'
import EventCard from './EventCard'
import NavBar from './NavBar'


const eventsURL = `${process.env.REACT_APP_API_URL}/events`


class EventsPage extends React.Component {
	state = {
		events: [],
		selectedYear: []
	}

	componentDidMount() {
		fetch(eventsURL)
		.then((resp) => resp.json())
		.then((data) => this.setState({events: data}))
		.then(	console.log(this.props.name))

		// if (!this.props.name){
        //     this.props.history.push('./signin')
        // }
	}

	//SORTED SPACE EVENTS
	sortedEvents = () => {
		const eventsArray = [...this.state.events]

		//PASSING ONLY SPACE EVENTS TO SORT FUNCTION BELOW
		const onlySpaceEvents = [...eventsArray].filter(event => event.topic_id === 1)

		//sorts all of the events based on the conditions below
		return onlySpaceEvents.sort((event1, event2)=>{

		//bubble sort algorithm
			const event1date = parseInt(event1.date.slice(0,4),10)
			const event2date = parseInt(event2.date.slice(0,4),10)
			return event1date < event2date ? -1 : 0
		})
	}


	selectYearOfEvent = (eventObj) => {
		this.setState({selectedYear: [eventObj] })

	}

	render() {
			const {events, selectedYear} = this.state;
		return(
		<div className="space">
			 <NavBar signOut={this.props.signOut}/>
			<TimelineContainer events={this.sortedEvents()} selectionOfYear={this.selectYearOfEvent}/>
			{selectedYear.length > 0 ?
				(<EventCard event={selectedYear[0]} />) : <h1 class='choose-event'>Select a year to see an event</h1>
			}
		</div>

		)
	}
}

export default EventsPage


//TESTING
// import React from 'react'
// import TimelineContainer from './Timeline/TimelineContainer.js'


// const eventsURL = "http://localhost:3001/events"

// class EventsPage extends React.Component {
// 	state = {
// 		allEvents: [],
// 		spaceEvents: []
// 	}

// 	componentDidMount() {
// 		console.log('we are in')
// 		fetch(eventsURL)
// 		.then((resp) => resp.json())
// 		.then((data) => this.setState({allEvents: data}))
// 	}

// 	//FILTERING OUT SPACE EVENTS AND PASSING IT INTO THE SORTED EVENTS FUNCTION
// 	// filteredOutSpaceEvents = () => {

// 	// }

// 	sortedEvents = () => {
// 		//FILTER TO INCLUDE ONLY SPACE EVENTS IN SORTED EVENTS
// 		console.log('we are in')
// 		const {allEvents, spaceEvents} = this.state
// 		const eventsToSpaceEvents = [...allEvents]
// 		// const onlySpaceEvents = [...allEvents].filter(event => event.topic_id === 1)
// 		// eventsToSpaceEvents.push(onlySpaceEvents)
// 		// this.setState({
// 		// 	spaceEvents: onlySpaceEvents
// 		// })

// 		//sorts all of the events based on the conditions below
// 		return eventsToSpaceEvents.sort((event1, event2)=>{

// 		//bubble sort algorithm
// 			const event1date = parseInt(event1.date.slice(0,4),10)
// 			const event2date = parseInt(event2.date.slice(0,4),10)
// 			return event1date < event2date ? -1 : 0
// 		})
// 	}

// 	render() {
// 		return(
// 		<div>
// 			<TimelineContainer events={this.sortedEvents}/>
// 		</div>

// 		)
// 	}
// }

// export default EventsPage

//WORKING COMPONENT
// class EventsPage extends React.Component {
// 	state = {
// 		events: []
// 	}

// 	componentDidMount() {
// 		fetch(eventsURL)
// 		.then((resp) => resp.json())
// 		.then((data) => this.setState({events: data}))
// 	}

// 	sortedEvents = () => {
// 		const eventsArray = [...this.state.events]


// 		//bubble sort algorithm
// 			const event1date = parseInt(event1.date.slice(0,4),10)
// 			const event2date = parseInt(event2.date.slice(0,4),10)
// 			return event1date < event2date ? -1 : 0
// 		})
// 	}

// 	render() {
// 		return(
// 		<div>
// 			<TimelineContainer events={this.sortedEvents()}/>
// 		</div>

// 		)
// 	}
// }

//WORKING SORT AND FILTER FUNCTION

// sortedEvents = () => {
// 	const eventsArray = [...this.state.events]

// 	//PASSING ONLY SPACE EVENTS TO SORT FUNCTION
// 	const onlySpaceEvents = [...eventsArray].filter(event => event.topic_id === 1)
// 	return onlySpaceEvents.sort((event1, event2)=>{

// 	//bubble sort algorithm
// 		const event1date = parseInt(event1.date.slice(0,4),10)
// 		const event2date = parseInt(event2.date.slice(0,4),10)
// 		return event1date < event2date ? -1 : 0
// 	})
// }

