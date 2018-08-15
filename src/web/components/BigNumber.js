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
	console.log(value)
	return (
		<div>
			<Card>
				<CardHeader>{name}</CardHeader>
				<CardBody>
					<CardText style={{textAlign: 'right'}}>{numeral(value).format('0,0.00') + ' SEK'}<br />{description && <small style={{textAlign: 'center'}}>{description}</small>}</CardText>
				</CardBody>
				<CardFooter>
					
			
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