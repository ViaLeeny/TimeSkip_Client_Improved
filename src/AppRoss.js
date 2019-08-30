import React, { Component } from "react";
import ContributionContainer from './ContributionContainer.js'
import './App.css';
import { Container, Header, List } from "semantic-ui-react";
const CONTRIBUTIONS_URL = `${process.env.REACT_APP_API_URL}/contributions/`;

// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: []
    };
  }

  componentDidMount() {
    fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        //console.log(contributions)
        this.setState({ contributions: contributions });
      });
  }

render(){
  return (
    // Ross Test
    <div className="App">
      <header className="App-header">

      </header>
      <p>TimeSkip</p>
       <ContributionContainer contributions={this.state.contributions} />


    </div>
  );

}}