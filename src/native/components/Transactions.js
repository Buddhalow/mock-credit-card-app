import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';

const TransactionListing = ({
  error,
  loading,
  transactions,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  const onPress = item => Actions.transaction({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <Content padder>
        <Header
          title="Transactions"
          content="Latest transactions on your account"
        />

        <FlatList
          numColumns={1}
          data={transactions}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>
                    {item.amount}
                  </Text>
                  <Text style={{ fontWeight: '800', fontSize: 10 }}>
                    {item.name}
                  </Text>
                  <Spacer size={15} />
                  <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
                    <Text>
                      View
                    </Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          )}
        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

TransactionListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

TransactionListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default TransactionListing;
