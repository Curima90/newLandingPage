import { useState } from 'react'
import Navtab from './Navtab'
import Cards from './Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Nav } from 'react-bootstrap'




function App() {

  return (
    <>
      <Navtab></Navtab>
      <Container>
        <Container className={'bg-light my-4'}>
          <h1>A Warm Welcome!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, non architecto? Odio quisquam molestiae iste facere! Dolor, perferendis corporis molestias atque doloribus exercitationem ab non voluptate quidem magni magnam delectus?</p>
          <Button className={'btn-primary'} size="lg" active>
            Call to Action!
          </Button>{' '}
        </Container>
        <Cards></Cards>
      </Container>
      <Nav className={"d-flex justify-content-center p-4 bg-secondary text-light"}>
        <div>Copyright Your Website 2024</div>
      </Nav>
    </>
  )
}

export default App
