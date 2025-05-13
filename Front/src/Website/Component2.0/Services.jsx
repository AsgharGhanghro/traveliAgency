import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const service = [
    {
        icon: <ElectricBoltIcon />,
        title: 'Fast delievery',
        descrption: 'Nike offers rapid delivery for its shoes, ensuring you get your new kicks quickly. With streamlined processing and shipping, you can expect swift arrival.'
    },
    {
        icon: <GppGoodIcon />,
        title: 'Good Quality',
        descrption: 'Nike shoes are known for their durability, comfort, and innovative design, offering excellent support and performance for athletes and casual wearers alike.'
    },
    {
         icon: <Battery6BarIcon />,
        title: 'Garrenty 100%',
        descrption: 'Nike offers a guarantee on certain shoes, providing up to 100 days for returns or exchanges, ensuring customer satisfaction with quality and fit.'
    },
    {
        icon: <LocalShippingIcon />,
        title: 'Free Shipping',
        descrption: 'Enjoy free shipping on Nike shoes! Shop the latest styles and get your favorite pairs delivered straight to your door at no extra cost.'
    },
    {
        icon: <AttachMoneyIcon />,
        title: 'Secure Payment',
        descrption: 'Nike ensures secure payment through encryption and fraud protection measures, safeguarding customer data and transactions during online purchases of their shoes and apparel.'
    },
    {
         icon: <AccessibilityNewIcon />,
        title: 'Customer Support',
        descrption: 'Nike offers customer support for shoe-related inquiries through multiple channels, including phone, chat, and email, providing assistance with orders, returns, and product issues.'
    },
    
]
const Services = () => {
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
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110 pt-16'>Our Services</h3>
       <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3'>
        {
        service.map((items,index)=>(
           <div  key={index} className='bg-white text-black rounded-lg shadow-md flex flex-col  items-center px-6 p-14 cursor-pointer
            tranform transition duration-300 hover:-translate-y-5  hover:shadow-slate-800 hover:bg-cyan-400 hover:text-black'>
        
            <div className='text-4xl mb-3'>{items.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{items.title}</h3>
                <p className='text-grey-600'>{items.descrption}</p>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>
  )
}

export default Services;
