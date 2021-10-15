import React from 'react'
import { render, screen } from '@testing-library/react'
import Dashboard from '../../../pages/Dashboard'

describe('<Dashboard />', () => {
    test('should display at least one item from the list of coins', async () => {
        render(<Dashboard />)
        const viewMoreElement = screen.getAllByText(/View details/i)
        expect(viewMoreElement.length).toBeGreaterThan(0)
    })
})
