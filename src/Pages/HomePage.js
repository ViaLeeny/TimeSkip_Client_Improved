import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signin } from "../Services/api"


class HomePage extends React.Component {

    //USER WELCOME SCREEN WITH LOGIN AND SIGNUP BUTTONS
    render(){
    return (
    <div className="App">
        <header className="App-header">
        <img src='https://images.vexels.com/media/users/3/136991/isolated/preview/064fd00b13b1c206ff592032ffca1e0c-time-clock-icon-by-vexels.png' className="App-logo" alt="logo" />
        <h1>TimeSkip</h1>
        
        <div>
        <Link to='/signin' class="ui primary button"  >Sign In </Link>
        <Link to='/signup' class="ui secondary button" >Sign Up </Link>
        {/* <button class="ui primary button" onClick={this.handleSubmit}>Sign In</button> */}
        </div>
        </header>
        

    </div>
    );}
}

export default HomePage;