import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import { Link } from 'react-router-dom';

const InvoiceListing = ({
  error,
  loading,
  invoices,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  
    return (
    <Row>
      <Col>
        <Header
          title="Invoices"
          content="Latest transactions on your account"
        />

        <table>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {transactions.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={`/transaction/{item.id}`}>{item.name}</Link>
              </td>
              <td>
                {numeral(item.amount).format('0.00:00')}
              </td>
              <td>{moment(item.time).fromNow()}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <Spacer size={20} />
      </Col>
    </Row>
  );
};

InvoiceListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  invoices: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

InvoiceListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default InvoiceListing;
