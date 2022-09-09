import { useState } from "react";
// import "./App.css";
// import {Form} from './app/Index'
import { Formulario, Homepage, NotFund } from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { Toaster } from "react-hot-toast";
import Testing from "./pages/Testing";
import Navbar from "./components/Navbar";
import Pruebas from "./pages/Pruebas";
import Hermosillo from "./pages/companies/Hermosillo";
import Tijuana from "./pages/companies/Tijuana";
import Nogales from "./pages/companies/Nogales";
import LosCabos from "./pages/companies/LosCabos";
import Mexicali from "./pages/companies/Mexicali";

function App() {
  // min-h-screen flex items-center

  return (
    <div className=" bg-neutral-900 ">
      <div className=" px-10  m-auto">
        <PostProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/new" element={<Formulario />} />
            <Route path="/posts/:id" element={<Formulario />} />
            <Route path="test" element={<Testing />} />
            <Route path="/pruebas" element={<Pruebas />} />

            <Route path="/hermosillo" element={<Hermosillo />} />
            <Route path="/nogales" element={<Nogales />} />
            <Route path="/loscabos" element={<LosCabos />} />
            <Route path="/tijuana" element={<Tijuana />} />
            <Route path="/mexicali" element={<Mexicali />} />
            

            <Route path="*" element={<NotFund />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
