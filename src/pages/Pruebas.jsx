import {Swiper, SwiperSlide} from 'swiper/react'

import {Autoplay, Pagination, Navigation} from 'swiper'

import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {usePost} from '../context/PostContext'
import { useState } from 'react'

const Pruebas = () => {

  const {posts,speed, setSpeed} = usePost()

  const [speedo, setSpeedo] = useState(2000)

  console.log(posts)



  

  //flex flex-col justify-center items-center
  
  return (
    <div className=' text-white bg-[#171717] w-full h-full  '>
      <Swiper 
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay,  ]}

      >
        {posts.map((item) => (
          <SwiperSlide key={item._id} className="">
            <div className=''>
             
              <img src={item.image.url} alt=" mx-auto" className=' h-full w-full' />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}

export default Pruebas      