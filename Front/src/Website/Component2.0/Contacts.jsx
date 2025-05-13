import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contacts = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
       <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        className='grid gap-6 grid-cols-1 lg:grid-cols-1 md:grid-cols-1 py-[120px]'>
        <div className='shadow-2xl rounded-t-full py-10 px-12 backdrop-blur-md  mx-auto bg-white'>

          <h2 className='font-bold text-xl text-center pb-8'>Get In Touch</h2>
          <div className='pt-2 pb-3'>
            <input type="text" placeholder='Enter the Name' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 focus:border-blue-400 -z-10' />
            <PersonIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="email" placeholder='Enter the Email' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <EmailRoundedIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="password" placeholder='Enter the Password' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <LockRoundedIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <textarea name="message"  placeholder='Write your Message' className='h-12 w-56 pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500'/>
          </div>


          <div className='pt-4 pb-3'>
          <Link to="/"><button className='text-black bg-transparent shadow-xl px-4 py-2 mx-14 font-bold rounded-lg border border-black transition duration-500 hover:scale-110  hover:font-bold hover:bg-cyan-400'>Send Message </button></Link>
          </div>

       </div>
     </div>
    

  
    </>
  )
}

export default Contacts;
