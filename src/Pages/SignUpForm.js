import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { signup } from "../Services/api"


class SignUpForm extends React.Component {

    //STATE FOR USER LOGIN DETAILS TYPED IN FORM
    state = {
        name: "", 
        password: "",
        currentUser: []
    }
    
    
    //CHANGE STATE AS USER TYPES
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    //SUBMIT USERNAME AND PASSWORD FOR USER CREATION
    handleSubmit = () => {
        signup(this.state.name, this.state.password)
        .then(data => {
            console.log(data.name)
                this.props.signUp(data.name)
                this.setState({
                    name: data.name
                })
        }

        );
    };


//SIGNIN FUNCTION AS EXAMPLE
    // handleSubmit = () => {
    //     signin(this.state.name, this.state.password)
    //     .then(data => {
    //         if (data.error) {
    //             alert(data.error);
    //         } else {
    //             this.props.signIn(data.name);
    //         }
    //     });
    // };

    //USER SIGNUP FORM
    render(){
    const {name, password} = this.state
    const {handleChange, handleSubmit} = this

        return( 
        
     <div className="App">
     <header className="App-header">
     <img class= 'App-logo' src='https://images.vexels.com/media/users/3/136991/isolated/preview/064fd00b13b1c206ff592032ffca1e0c-time-clock-icon-by-vexels.png' className="App-logo" alt="logo" />
     <h1>Create your TimeSkip Account</h1>
     <div>

 <Form>
     <label>Name</label>
     <Form.Field>
     <input name="name" placeholder='Name' value={name} placeholder='Name' onChange={handleChange} />
     </Form.Field>
     <label>Password</label>
     <Form.Field>
     <input type="password" name="password" placeholder='Password' value={password} placeholder='Password' onChange={handleChange} />
     </Form.Field>
     <Form.Field>
     </Form.Field>
     <br />
     <Link to='/Topics' class="ui primary button" onClick={handleSubmit} >Submit</Link>
 </Form>

     </div>

     </header>
     

 </div>
    )

    }
    
    ;}

export default SignUpForm;


// CODE FOR AVATAR STRETCH GOAL
// if (name.length > 0 ){
//     return (
//         <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Choose your avatar</h1>
//         <div>

//     <Form>
//         <label>Name</label>
//         <Form.Field>
//         <input name="name" placeholder='Name' value={name} placeholder='Name' onChange={handleChange} />
//         </Form.Field>
//         <label>Password</label>
//         <Form.Field>
//         <input name="password" placeholder='Password' value={password} placeholder='Password' onChange={handleChange} />
//         </Form.Field>
//         <Form.Field>
//         </Form.Field>
//         <br />
//         <Link to='/Topics' class="ui primary button" onClick={handleSubmit} >Submit</Link>
//     </Form>

//         </div>

//         </header>
        

//     </div>
   
//     )} else {