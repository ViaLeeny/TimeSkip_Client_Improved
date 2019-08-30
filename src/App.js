//THESE ARE THE IMPORTS AYLEEN ADDED
import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SignInForm from "./Pages/SignInForm";
import SignUpForm from "./Pages/SignUpForm";
import TopicsPage from "./Pages/TopicsPage";
import { Route, Switch, withRouter } from "react-router-dom";
import EventsPage from "./components/EventsPage";
import EventsPage_Gaming from "./components_Gaming/EventsPage_Gaming";
import ChooseAvatar from "./Pages/ChooseAvatar";
import { validate } from "./Services/api";

const topicsURL = `${process.env.REACT_APP_API_URL}/topics`;

class App extends React.Component {
  state = {
    name: "",
    topics: [],
    events: [],
    avatar: ""
  };

  //SIGN IN FUNCTION
  signIn = user => {

    // this.props.history.push('/topics')
    localStorage.setItem("token", user.token);
    localStorage.setItem("name", user.name);
    this.setState({ name: user.name }, () => this.props.history.push('/topics'));
  };
  //SIGN OUT FUNCTION
  signOut = () => {
    this.setState({ name: "" });
    localStorage.removeItem("token");
  };

  componentDidMount() {
    if (localStorage.token) {

      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signIn(data);
        }
      });
      console.log(`${process.env.REACT_APP_API_URL}`)
    }

    fetch(topicsURL)
      .then(resp => resp.json())
      .then(data => this.setState({ topics: data }));
  }

  //SIGN UP FUNCTION
  signUp = name => {
    this.setState({ name });
  };

  //RENDER THE USER WELCOME SCREEN
  render() {
    const { name, topics, avatar } = this.state;
    const { signIn, signOut, signUp, validate } = this;

    //ROUTES FOR EACH LINK WITHIN THE APPLICATION
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={props => <HomePage {...props} />} />
          <Route
            path="/signin"
            component={props => (
              <SignInForm signIn={signIn} validate={validate} {...props} />
            )}
          />
          <Route
            path="/signup"
            component={props => <SignUpForm signUp={signUp} {...props} />}
          />
          <Route
            path="/topics"
            component={props => (
              <TopicsPage
                signOut={signOut}
                topics={topics}
                name={name}
                {...props}
              />
            )}
          />

          <Route
            path="/Space-Timeline"
            component={props => <EventsPage name={name} {...props} />}
          />

          <Route
            path="/gaming-Timeline"
            component={props => <EventsPage_Gaming name={name} {...props} />}
          />
          <Route
            path="/user-avatar"
            component={props => (
              <ChooseAvatar name={name} avatar={avatar} {...props} />
            )}
          />
        </Switch>
      </div>

      // EVENTCONTAINER AND CONTRIBUTIONS COMPONENTS HAVE BEEN ADDED TO TOPIC PAGE
    );
  }
}

export default withRouter(App);

/* DEFAULT JS FROM CREATE REACT APP*/
/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>  */
