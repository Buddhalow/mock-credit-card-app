import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

const BigNumber = ({value, name, description}) => {
	return (
		<div style={{alignItems: 'center', padding: 20}}>
			<p style={{textAlign: 'center'}}>{name}</p>
			<p style={{fontSize: 20, textAlign: 'center'}}>{numeral(value).format('0.0:00')}</p>
			{description && <Text style={{textAlign: 'center'}}>{description}</Text>}
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