import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostRequest,
  createPostRequest,
  deletePostRequest,
  getPostByIdRequest,
  updatePostRequest,
  
} from "../api/posts";
//Esto es el contexto
const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [speed, setSpeed] = useState(200)

  const getPosts = async () => {
    const respuesta = await getPostRequest();
    setPosts(respuesta.data);
  };

  const getPostsCompany = async ()=>{
    const respuesta = await getCompanyRequest();
    // console.log(respuesta.data);
  }

  const createPost = async (post) => {
    try {
      const respuesta = await createPostRequest(post);
      setPosts([...posts, respuesta.data]);
      // console.log([...posts, respuesta.data]
      // console.log(post)
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const respuesta = await deletePostRequest(id);
    if (respuesta.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }

    // console.log(respuesta);
  };

  const getPostById = async (id) => {
    const respuesta = await getPostByIdRequest(id);
    // console.log(respuesta.data)
    return respuesta.data;
    // console.log(respuesta)
  };
  const updatePost = async (id, post) => {
    const respuesta = await updatePostRequest(id, post);
    // setPosts(
    //   posts.map((post) => {
    //     post._id === id ? respuesta.data : post;
    //   })
    // );
    setPosts(posts.map((post) => (post._id === id ? respuesta.data : post)));
  };

  useEffect(() => {
    getPosts();
   
  }, []);
  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPostById,
        updatePost,
        speed,
        setSpeed,
        
      }}
    >
      {children}
    </postContext.Provider>
  );
};

// export default PostContext
