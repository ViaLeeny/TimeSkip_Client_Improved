import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import uniqueId from "react-html-id";
const CONTRIBUTIONS_URL = `${process.env.REACT_APP_API_URL}/contributions/`;

class ContributionCard_Gaming extends Component {

  constructor() {
    super();
    uniqueId.enableUniqueIds(this);
    this.state = {
      imageErrorCounter: 0
    };
  }


  deleteContribution = () => {
    let cont_id = this.props.contribution.id;
    let headers = {
      "Content-Type": "application/json",
      Accepts: "application/json"
    };

    return fetch(CONTRIBUTIONS_URL + cont_id, {
      method: "DELETE",
      headers: headers
    }).then(res => {
      console.log(res);
      this.props.fetchContributions();
      return res.json();
    });
  };

  addDefaultSrc = event => { 
    event.persist();
    let defaultUrl = "http://localhost:3001/space-timeline"; //QU why default to this?
    if (
      this.state.imageErrorCounter === 0 &&
      !(event.target.src === defaultUrl)
    ) {
      alert("Broken image link! Please click 'Edit Comment' to try again ;-)");
    }
    if (!(event.target.src == defaultUrl)) {
      event.target.src =
        "https://66.media.tumblr.com/d7102042007e56d30fb4b0c3ce250668/tumblr_onwdj0kx1m1txuzyco1_1280.jpg";
      this.setState({ imageErrorCounter: this.state.imageErrorCounter + 1 });
    }
  };

  render() {
    return (
      <div className="rowC">
        <div className="comment-container-gaming">
          <h3 className='comment-user'> User {this.props.contribution.user_id} says:</h3>
          <p className="comment" id={this.lastUniqueId()}>
            {this.props.contribution.text}
          </p>
          {/* ROSS: Conditional rendering for image: */}
          {this.props.contribution.url !== "" ? (
            <label htmlfor={this.nextUniqueId()}>
              <img
                alt={this.props.contribution.id}
                src={this.props.contribution.url}
                onError={this.addDefaultSrc}
                className="contributionPic"
              />
            </label>
          ) : null}

          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={event => {
                //trying to get the from to prepopulate live...unsure
                this.props.setContributionToEdit(this.props.contribution);
                setTimeout(this.props.toggleShowForm(false), 500);
                this.props.toggleShowForm();
              }}
              class="comment-btn"
              type="button"
            >
              Edit Comment
            </button>

            <button
              onClick={event => this.deleteContribution()}
              class="comment-btn"
              type="button"
            >
              Delete Comment
            </button>
          </div>
        </div>
      </div>
    );
    // return (
    //   <div>
    //       <Segment> 
    //     <h1>User ID {this.props.contribution.user_id} says:</h1>

    //     <p className="comment">{this.props.contribution.text}</p>
    //     <img
    //       alt={this.props.contribution.id}
    //       src={this.props.contribution.url}
    //       className="picture"
    //     />
    //     <p> Comment Made: {this.props.contribution.created_at}</p>
    //     </Segment>
    //   </div>
    // );
  }
}

export default ContributionCard_Gaming;
