import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const LosCabos = () => {
  const [postsCabos, setPostsCabos] = useState([]);
  const TOKEN = import.meta.env.VITE_TOKEN_JWT


  const FetchPost = async () => {
    const url = "https://pantallas.onrender.com/postsCompanies?company=loscabos";
    

    const respuesta = await axios.get(url,{
      headers: {
        "Content-Type": "application/json",
        "x-access-token": TOKEN,

    }});
    setPostsCabos([...respuesta.data],respuesta.data);
    console.log(respuesta.data);
  };

  useEffect(() => {
    FetchPost();
  }, []);

  return (
    <div>

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
        {postsCabos.map((item) => (
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

export default LosCabos;
