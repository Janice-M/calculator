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
        res.send(result)

    })
    app.listen(apiPort)
    
    return app
}



describe ('API', ()=> {
    describe('GET/', ()=> {
        let fakeServer

        beforeEach(()=>{
            fakeServer= createFakeServer()
        })
            it ('should return the object', (done)=>{
            chai.request(fakeServer)
            .get("/")
            .end((err, res)=>{
                expect(err).to.be.null
                expect(res).to.have.status(200)

                expect(res.body).to.be.a('object')

                expect(res.body).to.have.property('message')

                expect(res.body).to. have.property('value')
                expect(re)
            })
            })
    })
})