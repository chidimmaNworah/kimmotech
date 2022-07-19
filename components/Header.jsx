import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getPosts, getTags, getCategories } from '../services';
import { useRouter } from 'next/router';
import 'react-ionicons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { filter } from 'domutils';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const values = Object.entries(getTags)
    const filtered = values.filter(val => 
      val.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const {asPath} = useRouter()

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="font-serif pr-10 textcolor1"><img src="/logo.png" alt="logo" width="250rem" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={asPath === '/' ? "pb-1 border-bottom border-muted" : "pb-1"}>Home</Nav.Link>
            {/* <Nav.Link href="/portfolio" className={asPath === '/portfolio' ? "pb-1 border-bottom border-primary" : "pb-1"}>Portfolio</Nav.Link> */}
            <Nav.Link href="https://fts-blog.vercel.app/" target="_blank" className={asPath === 'https://fts-blog.vercel.app/' ? "pb-1 border-bottom border-primary" : "pb-1"}>Blog</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown" className='text-dark'>
            {categories.map((category) => (
              <NavDropdown.Item key={category.slug} href={`/category/${category.slug}`}>{category.name}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/portfolio">
                All Projects
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tags" id="basic-nav-dropdown" className='text-dark'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className={asPath === '/about' ? "pb-1 border-bottom border-muted" : "pb-1"}>About Us</Nav.Link>
            <Nav.Link href="/contact" className={asPath === '/contact' ? "pb-1 border-bottom border-muted" : "pb-1"}>Contact Us</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value)
                console.log(event.target.value)
              }} 
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <p>{filtered}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    
    )
}

export default Header

export async function getStaticProps() {
    const posts = (await AuthorProfile()) || []
  
    return {
      props:{author}
    }
  }
  