import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
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

class ControlRoom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			authorize: {
				amount: 0,
				name: ''
			},
			commit: {
				amount: 0,
				name: ''
			}
		}
	}
	_onTransClick() {
		this.props.trans(this.state.authorize.amount, this.state.authorize.name)
	}
	_onAuthorizeClick() {
		this.props.authorize(this.state.authorize)

	}
	render() {
		return (
			<Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
			    <Card>
				    <CardTitle>Authorize transaction</CardTitle>
				    <CardBody>
				    	<label>Amount</label>
				    	<input type="number" defaultValue={this.state.authorize.amount} onChange={(e) => this.setState({authorize: {...this.state.authorize, amount: parseFloat(e.target.value)}})} />
				    	<label>Description</label>
				    	<input type="text" defaultValue={this.state.authorize.name} onChange={(e) => this.setState({authorize: {...this.state.authorize, name: e.target.value}})} />
		          	</CardBody>
		          	<CardFooter>
		          		<Button onClick={this._onAuthorizeClick.bind(this)}>Authorize</Button>
		          		<Button onClick={this._onTransClick.bind(this)}>Commit</Button>
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

export default ControlRoom