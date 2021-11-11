import { Container, Navbar, NavbarBrand } from 'reactstrap'

import CalendarView from './containers/CalendarView'

function App() {
  return (
    <div>
      <Navbar color="white">
        <NavbarBrand>
          <img
            src="https://assets-global.website-files.com/5fe8b4ae572628beea194673/5fe8c009305f86701eea90cc_02%20(1).png"
            height={32}
          />
        </NavbarBrand> 
      </Navbar>
      <Container className="pt-5">
        <CalendarView />
      </Container>
    </div>
  )
}

export default App
