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

    }
}