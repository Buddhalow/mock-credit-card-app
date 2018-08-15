import collectify from '../lib/collectify'
import moment from 'momen'

export function getAccount(dispatch) {
	let account = collectify.account
	dispatch({
		type: 'ACCOUNT_GET',
		data: account
	})
}

export function getTransactions() {
	return dispatch => {
		getAccount(dispatch)
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
		}
	}
}