import { Router } from "express"
import express from 'express'

const routes = express.Router()

routes.post('/certification', async (req, res) => {

    // chamar micro serviço´

    return res.json('oi')
})

export default routes