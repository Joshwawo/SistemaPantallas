import axios from "axios";


// const url =
// let url = "http://localhost:3001";
let url ="https://pantallas.onrender.com"
// const url = "https://screensapi.azurewebsites.net"
// let url = "http://localhost:3001/api"


const TOKEN = import.meta.env.VITE_TOKEN_JWT

// export const FetchPostHermosillo = async () => {
//   // const url = "http://localhost:3001/postsCompanies?company=hermosillo";
//   // const url = "https://screensapi.azurewebsites.net/postsCompanies?company=hermosillo"
  
//   const url = "https://pantallas.onrender.com/postsCompanies?company=hermosillo"


//   return await axios.get(url,{
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": TOKEN,

//   }});

//   // return respuesta.data;
//   // setPostsHermosillo([...respuesta.data], respuesta.data);
//   // console.log(respuesta.data);
// };

export const getPostsRequestHermosillo = async () => {
  return await axios.get(`${url}/postsCompanies?company=hermosillo`, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": TOKEN,
    },
  });
}

export const getPostRequest = async () => {
  return await axios.get(`${url}/posts`, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": TOKEN,
    },
  });
};
// http://localhost:3001/postsCompanies?company=loscabos
// export const createPostRequest = async (post)=>{
//     return await axios.post(`${url}/posts`,post)
// }

// let name = "hermosillo";

// export const getCompanyRequest = async () => {
//   return await axios.get(`${url}/postsCompanies?company=${name}`);

// }

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(`${url}/posts`, form, {
    headers: {
      "Content-type": "multipart/form-data",
      "x-access-token": TOKEN,
    },
  });
};

export const deletePostRequest = async (id) => {
  return await axios.delete(`${url}/posts/${id}`,{
    headers: {
      "Content-Type": "application/json",
      "x-access-token": TOKEN,
  }});
};

export const getPostByIdRequest = async (id) => {
  return await axios.get(`${url}/posts/${id}`,{
    headers: {
      "Content-Type": "application/json",
      "x-access-token": TOKEN,
  }});
};

export const updatePostRequest = async (id, newFields) => {
  const form = new FormData();

  for (let key in newFields) {
    form.append(key, newFields[key]);
  }

  return await axios.put(`${url}/posts/${id}`, form, {
    headers: {
      "Content-type": "multipart/form-data",
      "x-access-token": TOKEN,
    },
  });
};

//   return await axios.put(`${url}/posts/${id}`, newFields);
// };

// export const updatePostRequest = async (id, newFields) => {
//   return await axios.put(`${url}/posts/${id}`, newFields);
// };
