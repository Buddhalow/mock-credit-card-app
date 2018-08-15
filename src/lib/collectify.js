import moment from 'momen'


import AsyncStorage from '../storage'

const DATE_FORMAT = 'YYYY-MM-DD'

const REMINDER_RATE = 0.105

class Collectify {
	async load() {
		let strData = await AsyncStorage.getItem('data')
		if (strData) {
			this.data = JSON.parse(strData)
		} else {
			this.data = {
				now: '2018-08-18 00:00:00',
				account: {
				  	country: 'se',
				  	currency: 'sek',
				  	id: '9-999 999 999-0',
				  	name: 'Collectify credit',
				  	balance: 0,
				  	interestRate: 10.5,
				  	acumulatedInterest: 0,
				  	fees: 0,
				  	hold: 0,
				  	credit: 10000,
				  	reservations: {},
				  	transactions: {},
				  	invoices: {}
			  	}
			}
		}
	}
	constructor() {
		this.load()

	}

	get account() {
		return this.state.account
	}

	get now() {
		return moment(this.data.now, DATE_FORMAT)
	}
	set now(value) {
		let oldValue = this.now
		let now = moment(value)
		while (true) {
			this.data.now = oldValue.format(DATE_FORMAT)
			
			if (oldValue.date() == 10) {
				this.createMonthlyInvoice()
			}
			if (oldValue.date() === 1) {
			// Check outstanding invoices
				this.chargeReminders()
			}


			oldValue = oldValue.add(1, 'days')
 
			if (oldValue.isSame(now) || oldValue.isAfter(now)) {
				break
			}

		}
	}

	chargeReminders() {
		for (let invoice of this.data.account.invoices) {
			if (invoice.paidAmount < invoice.lowestAmount) {
				this.commit({
					id: Math.random() * 12000,
					name: 'Reminder',
					amount: invoice.lowestAmount * REMINDER_RATE,
					type: 'reminder',
					isFinal: true,
					time: oldValue.format(DATE_FORMAT)
				})
				this.commit({
					id: Math.random() * 12000,
					name: 'Late fee',
					amount: 50,
					type: 'lateFee',
					isFinal: true,
					time: oldValue.format(DATE_FORMAT)
				})
			}
		}
	}

	authorize(amount, name) {
		let availableFunds = this.data.account.credit - (this.data.account.balance + this.data.account.hold)
		if (amount > availableFunds) {
			throw "Insuffient funds"
		}
		let transaction = {
			id: Math.random() * 100000,
			name: name,
			amount: amount,
			type: 'purchase',
			isFinal: false,
			time: moment().format(DATE_FORMAT)
		}
		this.data.account.transactions[transaction.id] = transaction
		this.data.account.hold += amount
		return transaction
	}
	charge(transactionId) {
		let transaction = this.data.account.transactions[transactionId]
		this.data.account.hold -= amount
		this.commit(transaction)
	}
	commit(transaction) {
		transaction.isFinal = true
		this.data.account.transactions[transaction.id] = transaction
		this.data.account.balance += amount
	}
	pay(amount) {
		let transaction = {
			id: Math.random() * 1000,
			name: 'Payment Thank You',
			type: 'payment',
			amount: amount,
			time: nmoment().format(DATE_FORMAT)
		}
		this.commit(transaction)
	}

	createMonthlyInvoice() {
		if (this.data.account.balance > 0) {
			this.chargeInterest()
			await let lowestAmountToPay = this.data.account.balance / 24
			if (lowestAmountToPay < 150 && lowestAmountToPay < this.data.account.balance) {
				lowestAmountToPay = this.data.account.balance
			}

			let invoice = {
				id: Math.random() * 10000,
				name: 'Monthly invoice',
				dueDate: this.now.add(14, 'days').format(DATE_FORMAT),
				amount: this.data.account.balance,
				lowestAmount: lowestAmountToPay,
				invoiceDate: this.now.format(DATE_FORMAT),
				paidAmount: 0,
				statement: {
					transactions: Object.values(this.account.transactions)
				},
				type: 'monthly'
			}
			this.data.account.invoices[invoice.id] = invoice
		}
	}

	createReminder(invoice) {
		if (this.data.account.balance > 0) {
			this.chargeInterest()
			let lowestAmountToPay = this.data.account.balance / 24
			if (lowestAmountToPay < 150 && lowestAmountToPay < this.data.account.balance) {
				lowestAmountToPay = this.data.account.balance
			}

			let invoice = {
				id: Math.random() * 10000,
				name: 'Payment reminder',
				dueDate: this.now.add(14, 'days').format(DATE_FORMAT),
				amount: this.data.account.balance,
				lowestAmount: lowestAmountToPay,
				invoiceDate: this.now.format(DATE_FORMAT),
				paidAmount: 0,
				statement: {
					transactions: Object.values(this.account.transactions)
				},
				type: 'reminder',
				invoice: invoice
			}
			this.data.account.invoices[invoice.id] = invoice
			this.save()
		}
	}

	payInvoice(invoiceId, amount) {
		let invoice = this.data.account.invoices[invoiceId]
		if (!invoice) throw "Invalid invoice"
		invoice.paidAmount += amount

		this.commit({
			id: Math.random() * 1000,
			name: 'Payment',
			amount: -amount,
			type: 'payment',
			invoiceId: invoiceId
		})
	}

	chargeInterest() {
		let interestRate = this.data.account.interestRate
		let amount = this.data.account.amount * (this.data.account.interestRate / 12)

		let transaction = {
			id: Math.random() * 1000,
			name: 'Interest',
			type: 'interest',
			amount: amount,		
			time: moment().format(DATE_FORMAT)
		}
		this.commit(transaction)
		
	}
	save() {
		let strData = JSON.stringify(this.data)
		await AsyncStorage.setItem('data', strData)
	}

}

let collectify = new Collectify()
export default collectify
