import {Swiper, SwiperSlide} from 'swiper/react'

import {Autoplay} from 'swiper'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {usePost} from '../context/PostContext'
import { useState } from 'react'

const Pruebas = () => {

  const {posts,speed, setSpeed} = usePost()

  const [speedo, setSpeedo] = useState(2000)
  console.log(speed)
  // console.log(setSpeed(4000))

  console.log(posts)
  // console.log(speedo)
  


  // const data =[
  //   {
  //     id:1,
  //     title:'Titulo 1',
  //     description:'Descripcion 1'
  //   },
  //   {
  //     id:2,
  //     title:'Titulo 2',
  //     description:'Descripcion 2'

  //   },
  //   {
  //     id:3,
  //     title:'Titulo 3',
  //     description:'Descripcion 3'
  //   },
  //   {
  //     id:4,
  //     title:'Titulo 4',
  //     description:'Descripcion 4'
  //   },
  //   {
  //     id:5,
  //     title:'Titulo 5',
  //     description:'Descripcion 5'
  //   },
  //   {
  //     id:6,
  //     title:'Titulo 6',
  //     description:'Descripcion 6'
  //   },
  // ]

  return (
    <div className=' text-white bg-slate-800 '>
      <Swiper
      className=' h-screen'
      modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {posts.map((item) => (
          <SwiperSlide key={item._id}>
            <img src={item.image.url} alt="" className=' ' />
            </SwiperSlide>
        ))}
       
        </Swiper>

        <p className=' mt-10' >Change speedo </p>
        <input type="range" min="1000" max="10000" value={speedo} onChange={(e) => setSpeed(e.target.value)} />
        <p>The actual speedo is {speedo}</p>

        {/* <img src="https://res.cloudinary.com/pantallas/image/upload/v1662062276/posts/aoiajkfhlwjcpxbbaxvs.jpg" className=' object-cover mx-auto w-full h- ' alt="" /> */}
    </div>
  )
}

export default Pruebas      