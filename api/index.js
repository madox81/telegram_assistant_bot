// import fastify
const app  = require('fastify')()

// import helper function
const bot = require('./helpers/bot')

app.post('/update', async (req, res) => {
	
	const message = new Object()
	if(req.body.callback_query){
		 message  = req.body.callback_query.message
		 message.data =  req.body.callback_query.data
	}else if (req.body.my_chat_member){
		message = req.body.my_chat_member
	}else{
		 message  = req.body.message
	}
	
	await bot.handleUpdates(message)
	res.code(200).send({})

})

// export 'app'
module.exports = app
