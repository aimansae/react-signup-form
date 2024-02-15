import { render,screen } from "@testing-library/react"
import Text from "./Text"

test('h1 contains a text', ()=>{
    render(<Text/>)
    const textElement = screen.getByRole('heading', {level:1})
    expect(textElement).toHaveTextContent('This is a header')
})