
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
const[Open , setOpen] = useState(false)

useEffect(()=>{
  AOS.init()
},[])

  return (
    
    <nav data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" 
     className=' fixed m-5 top-0 left-3 right-3 bg-black rounded-r-full z-50'>

    <div data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"  className='container px-4 flex justify-between items-center h-16 shadow-lg '>
        <h className='text-2xl text-white font-bold px-6 py-2 rounded-md cursor-pointer  hover:shadow-xl hover:bg-cyan-400'>Nike </h>

        <div className='hidden md:flex items-center font-bold text-sm space-x-4'>
        
            <Link  to="/" className='text-white bg-cyan-400 no-underline px-6 py-2  rounded-md  hover:bg-white hover:shadow-xl hover:text-cyan-400'>Home</Link>   
            <Link to="/products" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Products</Link>
            <Link to="/services" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Service</Link>
            <Link to="/reviews" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Review</Link>
            <Link to="/abouts" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>About</Link>
           <Link to="/contacts" className=' px-6 py-2 shadow-xl  rounded-md   text-white font-bold  hover:bg-cyan-400'>Contact</Link>
        </div>

        <div className='md:hidden text-cyan-400'>
          <button onClick={() => setOpen(!Open)}>
            {Open ? <ClearIcon /> :<MenuIcon />}
          </button>
        </div>
    </div>
    {Open && (
       <div className=' md:hidden flex items-center  font-bold text-sm space-y-6 py-4 flex-col'>
        
       <Link  to="/" className='text-white no-underline px-6 py-2  rounded-md  hover:bg-cyan-400 hover:shadow-xl hover:text-white'> Home</Link>   
       <Link to="/products" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Products</Link>
            <Link to="/services" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Service</Link>
            <Link to="/reviews" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>Review</Link>
            <Link to="/about" className='text-white no-underline px-6 py-2  rounded-md hover:bg-cyan-400 hover:text-white'>About</Link>
           <Link to="/contacts" className=' px-6 py-2 shadow-xl  rounded-md   text-white font-bold  hover:bg-cyan-400'>Contact</Link>
   </div>
    )}
    </nav>
  )
}

export default Navbar;
