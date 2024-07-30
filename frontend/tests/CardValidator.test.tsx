import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import CreditCardValidator from '../src/components/CardValidator'

vi.mock('../src/utils/helpers', () => ({
  validateCreditCardReq: vi.fn(),
}))

describe('CreditCardValidator', () => {
  test('renders the form correctly', () => {
    render(<CreditCardValidator />)

    expect(screen.getByLabelText('Credit Card')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Validate/i })
    ).toBeInTheDocument()
  })

  test('handles input change and formatting', () => {
    render(<CreditCardValidator />)

    const input = screen.getByLabelText('Credit Card') as HTMLInputElement
    fireEvent.change(input, { target: { value: '4111111111111111' } })

    expect(input.value).toBe('4111111111111111')
  })
})
