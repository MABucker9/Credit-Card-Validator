import React,{ useState, ChangeEvent, FormEvent } from 'react'
import { toast } from 'react-toastify'

import { validateCreditCardReq } from '../utils/helpers'

const CreditCardValidator = () => {
  const [creditCardNumber, setCreditCardNumber] = useState<string>('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const numericValue = newValue.replace(/\D/g, '')
    if (numericValue.length <= 19) {
      setCreditCardNumber(numericValue)
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const response = await validateCreditCardReq(creditCardNumber)
      const data = await response.json()
      if (data.valid) {
        toast.success(data.message)
        return
      }
      toast.error(data.message)
    } catch (error) {
      toast.error('An error occurred while validating the credit card.')
    }
  }

  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='creditCardNumber' className='creditCardNumber'>
            Credit Card
          </label>
          <input
            type='text'
            id='creditCardNumber'
            value={creditCardNumber}
            onChange={handleInputChange}
            required
            className='form-control'
            maxLength={19}
          />
        </div>
        <button type='submit' className='btn'>
          Validate
        </button>
      </form>
    </div>
  )
}

export default CreditCardValidator
