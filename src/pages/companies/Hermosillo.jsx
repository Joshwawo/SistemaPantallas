import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { usePost } from "../../context/PostContext";

// import "swiper/css";

const Hermosillo = () => {
  // const [postsHermosillo, setPostsHermosillo] = useState([]);
  const TOKEN = import.meta.env.VITE_TOKEN_JWT;

  const {  posts } = usePost();

  console.log()


  


  // console.log(posts);

  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
      >
        {posts?.map((item) => (
          <SwiperSlide key={item._id} className="">
            <div className="">
              <img
                src={item.image.url}
                alt=" mx-auto"
                className=" h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hermosillo;
