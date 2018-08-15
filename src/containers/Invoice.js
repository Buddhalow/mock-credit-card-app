import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native'

import { getInvoices, setError } from '../actions/collectify';

class Invoice extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    collectify: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      invoice: PropTypes.arrayOf(PropTypes.shape()).isRequired,
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

  componentDidMount = () => this.fetchInvoice();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchInvoice = () => {
    const { fetchInvoice, showError } = this.props;
    return fetchInvoice(this.props.match.id)
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, collectify, match } = this.props;
    if (!collectify.account) return <View></View>
    let invoice = collectify.account.invoices[this.props.match.id]
    return (
      <Layout
        error={collectify.error}
        loading={collectify.loading}
        invoice={invoice}
      />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  fetchInvoice: getInvoice,
  fetchMeals: getMeals,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
