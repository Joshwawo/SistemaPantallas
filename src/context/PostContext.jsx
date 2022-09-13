import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostRequest,
  createPostRequest,
  deletePostRequest,
  getPostByIdRequest,
  updatePostRequest,
  getPostsRequestHermosillo,
} from "../api/posts";

import axios from "axios";
//Esto es el contexto
const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

// import second from 'first'

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [speed, setSpeed] = useState(200);
  const [postsHermosillo, setPostsHermosillo] = useState([]);

  // const getPosts = async () => {
  //   const respuesta = await getPostRequest();
  //   setPosts(respuesta.data);
  // };

  const getPosts = async () => {
    const respuesta = await getPostRequest();
    setPosts(respuesta.data);
    // setPosts([...posts], respuesta.data);
  };

  const getPostsTest = async () => {
    try {
      const respuesta = await getPostRequest();
      setPosts(...posts, respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostHermosillo = async () => {
    try {
      const respuesta = await getPostsRequestHermosillo();

      // setPostsHermosillo(posts.filter((post) => post._id !== id));

      // console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (post) => {
    try {
      const respuesta = await createPostRequest(post);
      setPosts([...posts, respuesta.data]);
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

  //actulizar el estado de los posts sin actulizar la pagina

  // useEffect(() => {

  //   getPosts();
  //   getPostHermosillo();
  // }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  // useEffect(() => {
  //   getPosts();
  // }, [ ]);
  // useEffect(() => {
  //   getPostHermosillo();
  // }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        postsHermosillo,
        getPosts,
        createPost,
        deletePost,
        getPostById,
        updatePost,
        speed,
        setSpeed,
        getPostHermosillo,
        getPostsTest,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
