import AsyncStorage from '../storage'

class Collectify {
	async load() {
		let strData = await AsyncStorage.getItem('data')
		if (strData) {
			this.data = JSON.parse(strData)
		} else {
			this.data = {
				time: '2018-08-18 00:00:00',
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

	get date() {
		return moment(this.data.date, 'YYYY-MM-DD h:mm')
	}
	set date(value) {
		this.data.date = moment(value).format('YYYY-MM-DD h:mm')
	}

	async authorize(amount, name) {
		let availableFunds = this.data.account.credit - (this.data.account.balance + this.data.account.hold)
		if (amount > availableFunds) {
			throw "Insuffient funds"
		}
		if (amount > )
		let transaction = {
			id: Math.random() * 1000,
			name: name,
			amount: amount,
			type: 'purchase',
			isFinal: false,
			time: new Date()
		}
		this.data.account.transactions[transaction.id] = transaction
		this.data.account.hold += amount
		this.save()
		return transaction
	}
	async charge(transactionId) {
		let transaction = this.data.account.transactions[transactionId]
		this.data.account.hold -= amount
		this.commit(transaction)
		this.save()
	}
	async commit(transaction) {
		transaction.isFinal = true
		this.data.account.transactions[transaction.id] = transaction
		this.data.account.balance += amount
		this.save()
	}
	async pay(amount) {
		let transaction = {
			id: Math.random() * 1000,
			name: 'Payment Thank You',
			type: 'payment',
			amount: amount,
			time: new Date()
		}
		this.commit(transaction)
	}
	chargeInterest() {
		let interestRate = this.data.account.interestRate
		let amount = this.data.account.amount * (this.data.account.interestRate / 12)

		let transaction = {
			id: Math.random() * 1000,
			name: 'Interest',
			type: 'interest',
			amount: amount,		
			time: new Date()	
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
