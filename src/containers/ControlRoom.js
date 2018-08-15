import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authorize, commit } from '../actions/collectify';

class ControlRoom extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    authorize: PropTypes.func.isRequired,
    commit: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }


  render = () => {
    const { Layout, authorize, commit, match } = this.props;
    return (
      <Layout authorize={authorize} commit={commit} />
    );
  }
}

const mapStateToProps = state => ({
  collectify: state.collectify || {},
});

const mapDispatchToProps = {
  authorize: authorize,
  commit: commit
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlRoom);
