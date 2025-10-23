const express = require('express')
const loginRoutes = require('./routes/loginRoutes')
const app = express()
const port = 3000

// Registers .html as ejs views
// Means we don't have to call "chat.html" each time
app.engine('.ejs', require('ejs').__express)

// Load the static files
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use('/login', loginRoutes)

// When the blank route is called
app.get('/', (req, res) => {
    // render the chat.html view
    res.render('home')
})

app.listen(port, () => {
    console.log(`Web Chat App listening on port ${port}`)
})