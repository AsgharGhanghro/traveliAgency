import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Abouts = () => {
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
     className='container mx-auto px-6 py-[130px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10'>
        
        <div>
          <img src="/Image/nike.png" alt="" className='overflow-hidden rounded-lg border border-blue-200 cursor-pointer shadow-2xl transform transition duration-500
          hover:scale-110  px-4 py-6'/>
        </div>
        <div className='h-full w-full rounded-lg  border border-blue-200  cursor-pointer p-5 shadow-2xl transform transition duration-500
          hover:scale-110'>
          <h2 className='font-bold text-2xl  transform transition duration-300'>Who We Are</h2>
          <p className='pt-4 font-thin gap-1 '>Welcome to Nike Shoes for men, your ultimate destination for authentic Nike shoes. We're passionate about bringing you the latest styles, innovative technology, and exceptional quality that Nike is known for.
          </p>

          <h2 className='pt-6 font-bold text-2xl  transform transition duration-500'>Our Mission</h2>
          <p className='pt-4 font-thin gap-1'>Our mission is to provide an unparalleled online shopping experience, offering a vast selection of Nike shoes for men, women, and kids. We strive to deliver exceptional customer service, timely shipping, and competitive pricing.
          </p>
        </div>
      </div>
    </div>

   
    </>
  )
}

export default Abouts;
