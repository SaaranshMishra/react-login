import React, { useState } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';
import auth from './auth';

const LoginForm = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const login = () => {
    let credentials = {
      email: email,
      password: password
    }
    auth.login(credentials, () => {
      props.history.push('/home')
    })
  }

  const updateEmail = e => {
    setEmail(e.target.value)
  }

  const updatePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <Jumbotron>
      <Form >
        <h3 className="text-center">Login</h3>
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
          onClick={login}
        >
          Log in
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton 
          className="mt-3 mb-3" 
          onClick={
            () => {
              auth.social_login(() => {
                props.history.push('/home')
              })
            }
          }
        />
        <TwitterLoginButton 
          className="mt-3 mb-3" 
          onClick={
            () => {
              auth.social_login(() => {
                props.history.push('/home')
              })
            }
          }
        />
        <div className="text-center">
          <p>Not a User?
            <span className="pl-1">
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </p>
        </div>
      </Form>
    </Jumbotron>
  );    
}

export default LoginForm;