import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eligendi mollitia consequuntur tempore, ad illum dolor eveniet id quae rem, impedit in placeat, possimus reprehenderit sit error aut perferendis alias?</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src='https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='object-cover w-full h-full' src='https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='object-cover w-full h-full' src='https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
    </div>
  )
}

export default Rooms