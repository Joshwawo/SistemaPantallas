import axios from "axios";
import { useState, useEffect } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper'

import 'swiper/css'

const Hermosillo = () => {
  const [postsHermosillo, setPostsHermosillo] = useState([]);

  const FetchPost = async () => {
    const url = "http://localhost:3001/postsCompanies?company=hermosillo";

    const respuesta = await axios.get(url);
    setPostsHermosillo([...respuesta.data], respuesta.data);
    console.log(respuesta.data);
  };

  useEffect(() => {
    FetchPost();
  }, []);

  return (
    <div>
      <p className=" text-white">Hola desde hermosillo</p>

      <div className="grid grid-cols-3 gap-2 text-white">
        {postsHermosillo.map((post) =>
          post.isActive === true ? (
            <div key={post._id} className="diuv">
              <p className=" text-red-600">{post.comany}</p>
              <p>{post.title}</p>
              <img src={post.image.url} alt={post.title} />
            </div>
          ) : null
        )}

        {/* {postsHermosillo.map(({ isActive, _id, company, image }) => {
          isActive === true ? (
            <div>
                <p>{_id}</p>
             
            </div>
          ) : null;
        })} */}
      </div>
    </div>
  );
};

export default Hermosillo;
