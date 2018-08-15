import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getInvoices, setError } from '../actions/collectify';

class InvoiceListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    collectify: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      invoices: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchInvoices: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchInvoices();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchInvoices = () => {
    const { fetchInvoices, showError } = this.props;
    return fetchInvoices()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, collectify, match } = this.props;

    return (
      <Layout
        error={collectify.error}
        loading={collectify.loading}
        invoices={collectify.invoices}
        reFetch={() => this.fetchRecipes()}
      />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  fetchInvoices: getInvoices,
  fetchMeals: getMeals,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceListing);
