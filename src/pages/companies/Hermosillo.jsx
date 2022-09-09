import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// import "swiper/css";

const Hermosillo = () => {
  const [postsHermosillo, setPostsHermosillo] = useState([]);
  const TOKEN = import.meta.env.VITE_TOKEN_JWT

  const FetchPost = async () => {
    // const url = "http://localhost:3001/postsCompanies?company=hermosillo";
    // const url = "https://screensapi.azurewebsites.net/postsCompanies?company=hermosillo"
    
    const url = "https://pantallas.onrender.com/postsCompanies?company=hermosillo"


    const respuesta = await axios.get(url,{
      headers: {
        "Content-Type": "application/json",
        "x-access-token": TOKEN,

    }});
    setPostsHermosillo([...respuesta.data], respuesta.data);
    console.log(respuesta.data);
  };

  useEffect(() => {
    FetchPost();
  }, []);

  return (
    <div className="">
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
        {postsHermosillo.map((item) => (
          <SwiperSlide key={item._id} className="">
            <div className=''>
             
              <img src={item.image.url} alt=" mx-auto" className=' h-full w-full' />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      
    </div>
  );
};

export default Hermosillo;
