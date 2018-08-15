import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTransactions } from '../actions/collectify';

class TransactionListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    transactions: PropTypes.shape({
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

  componentDidMount = () => this.getTransactionss();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchTransactions = () => {
    const { fetchTransacions, showError } = this.props;
    return fetchRecipes()
      .then(() => fetchMeals())
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
  recipes: state.recipes || {},
});

const mapDispatchToProps = {
  fetcTransactions: getTransactions,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing);
