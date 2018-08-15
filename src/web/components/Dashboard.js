import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import BigNumber from './BigNumber'

import TransactionListing from './TransactionListing'

const Dashboard = ({account}) => {
	return (
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
		       {account && 
		       		<div>
			       		<H1>{`Dashboard`}</H1>
		                
		                <div style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
		                	<BigNumber value={account.credit - (account.balance + account.reserved)} description={'Available balance'} description={`${account.reserved} reserved`} />
		                	<BigNumber value={(account.balance + account.reserved)} text={'Used credit'} />
		                </div> 
		                <TransactionListing transactions={account.transactions.slice(0, 10)} />
	                </div>
	           	}
            	{error && <div>We are so sorry but we could not load your account at the moment</div>}
          	</Content>
		</Container>
	)
}

Dashboard.propTypes = {
	account: PropTypes.shape().isRequired
}

export default Dashboard