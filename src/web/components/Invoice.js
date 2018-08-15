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

const InvoiceView = ({
  error,
  invoice
}) => {
  // Error
  
  return (
    <Row></Row>
  );
};

InvoiceView.propTypes = {
  error: PropTypes.string,
  amount: PropTypes.number.isRequired,
  invoice: PropTypes.shape()
};

InvoiceView.defaultProps = {
  error: null,
};

export default InvoiceView;
