import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(routes)

const kafka = new Kafka({
    clientId:'api',
    brokers:['kafka:9092',]
})

async function run(){
    // await producer.connect()
    
    app.listen(3000, console.log('server running'))
}

run().catch(console.error)
// const producer = Kafka.producer()


