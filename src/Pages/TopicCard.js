import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Card, Divider, Image, Placeholder, Form, Icon } from 'semantic-ui-react'
import { signin } from "../Services/api"
import ContributionContainer from '../ContributionContainer.js'
import EventsPage from '../components/EventsPage'

class TopicCard extends React.Component {

    render(){
    return (
        <div className="topic-card">
                
                {this.props.name === "Space"
                ?
                
                <Link to='/space-timeline' >
                <Card>
                    <Image src='https://www.history.org.uk/library/1308/0000/0082/moon_landing_640.jpg' wrapped ui={false} className='topic-image'/>
                    <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Description>
                    {this.props.description}
                    </Card.Description>
                    </Card.Content>
                </Card>
    
                </Link>
                :   <Link to='/gaming-timeline' >
                        <Card>
                            <Image src='https://cdn.wccftech.com/wp-content/uploads/2019/02/WCCFsupermariomaker2.jpg' wrapped ui={false} className='topic-image'/>
                            <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Description>
                            {this.props.description}
                            </Card.Description>
                            </Card.Content>
                        </Card>
                    </Link>

                }
        </div>
    
    );}
}

export default TopicCard;