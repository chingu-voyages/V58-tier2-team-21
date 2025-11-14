import {render, screen} from '@testing-library/react'
import Button from "../Button";

describe('Button', () => {
    it('should display element of role type button', () => {
        render(<Button>Click Me</Button>)
        
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Click Me')
    })
})