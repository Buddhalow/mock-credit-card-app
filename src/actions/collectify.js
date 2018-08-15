import collectify from '../lib/collectify'
import moment from 'moment'

export function getAccount(dispatch) {
	let account = collectify.account
	if (dispatch instanceof Function) {
		dispatch({
			type: 'ACCOUNT_GET',
			data: account
		})
	} else {
		return dispatch => {
			dispatch({
				type: 'ACCOUNT_GET',
				data: account
			})
		} 
	}
}

export function fetchAccount() {
	
	return dispatch => {
		return new Promise((resolve, reject) => {
			let account = collectify.account
			console.log(account)
			return resolve(
				dispatch({
					type: 'ACCOUNT_GET',
					data: account
				})
			)
		})
	} 

}

// For now we store everything in a single variable, so we fetch from fetchAccount
export let fetchInvoice = fetchAccount

export let fetchInvoices = fetchAccount
export let fetchTransaction = fetchAccount
export let fetchTransactions = fetchAccount

export function getTransactions() {
	return dispatch => {
		getAccount(dispatch)
	}
}

export function setError(error) {
	return dispatch => {
		dispatch({
			type: 'COLLECTIFY_ERROR',
			data: error
		})
	}
}

export function getInvoices() {
	return dispatch => {
			getAccount(dispatch)
		
	}
}

export function authorize(transaction) {
	return dispatch => {
		try {
			collectify.authorize(transaction)
		} catch (e) {
			dispatch({
				type: 'COLLECTIFY_ERROR',
				data: e.message
			})
			return
		}
		collectify.save().then((resolve, fail) => {
			getAccount(dispatch)
		})
	}
}

export function commit(transaction) {
	return dispatch => {
		collectify.commit(transaction)
		collectify.save().then((resolve, fail) => {
			getAccount(dispatch)
		})
	}
}

export function charge(transactionId) {
	return dispatch => {
		collectify.charge(transactionId)
		collectify.save().then((result) => {
			getAccount(dispatch)
		})
	}
}

export function issueInvoice(invoice) {
	return dispatch => {
		collectify.issueInvoice(invoice)
		collectify.save().then((result) => {
			getAccount(dispatch)
		})
	}
}

export function payInvoice(invoiceId, amount) {
	return dispatch => {
		collectify.payInvoice(invoiceId, amount)
		collectify.save().then((result) => {
			getAccount(dispatch)
		})
	}
}

export function setDate(time) {
	return dispatch => {
		let time = moment(time)
		collectify.now = time
		collectify.save().then(() => {
			getAccount(dispatch)
		})
	}
}