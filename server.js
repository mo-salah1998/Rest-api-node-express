require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connection to database opened'))

app.use(express.json())
const subscribersRoute = require('./routes/subscribers')
app.use('/subscribers',subscribersRoute)

app.listen(3000, () => console.log('server started'))