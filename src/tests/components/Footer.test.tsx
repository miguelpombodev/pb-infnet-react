import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from '../../components/Footer'

describe('Footer Component', () => {
  it("it should render Terms and Rules in Footer Component", () => {
    render(<Footer />)
    const textInFooter = screen.getByText("Termos e Regras")
    expect(textInFooter).toBeInTheDocument()
  })

  it("it should render Privacy Policies in Footer Component", () => {
    render(<Footer />)
    const textInFooter = screen.getByText("Política de Privacidade")
    expect(textInFooter).toBeInTheDocument()
  })

  it("it should render Help in Footer Component", () => {
    render(<Footer />)
    const textInFooter = screen.getByText("Ajuda")
    expect(textInFooter).toBeInTheDocument()
  })

  it("it should render Portal Forum Gamer in Footer Component", () => {
    render(<Footer />)
    const textInFooter = screen.getByText("Portal Forum Gamer")
    expect(textInFooter).toBeInTheDocument()
  })
})