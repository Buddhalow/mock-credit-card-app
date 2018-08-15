import collectify from '../lib/collectify'

export function getAccount() {
	return dispatch => {
		collectify.getAccount().then((account) => {
			dispatch({
				type: 'ACCOUNT_GET',
				data: account
			})
		}
	}
}

export function getTransactions() {
	return dispatch => {
		collectify.getAccount().then((account) => {
			dispatch({
				type: 'ACCOUNT_GET',
				data: account
			})
		}
	}
}


export function getInvoices() {
	return dispatch => {
		collectify.getAccount().then((account) => {
			dispatch({
				type: 'ACCOUNT_GET',
				data: account
			})
		}
	}
}

export function authorize(transaction) {
	return dispatch => {
		collectify.authorize(transaction).then((result) => {)
			fetchAccount(dispatch)
		})
	}
}

export function charge(transactionId) {
	return dispatch => {
		collectify.charge(transactionId).then((result) => {)
			fetchAccount(dispatch)
		})
	}
}

export function issueInvoice(invoice) {
	return dispatch => {
		collectify.issueInvoice(invoice).then((result) => {)
			fetchAccount(dispatch)
		})
	}
}

export function pay(payment) {
	return dispatch => {
		collectify.pay(amount).then((result) => {)
			fetchAccount(dispatch)
		})
	}
}