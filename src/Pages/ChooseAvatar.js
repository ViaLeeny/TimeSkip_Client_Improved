import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Card, Divider, Image, Placeholder, Form, Icon } from 'semantic-ui-react'
import { signin } from "../Services/api"
import ContributionContainer from '../ContributionContainer.js'
import EventsPage from '../components/EventsPage'
import TopicCard from './TopicCard'


class ChooseAvatar extends React.Component {



    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            {
                this.props.name.length > 0 
                ? <div> 
                    <h1>Choose your avatar, {this.props.name}</h1>
                    <Link to='/' onClick={this.props.signout} class="ui primary button" >Sign Out </Link>
                    <div>
                        {this.props.topics.map((topic, index) => <TopicCard key={topic.id} name={topic.name} description={topic.description}/>)}
                    </div>
                  </div>
                : 
                <div>
                    <h1>Invalid user name/password combination</h1>
                    <Link to='/signin' class="ui primary button"  >Sign In </Link>
                    <Link to='/signup' class="ui secondary button"  >Sign Up </Link>
                </div>
            } 
          </header>  
    </div>
    );}
}

export default ChooseAvatar;