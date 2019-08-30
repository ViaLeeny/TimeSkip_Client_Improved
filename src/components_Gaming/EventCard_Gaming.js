import React from 'react'
import { Segment, Header, Image, Icon } from 'semantic-ui-react'
import ContributionContainer_Gaming from "./Timeline_Gaming/Contributions_Gaming/ContributionsContainer_Gaming"
import ContributionForm_Gaming from './Timeline_Gaming/Contributions_Gaming/ContributionForm_Gaming'

const CONTRIBUTIONS_URL = `${process.env.REACT_APP_API_URL}/contributions/`

class EventCard_Gaming extends React.Component {
  //SETTING STATE
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      showForm: false,
      contributionToEdit: null
    };
  }

  //FETCH CONTRIBUTIONS 
  componentDidMount() {
    this.fetchContributions();
  }

  //FETCH CONTRIBUTIONS
  fetchContributions = () => {
    return fetch(CONTRIBUTIONS_URL)
    .then(resp => resp.json())
    .then(contributions => {
      this.setState({ contributions });
    });
  }

  //FILTER CONTRIBUTIONS FOR THIS EVENT
  filterContributions = () => {
    //if (this.state.contributions.length > 0) {
      let eventContributions = [...this.state.contributions].filter(
        contribution => contribution.event_id === this.props.selectedEvent.id
      );
 
      return eventContributions;
  };

  //SET THE CONTRIBUTION YOU WOULD LIKE TO EDIT
  setContributionToEdit = contribution => {
    this.setState({ contributionToEdit: contribution }
    );
  };

  //TOGGLES THE SHOW FORM 
  toggleShowForm = (bool = "jeff") => {
    if (bool === "jeff") {
      this.setState({ showForm: !this.state.showForm });
    } else {
      this.setState({ showForm: bool });
      //debugger;
    }
  };

  reverseContributions = () => {
    return this.filterContributions().reverse();
  };

	render() {
		return (
			
            <div class = 'event-card'>
            <Segment padded='very'>
            <Image src={this.props.selectedEvent.image_url} size='large' rounded centered bordered className='picture'/> 
            <Header as='h2'>{this.props.selectedEvent.date.slice(0, 4)}</Header>
            <Header as='h2'>{this.props.selectedEvent.name}</Header>
              <p>
              {this.props.selectedEvent.description}
              </p>
              {/* <Icon name='add' />
              <Icon name='heart' /> */}
              <button
                  onClick={() => {
                    this.setState({ showForm: !this.state.showForm, contributionToEdit:null })                   
                  }} class="comment-btn-gaming" type="button"
                >
                  {this.state.showForm ? "Cancel" : "Add Comment"}
              </button>
            </Segment>
             <div>
                {this.state.showForm ? (
                  <ContributionForm_Gaming
                    toggleForm={this.toggleShowForm}
                    event={this.props.selectedEvent}
                    fetchContributions={this.fetchContributions}
                    contributionToEdit={this.state.contributionToEdit}
                  />
                ) : null}
             </div>

            <ContributionContainer_Gaming
              event={this.props.selectedEvent}
              contributions={this.reverseContributions()}
              fetchContributions={this.fetchContributions}
              toggleForm={this.toggleShowForm}
              setContributionToEdit={this.setContributionToEdit}
            />
       
          </div>
		)
	}
}

export default EventCard_Gaming