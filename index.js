const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/api/hello', async (req, res) => {

    res.send('Hi Guys! It is my first Azure and GitHub Test!!')
})

app.get('/api/env', async (req, res) => {

    const mongoStr = process.env.CUSTOMCONNSTR_mongo
    const somekey = process.env.somekey
    const text = JSON.stringify(process.env)
    res.send(text)
})


app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünyalı, Nasılsın?')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})