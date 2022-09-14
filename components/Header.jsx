import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import { getPosts, getTags, getCategories } from '../services';
import { useRouter } from 'next/router';
import 'react-ionicons'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import {ImMenu} from 'react-icons/im'
import {BiSearchAlt} from 'react-icons/bi'



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navbarBackground, setNavbar] = useState(false)

  const handleMenuButtonClick = () => setMenuOpen(!menuOpen)

  const changeNavBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeNavBackground)
  }, [])

  // useEffect(() => {
    
    // }, [])
    // const [searchTerm, setSearchTerm] = useState("")
    // const values = Object.entries(getTags)
    // const filtered = values.filter(val => 
    //   val.name.toLowerCase().includes(searchTerm.toLowerCase()))

    // const {asPath} = useRouter()

    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     getCategories()
    //         .then((newCategories) => setCategories(newCategories))
    // }, [])

    return (
      <div className='header1'>    
    <div>
      <nav id='navbar' className={navbarBackground ? 'navbar-active' : 'navbar'}>
        <div className={`menu ${menuOpen ? `menu-open` : `menu-closed`}`}>
          <div>
            <a href="#" className='brand'>Menu</a>
            <ul className='brandList'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Projects</Link></li>
              <li><Link href="/blog" target='_blank'>Blog</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>

            {/* social media links */}
            <ul className='social-media'>
              <li><a href="https://www.facebook.com/Kimmotech-100529069435679/">
              <FaFacebookSquare />
              </a></li>
              <li><a href="https://www.instagram.com/kimmotech/">
              <FaInstagramSquare />
              </a></li>
              <li><a href="https://github.com/chidimmaNworah/kimmotech">
              <FaGithubSquare />
              </a></li>
              <li><a href="https://www.youtube.com/channel/UCAS5-1vY1utqRudf_qtZksQ">
              <FaYoutubeSquare />
              </a></li>
            </ul>
            {/* search bar */}
            <form action="">
              <div className="input-wrap">
                <input type="search" placeholder='Search...' />
                <button type='submit'>
                  <BiSearchAlt />
                </button>
              </div>
            </form>

          </div>
        </div>
        {/* desktop nav */}
        <div className="container1">
          <a href="/" className="logo"><img src="/logo.png" alt="logo" /></a>
          <div className="container-inner">

            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Projects</Link></li>
              <li><Link href="/blog" target='_blank'>Blog</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>

            <form action="">

              <div className="input-wrap">
                <input type="search" placeholder='Search...' className='text-is-white' />
                <button type='submit'>
                <BiSearchAlt />
                </button>
              </div>

            </form>
          </div>
          <ImMenu className='fa-bars' id='menu-btn' onClick={handleMenuButtonClick} />
        </div>
      </nav>
    </div>
    </div>
    )
}

export default Header

// export async function getStaticProps() {
//     const posts = (await AuthorProfile()) || []
  
//     return {
//       props:{author}
//     }
//   }
  