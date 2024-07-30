import { Request, Response } from 'express'
import luhn from 'luhn'

const validateCreditCard = (req: Request, res: Response): void => {
  console.log(req.body)

  const { creditCardNumber } = req.body

  const isValid = luhn.validate(creditCardNumber)

  if (isValid) {
    res.status(200).json({ valid: true, message: 'Credit card is valid.' })
    return
  }

  res.status(400).json({
    valid: false,
    message: 'Invalid credit card number.',
  })
}

export { validateCreditCard }
