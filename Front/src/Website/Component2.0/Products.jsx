
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Link } from 'react-router-dom';

const product = [
  {
    image: '/Image/nk11.png',
    name: 'Nike Jordan',
    color:'color : Red',
     prize: '7000 pkr'
  },
  {
    image: '/Image/nk18.png',
    name: 'Nike Jordan',
    color:'color : Red',
     prize: '6549 pkr'
  },
  {
    image: '/Image/nk25.png',
    name: 'Nike Jordan',
    color:'color : Yellow',
     prize: '4550 pkr'
  },
  {
    image: '/Image/nk24.png',
    name: 'Nike Jordan',
    color:'color : Red',
     prize: '6550 pkr'
  },

  {
    image: '/Image/n30.png',
    name: 'Nike Jordan',
    color:'color : White',
     prize: '3000 pkr'
  },
  {
    image: '/Image/n32.png',
    name: 'Nike Jordan',
    color:'color : Gray',
     prize: '3550 pkr'
  },
  {
    image: '/Image/n33.png',
    name: 'Nike Jordan',
    color:'color : Greenish',
     prize: '5550 pkr'
  },
  {
    image: '/Image/n34.png',
    name: 'Nike Jordan',
    color:'color : Red',
     prize: '6349 pkr'
  },
    {
        image: '/Image/nike.png',
        name: 'Nike Air',
        color: 'color : Grayish',
        prize: '2000 pkr'
    },
    {
        image: '/Image/nike2.png',
        name: 'Nike Max',
        color: 'color : Radish',
         prize: '4500 pkr'
    },
    {
        image: '/Image/nk7.png',
        name: 'Nike Jordan',
        color:'color : Black',
         prize: '6550 pkr'
    },
    {
      image: '/Image/nike4.png',
      name: 'Nike Jordan',
      color:'color : Red',
       prize: '6550 pkr'
  },
  {
    image: '/Image/n34.png',
    name: 'Nike Jordan',
    color:'color : Sky',
     prize: '3550 pkr'
},
{
  image: '/Image/n17.png',
  name: 'Nike Jordan',
  color:'color : Red',
   prize: '9050 pkr'
},
{
  image: '/Image/nk5.png',
  name: 'Nike Jordan',
  color:'color : Red',
   prize: '2450 pkr'
},
{
  image: '/Image/n32.png',
  name: 'Nike Jordan',
  color:'color : White',
   prize: '1650 pkr'
},
{
  image: '/Image/nk8.png',
  name: 'Nike Jordan',
  color:'color : White',
   prize: '7849 pkr'
},
{
  image: '/Image/nk9.png',
  name: 'Nike Jordan',
  color:'color : yellow',
   prize: '5000 pkr'
},
{
  image: '/Image/nk16.png',
  name: 'Nike Jordan',
  color:'color : Bluish',
   prize: '6449 pkr'
},
{
  image: '/Image/nike.png',
  name: 'Nike Jordan',
  color:'color : Gray',
   prize: '6740 pkr'
},

]

const Products = () => {
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
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110 pt-16'>Our Products</h3>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
        product.map((items,index)=>(
           <div  key={index} className='bg-white rounded-2xl  shadow-md flex flex-col  items-center px-6 pb-10 cursor-pointer 
            tranform transition duration-300 hover:scale-110  hover:shadow-slate-800 hover:bg-cyan-400 hover:border-cyan-400'>
      
              <img src={items.image} alt="" className='h-[200px] w-[200px] relative -top-4' />
           
                <h3 className='text-xl font-bold '>{items.name}</h3>
                <p className='text-grey-600 font-bold '>{items.color}</p>
                <p className='text-grey-600 font-bold pb-2'> < CurrencyRupeeIcon />{items.prize}</p>
                <div className='flex '>
                <StarIcon className='text-yellow-300 font-bold' /><StarIcon className='text-yellow-300 font-bold ' /><StarIcon className='text-yellow-300 font-bold ' /><StarIcon className='text-yellow-300 font-bold ' />  
               < StarHalfIcon className='text-yellow-300'/>
                </div>
               <Link to='/'><button className='text-black mt-6  font-bold text-xl py-2 px-6 rounded-lg shadow-2xl bg-cyan-400 border border-cyan-400 transform transition duration-500  hover:scale-110 hover:text-cyan-400 hover:bg-black'>Buy</button></Link> 
           </div>
           
            
        ))
        }
          
          </div>
      </div>
      
    </div>
  )
}

export default Products;
