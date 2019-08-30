import React, { Component } from "react";
import ContributionCard_Gaming from "./ContributionCard_Gaming";
//import { Card, Icon, Image } from 'semantic-ui-react'

class ContributionContainer_Gaming extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contribution-gaming">
        <div className = "contribution-div-gaming">
          { this.props.contributions.length > 0 
          ? <div className='comment-heading'> <h2>Comments:</h2></div> 
            : null
            }
              <p>
                  {this.props.contributions.map(cont => {
                      return <ContributionCard_Gaming 
                        contribution={cont} 
                        setContributionToEdit={this.props.setContributionToEdit} 
                        fetchContributions={this.props.fetchContributions} 
                        toggleShowForm={this.props.toggleForm}
                        />;
                  })}
              </p>
        </div>
      </div>
    );
  }
}

export default ContributionContainer_Gaming;