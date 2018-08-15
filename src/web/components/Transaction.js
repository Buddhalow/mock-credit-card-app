import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import numeral from 'numeral'
import moment from 'moment'
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const TransactionView = ({
  error,
  transaction
}) => {
  // Error
  
  return (
    <Row></Row>
  );
};

TransactionView.propTypes = {
  error: PropTypes.string,
  amount: PropTypes.number.isRequired,
  transaction: PropTypes.shape()
};

TransactionView.defaultProps = {
  error: null,
};

export default TransactionView;
