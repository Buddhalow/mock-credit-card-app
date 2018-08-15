import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import BigNumber from './BigNumber'
import numeral from 'numeral'
import TransactionListing from './Transactions'
import ControlRoom from './ControlRoom'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Button
} from 'reactstrap';

const Dashboard = ({account, error, authorize, trans, commit}) => {
	console.log(account)
	return (
		<div>
	       {account && 
	       		
	       		<div>
		       		<h1>{`Dashboard`}</h1>
	                <Row>
	                	<Col md="12">	
	                		<ControlRoom authorize={authorize} commit={commit} trans={trans} />
	                	</Col>
	                </Row>
	                <Row>
	                	<Col md="12">
	                	<Card>
							<CardHeader>{account.name}</CardHeader>
							<CardBody>
								<CardText style={{textAlign: 'right'}}>
									<b>Total credit line</b>
									<p>{numeral(account.credit).format('0,0.00') + ' SEK'}<br /></p>
									<b>Balance</b>
									<p>{numeral(account.credit - account.balance).format('0,0.00') + ' SEK'}<br /></p>
									<b>Used</b>
									<p>{numeral(account.balance).format('0,0.00') + ' SEK'}<br /></p>
									<b>Reserved</b>
									<p>{numeral(- (account.hold)).format('0,0.00') + ' SEK'}<br /></p>
									<hr /> 
									<p>Available</p>
									{numeral(account.credit - (account.balance + account.hold)).format('0,0.00') + ' SEK'}
								</CardText>
							</CardBody>
							<CardFooter>
								
						
							</CardFooter>
						</Card>
	                	</Col>
	                </Row> 
	                <Row>
	                	<Col md="12">
	                		<Card>
	                			<CardHeader>Transactions</CardHeader>
	                			<CardBody>
	                				<TransactionListing transactions={Object.values(account.transactions)} />
	                			</CardBody>
	                		</Card>
	                	</Col>
	                </Row>
                </div>
           	}
        	{error && <div>We are so sorry but we could not load your account at the moment</div>}
      	</div>
	)
}

Dashboard.propTypes = {
	account: PropTypes.shape().isRequired
}

export default Dashboard