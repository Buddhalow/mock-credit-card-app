import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image, ScrollView
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import BigNumber from './BigNumber'

import TransactionListing from './TransactionListing'

const Dashboard = ({account}) => {
	return (
		<Container>
			<Content padder style={{alignItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
				{account &&
				<View> 
	                <Header
	                  title={`Dashboard`}
	                  content={`You are currently logged in as ${member.email}`}
	                />

	                <ScrollView horizontal={true} contentContainerStyle={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
	                	<BigNumber value={account.credit - (account.balance + account.reserved)} description={'Available balance'} description={`${account.reserved} reserved`} />
	                	<BigNumber value={(account.balance + account.reserved)} text={'Used credit'} />
	                </ScrollView> 
	                <TransactionListing transactions={account.transactions.slice(0, 10)} />
                </View>}
            	{error && <Text>We are so sorry but we could not load your account at the moment</Text>}
          	</Content>
		</Container>
	)
}

Dashboard.propTypes = {
	account: PropTypes.shape().isRequired
}

export default Dashboard