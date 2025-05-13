import React, { useEffect } from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInRoundedIcon from '@mui/icons-material/LinkedIn';
import Service from './Service';
import Product from './Product';
import Review from './Review';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    AOS.init()
  },[])  

  return (
    <>
    <div className='realtive sm:flex justify-start items-center bg-gray-100 mt-[110px] md:mt-9 h-screen '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
        
        <div className='container  mx-auto px-6 '
         data-aos="fade-right"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="2000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false" >
      <h1 className='font-bold text-black text-3xl ml-7 '><span className='text-cyan-400 font-bold text-4xl '>Nike</span> Shoes</h1>
       <div className=' text-gray-500  space-x-5 gap-10 md:text-sm ml-3'>
        <div className='mt-7'>
          <p className='ml-4'>Nike, is an American multinational corporation that designs and manufactures footwear, apparel, and accessories. It was founded on January 25, 1964, by Bill Bowerman and Phil Knight as "Blue Ribbon Sports." The company officially became Nike, named after the Greek goddess of victory, in 1971.</p>
        </div>
       <Link to='/products'><button className='text-cyan-400 mt-6  font-bold text-xl py-2 px-4 rounded-lg shadow-2xl bg-black border transform transition duration-500  hover:scale-110 hover:text-black hover:bg-cyan-400 '>Show More</button></Link> 
       
         <div className='mt-6 text-xl space-x-5 mb-5  rounded-lg shadow-2xl'>
          <FacebookRoundedIcon size={80} className='text-blue-500 cursor-pointer hover:text-blue-600  transsfrom transition duration-500  hover:scale-150' />
          <InstagramIcon size={80} className='text-pink-500 cursor-pointer hover:text-pink-600  transsfrom transition duration-500 hover:scale-150' />
          <TwitterIcon size={80} className='text-black cursor-pointer hover:text-black  transsfrom transition duration-500 hover:scale-150' />
          <LinkedInRoundedIcon size={80} className='text-blue-700 cursor-pointer hover:text-blue-800  transsfrom transition duration-500  hover:scale-150'  />
         </div>

        </div>
       </div>
       <div data-aos="fade-left"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="2000"
         data-aos-easing="ease"
         data-aos-mirror="true"
         data-aos-once="false">
          <div  className=' cursor-pointer overflow-hidden md:ml-16 mt-2 transform transition duration-1000 hover:scale-125'>
       <img src="/Image/nike.png" alt=""  />
         </div>
       </div>
      </div>
    </div>
    
    <Product />
    <Service />
    <Review />
    </>
  )
}

export default Home;
