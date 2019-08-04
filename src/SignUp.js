import React, { useState } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import auth from './auth';

const SignUp = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = () => {
		let newUser = {
	      email: email,
	      password: password
   		}
   		auth.registerUser(newUser, () => {
   			props.history.push('/home')
   		})
	}

	const updateEmail = e => {
    	setEmail(e.target.value)
  	}

  	const updatePassword = e => {
    	setPassword(e.target.value)
 	}

	return(
		<Jumbotron>
      <Form >
        <h3 className="text-center">Sign Up</h3>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Name"  />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" value={email} onChange={updateEmail} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={password} onChange={updatePassword} />
        </FormGroup>
        <Button 
          className="btn-large btn-dark btn-block"
          onClick={registerUser}
        >
          Sign Up
        </Button>
        <div className="text-center p-2">
        	<p>
        		Already a user?
        		<span className="pl-1">
          			<Link to="/">Log In</Link>
          		</span>
          	</p>
        </div>
      </Form>
    </Jumbotron>
	);
}

export default SignUp;