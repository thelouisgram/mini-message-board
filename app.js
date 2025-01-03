const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index')

const app = express()

//Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', indexRouter)

//Start Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))