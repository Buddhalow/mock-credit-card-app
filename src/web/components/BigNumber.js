import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Button
} from 'reactstrap';

const BigNumber = ({value, name, description}) => {
	return (
		<div>
			<Card>
				<CardHeader>{name}</CardHeader>
				<CardBody>
					<CardText>{numeral(value).format('0,0.00') + ' SEK'}</CardText>
				</CardBody>
				<CardFooter>
					{description && <small style={{textAlign: 'center'}}>{description}</small>}
			
				</CardFooter>
			</Card>
		</div>
	)
}

BigNumber.propTypes = {
	value: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string
}

BigNumber.defaultProps = {
	name: '?',
	description: null,
	number: 0
}

export default BigNumber