import express from 'express'
import { validateCreditCard } from '../controllers'

const router = express.Router()

router.post('/validate-credit-card', validateCreditCard)

export default router
