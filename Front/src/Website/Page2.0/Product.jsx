
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const product = [
    {
        image: '/Image/nk5.png',
        name: 'Nike Air',
        color: 'color : White',
        prize: '2000 pkr'
    },
    {
        image: '/Image/nk19.png',
        name: 'Nike Max',
        color: 'color : Greenish',
         prize: '4500 pkr'
    },
    {
        image: '/Image/n17.png',
        name: 'Nike Jordan',
        color:'color : Red',
         prize: '6550 pkr'
    },
]

const Product = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='py-16 bg-gray-100 '>
      <div data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false" className='container mx-auto px-4 '>
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110 pt-16'>Our Product</h3>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
        product.map((items,index)=>(
           <div  key={index} className='bg-white rounded-b-full  shadow-md flex flex-col  items-center px-6 pb-10 cursor-pointer 
            tranform transition duration-300 hover:scale-110  hover:shadow-slate-800 hover:bg-cyan-400 hover:border-cyan-400'>
      
              <img src={items.image} alt="" className='h-[200px] w-[200px] relative -top-4' />
           
                <h3 className='text-xl font-bold '>{items.name}</h3>
                <p className='text-grey-600 font-bold '>{items.color}</p>
                <p className='text-grey-600 font-bold pb-2'> < CurrencyRupeeIcon />{items.prize}</p>
                <div className='flex '>
                <StarIcon className='text-yellow-300 font-bold' /><StarIcon className='text-yellow-300 font-bold ' /><StarIcon className='text-yellow-300 font-bold ' /><StarIcon className='text-yellow-300 font-bold ' />  
               < StarHalfIcon className='text-yellow-300'/>
                </div>
                <button className='text-black mt-6  font-bold text-xl py-2 px-6 rounded-lg shadow-2xl bg-cyan-400 border border-cyan-400 transform transition duration-500  hover:scale-110 hover:text-cyan-400 hover:bg-black'>Buy</button>
           </div>
           
            
        ))
        }
          
          </div>
      </div>
      <div className='flex justify-center items-center py-1'>
         <Link to='/products'><button className='text-cyan-400 mt-6  font-bold text-2xl pyprize : py-2 px-4 rounded-lg shadow-2xl bg-black border transform transition duration-500  hover:scale-110 hover:text-black hover:bg-cyan-400 '>Show More</button></Link>
                </div>
    </div>
  )
}

export default Product;
