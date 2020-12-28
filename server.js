const express = require('express')

var PORT = process.env.PORT || 3000;
const app = express()

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(require('./controllers'))

app.listen(PORT, function () {
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});
