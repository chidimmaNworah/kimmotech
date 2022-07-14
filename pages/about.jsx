import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import Link from 'next/link';
import {Brands, ReviewForm, Reviews} from '../components'

const about = () => {

  return (
    <div>
        <div className='w-full mx-0 bg-[#fafafa] mt-10'>
            <div className="container w-full mx-auto px-4">
                <div className="flex mb-20 items-end text-[#4D4D4D] font-serif">
                    <div className="flex items-center">
                    <div className="mr-5 py-5">
                        <div className='flex'>
                            <h5><a href="/portfolio" style={{textDecoration: 'none', color: '#001973'}} className="px-2">Portfolio</a></h5>
                            <h5><a href="/blog" style={{textDecoration: 'none', color: '#001973'}} className="px-2">Blog  </a></h5>
                            <h5 className="px-2"> |</h5>
                            <h6 className="px-2">
                                {moment().format('MMM DD, YYYY')}
                            </h6>
                        </div>
                        <h1>FAVOURITE TECH SOLUTIONS: THE DIGITAL INTERDEPENDENCE</h1>
                        <div className="">
                            <Link href='/portfolio'>
                                <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-[#001973] text-sm font-meduim rounded text-white px-1 py-1 cursor-pointer">
                                    Discover more
                                </span>
                            </Link>
                        </div>
                    </div>
                    <img src="headicon.png" alt="fts" className="heading2 h-80"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container w-full mx-auto px-4">
            <i>Even though Favourite Tech Solutions has been existing for years before its first appearance on the web. Recently, Favourite Tech Solutions celebrated its 3years anniversary. Our company and our ambitions grew since our beginning. For our 3 years anniversary, we wanted to clarify our vision to all of you. We wanted to make clear what we struggle to do for you everyday, how we do it and what is the rooted purpose behind our company</i>
            <p>People have always Protected what they hold precious. When things were tangible, trust was visible. <br /> But the world has changed <br /> <br /> Today, we are at the confluence of trends: a global trust crisis and global dataisation. In 15 years, there will be a trillion devices connected online. As more and more of our lives become digital, the threats we face will not be stopped by walls or physical armies. <br /> <br /> Critical digital assets are the new oil and securing them is the important challenge for the coming years. <br /><br /><b>Thats's where we come in. We are the Favourite Tech Solutions</b><br /><br />We are a unique digital company that provides a meduim to build everything you can think of as well as protect it in the digital world. In today's world, we know that trust deserves proof. This is why we provide transparency into how our technology works. <br /><br />We relentlessly stress-test our own technology solutions. Our FTS team is made up of world-class experts with extensive backgrounds in the security and development industries. They continuously look for vulnerabilities on the FTS products as well as our providers' products in an effort to analyze and improve the functionality and security. We know quality means never standing still. <br /><br />What first started as an idea of designing graphics for organizations, businesses digital enthusiats has quickly evolved into the creation of a cutting edge digital technology company serving individuals, institutional investors and enterprises. This goes beyond websites and graphics. From connected pacemakers to software systems to digital optimization, there will be countless enterprises in the future that need to come online and secured. If they're not safe, they can be stolen or compromised, eventually hurting your wallet or even your life just like it happens in reality. <br /><br />And through resilience, we give our clients and customers the ability to recover from setbacks, quickly adapt to technology, change and keep going in the face of adversity. Resilience empowers our clients to explorw and embrace pioneering opportunities like never before.</p>
        </div>
        <Brands />
        <ReviewForm />
    </div>
  )
}

export default about