import React from "react";
import ContributionContainer from "../ContributionContainer.js";
import ContributionForm from "./ContributionForm.js";
import { Segment, Header, Image, Icon } from 'semantic-ui-react'

const CONTRIBUTIONS_URL = `${process.env.REACT_APP_API_URL}/contributions/`;
const USERS_URL = `${process.env.REACT_APP_API_URL}/users/`;

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      users: [],
      showForm: false,
      contributionToEdit: null
    };
  }
  //ROSS: on Mount, fetches ALL contributions and saves to state
  componentDidMount() {
   this.setUsersAndContributions() 
  }

  setContributionToEdit = contribution => {
    this.setState({ contributionToEdit: contribution }, () =>
      console.log(this.state.contributionToEdit)
    );
  };

  fetchUsers = () => {
    return fetch(USERS_URL)
      .then(resp => resp.json())
    
  };

  fetchContributions = () => {
    return fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
  };

  //ROSS: function that calls one fetch after (.then) the other is finished and 
  //then sets the state of both at once (prevents erros in Conttribution Container)
  setUsersAndContributions = () => {
    this.fetchUsers().then(users => {
      this.fetchContributions().then(contributions => {
        this.setState({users: users, contributions: contributions})
      })
    })
  }

  toggleShowForm = (bool = "jeff") => {
    if (bool === "jeff") {
      this.setState({ showForm: !this.state.showForm });
    } else {
      this.setState({ showForm: bool });
      //debugger;
    }
  };

  // ROSS: returns all contributions for this event. Called in the render.
  filterContributions = () => {
    // QUESTION: as this is dependent on state, and is called in the render
    // does React call it once the fetch has updated state?
    let eventContributions = [...this.state.contributions].filter(
      contribution => contribution.event_id === this.props.event.id
    );
    console.log("Here are the filtered contributions for this event:");
    console.log(eventContributions);
    // PITFALL: I had two setState functions in one componentDidMount
    //this caused intermittant "undefined X" bugs!
    return eventContributions;
  };

  reverseContributions = () => {
    return this.filterContributions().reverse();
  };

  render() {
    // Ross: BEWARE: Deconstruction below!
    let {event} = this.props
    let {showForm, contributionToEdit, users} = this.state
   // >>>>>>>>>>>>>>>
    return (
      <div className="eventCard">
        <br />
        <br />
            <h1 className="title">{this.props.event.name}</h1>



{/* //             <div className="date">
//               <p>Date of Expedition: {this.props.event.date}</p>
//             </div>

//             <div>
//               <img class="picture" src={this.props.event.image_url} />
//             </div>

//             <div className="description">
//               <p>{this.props.event.description}</p>
//             </div>

//             <br />
//             <button
//               onClick={() => {
//                 //make sure form is cleared when it is opened/closed:
//                 this.setState({ showForm: !this.state.showForm, contributionToEdit:null }) 
                
//               }}
//               class="comment-btn"
//               type="button"
//             >
//               {this.state.showForm ? "Cancel" : "Add Comment"}
//             </button>

//             <br />
//             <br />
//             <div>
//               {this.state.showForm ? (
//                 <ContributionForm
//                   toggleForm={this.toggleShowForm}
//                   event={this.props.event}
//                   fetchContributions={this.fetchContributions}
//                   contributionToEdit={this.state.contributionToEdit}
//                 />
//               ) : null}
//             </div>

//             <div>
//               <ContributionContainer
//                 event={this.props.event}
//                 contributions={this.reverseContributions()}
//                 fetchContributions={this.fetchContributions}
//                 toggleForm={this.toggleShowForm}
//                 setContributionToEdit={this.setContributionToEdit}
//               />
//             </div>
// ======= */}
        <h1 className="title">{event.name}</h1>

        <div className="date">
          <p>Date of Expedition: {event.date}</p>
        </div>

        <div>
          <img className="picture" src={event.image_url} />
        </div>

        <div className="description">
          <p>{event.description}</p>

        </div>

        <br />
        <button
          onClick={() => {
            //make sure form is cleared when it is opened/closed:
            this.setState({ showForm: !showForm, contributionToEdit: null })

          }}
          class="comment-btn"
          type="button"
        >
          {showForm ? "Cancel" : "Add Comment"}
        </button>

        <br />
        <br />
        <div>
          {showForm ? (
            <ContributionForm
              toggleForm={this.toggleShowForm}
              event={event}
              fetchContributions={this.setUsersAndContributions}
              contributionToEdit={contributionToEdit}
              users={users}
              fetchUsers={this.setUsersAndContributions}
            />
          ) : null}
        </div>

        <div>
          <ContributionContainer
            event={event}
            contributions={this.reverseContributions()}
            fetchContributions={this.setUsersAndContributions}
            toggleForm={this.toggleShowForm}
            setContributionToEdit={this.setContributionToEdit}
            users ={users}
            fetchUsers={this.setUsersAndContributions}
          />
        </div>
      </div>
    );
  }
}

export default EventCard;
