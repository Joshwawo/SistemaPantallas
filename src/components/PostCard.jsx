import toast from "react-hot-toast";
import { usePost } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Compator from "./Compator";

export const PostCard = ({ post }) => {
  const { deletePost } = usePost();
  const navigate = useNavigate();
  const handleDelete = (id, title) => {
    toast(
      (t) => (
        <div className="divo">
          <p className=" text-white">
            ¿Estas seguro que quieres eliminarlo? <strong>{title}</strong>{" "}
          </p>
          <div className="divo">
            <button
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
              className=" bg-red-500 hover:bg-red-400 px-3 py-3 text-sm text-white rounded-sm mx-2"
            >
              Eliminar
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className=" bg-orange-500 hover:bg-orange-600 px-3 py-3 text-white rounded-sm mx-2"
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };
  // console.log(post);

  return (
    <div className=" bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div className=" flex justify-between ">
          <h3>{post.title}</h3>
          <div className=" flex gap-2">
            <button
              onClick={(evento) => {
                evento.stopPropagation();
                handleDelete(post._id, post.title);
              }}
              className=" bg-red-500 text-sm px-2 py-1 rounded-sm"
            >
              <MdDeleteForever />
            </button>
            <button
              onClick={() => navigate(`/posts/${post._id}`)}
              className=" bg-yellow-500 text-sm px-2 py-1 rounded-sm"
            >
              <GrUpdate />
            </button>

            {/* <button
              onClick={() => console.log(`/posts/${post._id}`)}
              className=" bg-yellow-500 text-sm px-2 py-1 rounded-sm"
            >
              <GrUpdate/>
            </button> */}

            {/* <button onClick={()=> console.log('Me diste click')} className=" bg-slate-600 rounded-sm text-sm px-2 py-1" >{post.isActive === true ?<AiFillEye/>  :<AiFillEyeInvisible/>} </button> */}
            {/* <p>{`http://127.0.0.1:5173/posts/${post._id}`}</p> */}
          </div>
          <p className=" text-sm ">

            {/* <Compator>{post.company.replace("loscabos", "Los Cabos").toUpperCase()}</Compator> */}
            

            <Compator>{post.company}</Compator>
            {/* <Compator>{post.company}</Compator> */}
            
          </p>
          <p className=" text-sm">
            {post.isActive === true ? (
              <span className=" text-green-600">Activo</span>
            ) : (
              <span className=" text-red-600">Desactivado</span>
            )}
          </p>
        </div>
        <p>{post.descripcion}</p>
      </div>
      {post.image && (
        <img
          src={post.image.url}
          alt={post.descripcion}
          className="object-cover h-96 w-full"
        />
      )}
    </div>
  );
};
