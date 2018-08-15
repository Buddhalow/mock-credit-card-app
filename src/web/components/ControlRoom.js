import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import BigNumber from './BigNumber'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Button
} from 'reactstrap';

import TransactionListing from './TransactionListing'

class ControlRoom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			authorize: {
				amount: 0,
				description: ''
			},
			commit: {
				amount: 0,
				description: ''
			}
		}
	}
	render() {
		return (
			<Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
			    <Card>
				    <CardTitle>Authorize transaction</CardTitle>
				    <CardBody>
				    	<label>Amount</label>
				    	<input type="number" defaultValue={this.state.authorize.amount} onChange={(val) => this.setState({authorize: {amount: val}})} />
				    	<label>Description</label>
				    	<input type="text" defaultValue={this.state.authorize.description} onChange={(val) => this.setState({authorize: {description: val}})} />
		          	</CardBody>
		          	<CardFooter>
		          		<Button onClick={() => this.props.authorize(this.state.authorize)}>Authorize</Button>
		          		<Button onClick={() => this.props.commit(this.state.authorize)}>Commit</Button>
		          	</CardFooter>
	          	</Card>
			</Row>
		)
	}
}

ControlRoom.propTypes = {
	authorize: PropTypes.func.isRequired,
	error: PropTypes.string
}

export defaultControlRoom