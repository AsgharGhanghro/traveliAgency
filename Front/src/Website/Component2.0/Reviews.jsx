import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const review = [
    {
        image: '/Image/mal1.png',
        name: 'Ali Asghar',
        title: 'kandiaro',
        descrption: 'Nike shoes offer excellent comfort, durability, and style. With advanced cushioning and sleek designs, they cater to athletes and casual wearers alike. Highly recommended.'
    },
    {
         image: '/Image/fem2.png',
         name: 'Shanaya Chohan',
        title: 'Mithi',
        descrption: 'Nikes free delivery service offers convenience and value, enhancing the shopping experience with fast, reliable shipping at no extra cost for eligible orders.'
    },
    {
         image: '/Image/fem3.png',
         name: 'Soo Zac',
        title: 'Kashmir',
        descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
    },
    {
        image: '/Image/mal1.png',
        name :'Asharaf Ali',
       title: 'Hydrabad',
       descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
   },

   {
    image: '/Image/fem4.png',
    name: 'Natasha',
    title: 'Karachi',
    descrption: 'Nike shoes offer excellent comfort, durability, and style. With advanced cushioning and sleek designs, they cater to athletes and casual wearers alike. Highly recommended.'
},
{
     image: '/Image/fem5.png',
     name: 'Shreya',
    title: 'Multan',
    descrption: 'Nikes free delivery service offers convenience and value, enhancing the shopping experience with fast, reliable shipping at no extra cost for eligible orders.'
},
{
     image: '/Image/mal3.png',
     name: 'Ahmed',
    title: 'Punjab',
    descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},
{
    image: '/Image/mal4.png',
    name: 'Mehmood',
   title: 'Pindi',
   descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},

{
  image: '/Image/mal5.png',
  name: 'Ali',
  title: 'Sukkur',
  descrption: 'Nike shoes offer excellent comfort, durability, and style. With advanced cushioning and sleek designs, they cater to athletes and casual wearers alike. Highly recommended.'
},
{
   image: '/Image/fem6.png',
   name: 'Chnadreneha Chohan',
  title: 'Kandiaro',
  descrption: 'Nikes free delivery service offers convenience and value, enhancing the shopping experience with fast, reliable shipping at no extra cost for eligible orders.'
},
{
   image: '/Image/mal6.png',
   name: 'Bashir Ali',
  title: 'Sialkot',
  descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},
{
  image: '/Image/fem7.png',
  name: 'Suneeta',
 title: 'Naushro Feroze',
 descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},

{
  image: '/Image/mal7.png',
  name: 'Ali Hassan',
  title: 'karachi',
  descrption: 'Nike shoes offer excellent comfort, durability, and style. With advanced cushioning and sleek designs, they cater to athletes and casual wearers alike. Highly recommended.'
},
{
   image: '/Image/mal8.png',
   name: 'kapil',
  title: 'Mithi',
  descrption: 'Nikes free delivery service offers convenience and value, enhancing the shopping experience with fast, reliable shipping at no extra cost for eligible orders.'
},
{
   image: '/Image/fem8.png',
   name: 'Hinashah',
  title: 'Bahawalpur',
  descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},
{
  image: '/Image/mal9.png',
  name: 'Aslam',
 title: 'Kinjhar',
 descrption: 'Nike shoes are known for their durability, comfort, and stylish designs. High-quality materials and innovative technology make them a popular choice for athletes and casual wearers.'
},
]
const Reviews = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='py-10 bg-gray-100 pb-10'>
      <div  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className='container mx-auto  py-16 ' >
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110'>Clients Reviews</h3>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4'>
        {
        review.map((items,index)=>(
           <div key={index} className='bg-white rounded-2xl shadow-md text-center  cursor-pointer p-4
            tranform transition duration-300 hover:-translate-y-3.5 hover:shadow-slate-700 hover:bg-cyan-400'>
        
              <img src={items.image} alt=""  className='w-32 h-32 rounded-full mb-2 mx-auto pt-6'/>
              <h2 className='text-xl font-bold mb-2'>{items.name}</h2>
                <h3 className='text-grey-600 text-sm mb-2'>{items.title}</h3>
                <p className='text-grey-600 italic pb-7'>{items.descrption}</p>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>
  )
}

export default Reviews;
