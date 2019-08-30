import React, { Component } from "react";
// import uniqueId from "react-html-id";
const CONTRIBUTIONS_URL = `${process.env.REACT_APP_API_URL}/contributions/`;
const LIKES_URL = `${process.env.REACT_APP_API_URL}/likes`;

class ContributionCard extends Component {
  constructor() {
    super();
    // uniqueId.enableUniqueIds(this);
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

      console.log(event);
    }
    if (!(event.target.src == defaultUrl)) {
      event.target.src =
        "https://66.media.tumblr.com/d7102042007e56d30fb4b0c3ce250668/tumblr_onwdj0kx1m1txuzyco1_1280.jpg";
      this.setState({ imageErrorCounter: this.state.imageErrorCounter + 1 });
    }
  };

  addUserLike = () => {
    //event.preventDefault();
    let contributionToEdit = this.props.contributionToEdit;

    let headers = {
      "Content-Type": "application/json",
      Accepts: "application/json"
    };

    let user_id = 1; // TO CHANGE !! to actulay current user

    return fetch(LIKES_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        contribution_id: this.props.contribution.id
      })
    })
      .then(res => res.json())
      .then(promise => {
        console.log(promise);
        let id = JSON.stringify(promise.id);
        let contribution_id = JSON.stringify(promise.contribution_id);
        localStorage.setItem(contribution_id, id);
      });
  };

  render() {
    // let {avatar} = this.props.user
    return (

      <div className="comment-container">
        
        <h3 className="your-comment" >{this.props.user.name} Says:</h3>
        <p className="comment" 
        // id={this.lastUniqueId()}
        >
          {this.props.contribution.text}
        </p>
        {/* ROSS: Conditional rendering for image: */}
        {this.props.contribution.url !== "" ? (
          <label 
          // htmlfor={this.nextUniqueId()}
          >
            <img
              alt={this.props.contribution.id}
              src={this.props.contribution.url}
              onError={this.addDefaultSrc}
              className="contributionPic"
            />
          </label>
        ) : null}
        <div style={{ marginBottom: "20px" }}>
          {/* <button

              class="comment-btn"
              type="button"
              onClick={this.addUserLike}
            >
              <span>Like</span>
            </button> */}
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
    );
  }
}

export default ContributionCard;
