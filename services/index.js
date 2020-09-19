let jwt = require('jsonwebtoken')
let moment = require('moment')
let config = require('../GlobalEnv')

function createToken(user) {
	const payload = {
		exp: moment()
			.add(1, 'days')
			.unix(),
		sub: user._id,
		profile: user.profile,
		name: user.name,
		email: user.email,
		iat: moment().unix()
	}
	return jwt.sign(payload, config.token_secret)
}

function decodeToken(token) {
	let params = []
	const decoded = new Promise((resolve, reject) => {
		jwt.verify(token, config.token_secret, (err, user) => {
			if (err) {
				params.message = err
				params.status = 401
				params.code = '0003'
				reject(params)
			} else {
				params.message = ''
				params.status = 200
				params.code = '0004'
				params.response = {
					user: user
				}
				resolve(params)
			}
		})
	})

	return decoded
}

module.exports = {
	createToken,
	decodeToken
}