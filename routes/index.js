const express = require('express')
const api = express.Router()

const auth = require('../middleware/auth')

//Controllers

api.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With')
	res.header('Access-Control-Allow-Credentials', true)
	next()
})

api.get('/', (req, res) => {
	res.render('index')
})

module.exports = api