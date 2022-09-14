import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import { getPosts, getTags, getBlogCategories } from '../services';
import { useRouter } from 'next/router';
import 'react-ionicons'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import {ImMenu} from 'react-icons/im'
import {BiSearchAlt} from 'react-icons/bi'



const BlogHeader = () => {
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

  //get blog categories
  const [blogCategories, setCategories] = useState([]);

  useEffect(() => {
    getBlogCategories()
      .then((newCategories) => setCategories(newCategories))
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
            <a href="#" className='brand'>MENU</a>

            <ul className='brandList'>
              <li><Link href="/blog">Home</Link></li>
              <li><Link href="#">Business</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
              <li><Link href="#about">About Us</Link></li>
            </ul>

            <a href="#" className='brand mb-8'>Categories</a>
            {blogCategories.map((category) => (
            <Link href={`/blogcategory/${category.slug}`}>
              <span className="cursor-pointer text-center mb-3">
                {category.name}
              </span>
            </Link>
            ))}

            {/* social media links */}
            <ul className='social-media'>
              <li><Link href="https://www.facebook.com/Kimmotech-100529069435679/">
              <FaFacebookSquare />
              </Link></li>
              <li><Link href="https://www.instagram.com/kimmotech/">
              <FaInstagramSquare />
              </Link></li>
              <li><Link href="https://github.com/chidimmaNworah/kimmotech">
              <FaGithubSquare />
              </Link></li>
              <li><Link href="https://www.youtube.com/channel/UCAS5-1vY1utqRudf_qtZksQ">
              <FaYoutubeSquare />
              </Link></li>
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
              <li><Link href="/blog">Home</Link></li>
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

export default BlogHeader

// export async function getStaticProps() {
//     const posts = (await AuthorProfile()) || []
  
//     return {
//       props:{author}
//     }
//   }
  