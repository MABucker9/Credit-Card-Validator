export const validateCreditCardReq = async (creditCardNumber: string) => {
  const response = await fetch(
    'http://localhost:8000/api/validate-credit-card',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ creditCardNumber }),
    },
  )
  
  return response
}
