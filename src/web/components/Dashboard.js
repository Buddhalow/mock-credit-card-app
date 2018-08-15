import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import BigNumber from './BigNumber'

import TransactionListing from './Transactions'

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

const Dashboard = ({account, error}) => {
	return (
		<div>
	       {account && 
	       		<div>
		       		<h1>{`Dashboard`}</h1>
	                
	                <Row>
	                	<Col md="4">
	                		<BigNumber value={account.credit - (account.balance + account.reserved)} name={'Available balance'} description={`${account.reserved} reserved`} />
	                	</Col>
	                	<Col md="4">
	                		<BigNumber value={(account.balance + account.reserved)} name={'Used credit'} />
	                	</Col>
	                </Row> 
	                <TransactionListing transactions={Object.values(account.transactions)} />
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