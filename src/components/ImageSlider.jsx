import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides =[
        {
            url:'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'Pizza',
        },
        {
            url:'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'Spagatti',
        },
        {
            url:'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'burger',
        },
        {
            url:'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'salad',
        },
        {
            url:'https://images.pexels.com/photos/8530995/pexels-photo-8530995.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'fruit',
        },
        {
            url:'https://images.pexels.com/photos/5732812/pexels-photo-5732812.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'breakfast',
        },
        {
            url:'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
             ,title: 'dessert',
        },
    ]
        const [currentIndex, setCurrentIndex] = useState(0)

        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1 ;
            setCurrentIndex(newIndex);
        }

        const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1
            const newIndex = isLastSlide ? 0 : currentIndex + 1
            setCurrentIndex(newIndex);
        }

        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        }


  return (
    <div className='max-w-[1100px] h-[680px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        {/*Left arrow*/}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/*right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide,slideIndex) => (
                <div className='text-2xl cursor-pointer '
                 key={slideIndex}
                 onClick={() => goToSlide(slideIndex)}
                 >
                <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider