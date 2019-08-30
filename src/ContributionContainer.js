import React, { Component } from "react";
import ContributionCard from "./ContributionCard";
import { Button, Comment, Form, Header } from "semantic-ui-react";

class ContributionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAuthor = cont => {
    return this.props.users.find(user => {
      debugger;
      return user.id === cont.user_id;
    });
  };

  render() {
    return (
      <div className="contribution">
        <div>
          <h1>Comments</h1>
          <p>
            {this.props.contributions.map(cont => {
              // IS THIS THE CULPRIT? try defining it as a function outside the render?
              return (
                <ContributionCard
                  setContributionToEdit={this.props.setContributionToEdit}
                  contribution={cont}
                  fetchContributions={this.props.fetchContributions}
                  toggleShowForm={this.props.toggleForm}
                  user={this.getAuthor(cont)}
                  fetchUsers={this.props.fetchUsers}
                />
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default ContributionContainer;

// CardExampleCard = () => (
//   <Card>
//     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )
