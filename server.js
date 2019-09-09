const express = require('express')
const app = express()
const PORT = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`This really awesome app listening on port ${port}!`))

app.listen(process.env.PORT || PORT, () => {
	console.log("Server started", PORT);
});

app.use(express.static('web'))

app.get('/:name', function (req, res, next) {
	var options = {
		root: 'web',
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}

	var fileName = req.params.name
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err)
		} else {
			console.log('Sent: ', fileName)
		}
	})
})