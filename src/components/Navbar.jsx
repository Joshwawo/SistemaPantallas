import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full  rounded-lg p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between">
      <h1 className="uppercase font-semibold cursor-pointer text-xl"></h1>
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors"
        >
          Inicio
        </Link>
        <Link to="/pruebas" className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors">
          Testing
        </Link>
        <Link
          to="/hermosillo"
          className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors"
        >
          hermosillo
        </Link>
        <Link to="/nogales" className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors">
          Nogales
        </Link>
        <Link to="/loscabos" className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors">
          Los cabos
        </Link>
        <Link to="/tijuana" className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors">
          Tijuana
        </Link>
        <Link to="/mexicali" className="xl:py-1  text-white xl:px-2 rounded-lg  transition-colors">
          Mexicali
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
