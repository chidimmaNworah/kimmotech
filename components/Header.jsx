import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { AuthorProfile } from '.';
import { getPosts, getAuthorPosts, getCategories } from '../services';
import { useRouter } from 'next/router';
import 'react-ionicons'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    const {asPath} = useRouter()

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    // const [isMobile, setIsMobile] = useState(false)

    // const [query, setQuery] = useState()
    // const data = getPosts()

    // const search = () => {
    //     console.log(1)
    // }

    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm mb-10">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2 font-serif textcolor1">Favourite Tech Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={asPath === '/' ? "pb-1 border-bottom border-primary" : "pb-1"}>Home</Nav.Link>
            {/* <Nav.Link href="/portfolio" className={asPath === '/portfolio' ? "pb-1 border-bottom border-primary" : "pb-1"}>Portfolio</Nav.Link> */}
            <Nav.Link href="/blog" className={asPath === '/blog' ? "pb-1 border-bottom border-primary" : "pb-1"}>Blog</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            {categories.map((category) => (
              <NavDropdown.Item href={`/category/${category.slug}`}>{category.name}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/portfolio">
                All Projects
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tags" id="basic-nav-dropdown">
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
            <Nav.Link href="/about" className={asPath === '/about' ? "pb-1 border-bottom border-primary" : "pb-1"}>About Us</Nav.Link>
            <Nav.Link href="/contact" className={asPath === '/contact' ? "pb-1 border-bottom border-primary" : "pb-1"}>Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        // <div className="w-full mx-auto mb-8 sticky bg-[#F2F2F3] top-0 z-10 drop-shadow-lg text-neutral-content">
        //     <div className="flex w-full">
        //         <div className="flex-1 p-3 mx-2">
        //             <Link href="/">
        //                 <span className="cursor-pointer text-[#4D4D4D] font-bold font-serif text-2xl">
        //                     Favourite Tech Solutions
        //                 </span>
        //             </Link>
        //         </div>

        //         <div className='flex-end items-stretch font-serif text-base p-4 mr-2 cursor-pointer'>
        //             <div className={isMobile ? "nav-links nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        //             <div className='block'>
        //                 <Link href="/">
        //                     <span className={asPath === '/' ? "btn btn-ghost btn-sm rounded-btn px-2 border-b-2 border-amber-300" : "btn btn-ghost btn-sm rounded-btn px-2"}>
        //                         HOME
        //                     </span>
        //                 </Link>
        //             </div>
        //             <div className='block'>
        //             <Link href="/portfolio">
        //                 <span className={asPath === '/portfolio' ? "btn btn-ghost btn-sm rounded-btn px-2 border-b-2 border-amber-300" : "btn btn-ghost btn-sm rounded-btn px-2"}>
        //                     PORTFOLIO
        //                 </span>
        //             </Link>
        //             </div>
        //             <div className='block'>
        //             <Link href="/blog">
        //                 <span className={asPath === '/blog' ? "btn btn-ghost btn-sm rounded-btn px-2 border-b-2 border-amber-300" : "btn btn-ghost btn-sm rounded-btn px-2"}>
        //                     BLOG
        //                 </span>
        //             </Link>
        //             </div>
        //             <div className='block'>
        //             <Link href="/about">
        //                 <span className={asPath === '/about' ? "btn btn-ghost btn-sm rounded-btn px-2 border-b-2 border-amber-300" : "btn btn-ghost btn-sm rounded-btn px-2"}>
        //                     ABOUT
        //                 </span>
        //             </Link>
        //             </div>
        //             {/* <div className='block'>
        //                 <button className="p-2" id='menu-btn'>Categories</button>
        //                 <div className="flex flex-col mt-1 p-2 text-sm w-32">
        //                 {categories.map((category) => (
        //                     <Link key={category.slug} href={`/category/${category.slug}`}>
        //                         <span className={asPath === '/category' ? "btn btn-ghost btn-sm rounded-btn px-2 border-b-2 border-neutral-300" : "btn btn-ghost btn-sm rounded-btn px-2"}>
        //                             {category.name}
        //                         </span>
        //                     </Link>
        //                     ))}
        //                 </div>
        //             </div> */}
        //             </div>
        //             <button className='mobile-menu-icon'
        //         onClick={() => setIsMobile(!isMobile)}
        //         >
        //             {isMobile ? (<ion-icon name="close-outline"></ion-icon>) : (<ion-icon name="menu-outline"></ion-icon>)}
        //         </button>
        //         </div>
                
        //     </div>
            
        // </div>
    
    )
}

export default Header

export async function getStaticProps() {
    const posts = (await AuthorProfile()) || []
  
    return {
      props:{author}
    }
  }
  