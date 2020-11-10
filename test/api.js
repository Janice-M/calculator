const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

const expect = chai.expect

chai.use (chaiHttp)

const createFakeServer =()=> {
    const app = express()
    const apiPort = 30001

    const result = {
        message : 'Hello Rafiki ',
        value : 3.5,
        odds: [1,3,5,7,9],
        person :{
            id : 2013146,
            name: 'Jan Banan'
        }

    }
    app.get('/', (req, res)=>{

    })
}