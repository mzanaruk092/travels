import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*Left Side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className=' row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className=' row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className=' row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className=' row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className=' row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
        {/*Rigt side*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi doloribus fuga accusamus similique nihil consequatur debitis maxime iste cum, amet iure delectus? Aliquam excepturi ut veritatis iste asperiores quae consectetur.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi dignissimos incidunt odio tempora cupiditate cumque saepe soluta ea nemo, deleniti dolores magni iure modi consequuntur, fuga ducimus distinctio praesentium?</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan