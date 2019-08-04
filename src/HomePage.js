import React from 'react';
import { Button, Jumbotron } from 'reactstrap';
import auth from './auth';

const HomePage = (props) => {
	return(
		<div>
			<h1 className="text-center">Meet Varvatos Vex</h1>
			<Jumbotron>
				<img src="https://robohash.org/VarvatosVex" alt="Varvatos Vex" />
				<p className="pt-2">
					Welcome, brave warrior. I am Varvatos Vex, the last robot remaining from the Robot Uprising.
				</p>
				<p>
					There is not much I can offer you.
				</p>
			</Jumbotron>
			<Button 
				onClick={
					() => {
						auth.logout(() => {
							props.history.push('/')
						})
					}
				}
				className="btn-large btn-dark btn-block">
				Log out
			</Button>
		</div>
	);
}

export default HomePage;