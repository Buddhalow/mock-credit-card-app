import { View, Text } from 'react-native'

const BigNumber = ({value, name, description}) => {
	return (
		<View style={{alignItems: 'center', padding: 20}}>
			<Text style={{textAlign: 'center'}}>{name}</Text>
			<Text style={{fontSize: 20, textAlign: 'center'}}>{numeral(value).format('0.0:00')}</Text>
			{description && <Text style={{textAlign: 'center'}}>{description}</Text>}
		</View>
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