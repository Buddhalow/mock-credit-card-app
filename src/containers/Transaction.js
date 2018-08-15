import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTransaction, setError } from '../actions/collectify';

class Transaction extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    collectify: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      transaction: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchInvoice: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchTransaction();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchTransaction = () => {
    const { fetchTransaction, showError } = this.props;
    return fetchTransaction(this.props.match.id)
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, collectify, match } = this.props;
    let transaction = collectify.account.transactions[this.props.match.id]
    return (
      <Layout
        error={collectify.error}
        loading={collectify.loading}
        transaction={transaction}
      />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  fetchTransaction: getTransaction,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
