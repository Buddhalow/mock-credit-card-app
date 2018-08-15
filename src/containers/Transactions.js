import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTransactions, setError } from '../actions/collectify';

class TransactionListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    collectify: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      transactions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchTransactions: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchTransactions();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchTransactions = () => {
    const { fetchTransactions, showError } = this.props;
    return fetchTransactions()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, collectify } = this.props;

    return (
      <Layout
        error={collectify.error}
        loading={collectify.loading}
        transactions={collectify.transactions}
        reFetch={() => this.fetchTransactions()}
      />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  fetcTransactions: getTransactions,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListing);
