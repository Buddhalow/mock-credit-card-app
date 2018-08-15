import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAccount, setError } from '../actions/collectify';

class Dashboard extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    collectify: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      account: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchAccount: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchInvoice();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchAccount = () => {
    const { fetchAccount, showError } = this.props;
    return fetchAccount(this.props.match.id)
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
        account={collectify.account}
      />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  fetchAccount: getAccount,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
