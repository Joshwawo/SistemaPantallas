import { usePost } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { MdAddPhotoAlternate } from "react-icons/md";
document.body.style.backgroundColor = "#171717";

export const Homepage = () => {
  const { posts } = usePost();

  const renderMain = () => {
    if (posts.length === 0)
      return (
        <div className="divo flex flex-col justify-center items-center">
          <VscEmptyWindow className=" w-48 h-48 text-white" />
          <h1 className=" text-white text-2xl">No hay publicaciones de momento</h1>
        </div>
      );

    return (
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* <p className=" text-center text-red-600">Homepage</p> */}

      <header className=" flex justify-between py-4 gap-4">
        <p className=" text-2xl text-gray-300 font-bold">
          Publicaciones ({posts.length})
        </p>
        <Link to={"/new"} className=" px-3 py-2 bg-green-500/90 hover:bg-green-800 rounded-sm">
          {/* <p className="text-white">Crear un nuevo post</p> */}
          <p className=" text-white/90">
            Nuevo{" "}
          </p>
        </Link>
      </header>

      {renderMain()}
    </div>
  );
};
