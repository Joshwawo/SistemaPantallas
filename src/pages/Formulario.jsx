import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePost } from "../context/PostContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Formulario = () => {
  const { createPost, getPostById, updatePost } = usePost();
  const navigate = useNavigate();
  const params = useParams();

  // const {id} = params;

  const [post, setPost] = useState({
    title: "",
    descripcion: "",
    image: null,
    company: "",
    isActive: true,
  });

  // const [posteo, setPosteo] = useState('hermosillo');

  // const sucursales = [
  //   { value: "hermosillo", label: "Hermosillo" },
  //   { value: "tijuana", label: "Tijuana" },
  //   { value: "guaymas", label: "guaymas" },
  // ];

  // console.log(params)

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPostById(params.id);
        setPost(post);
      }
    })();
  }, [params.id]);

  return (
    <div className=" flex items-center justify-center">
      <div className=" bg-zinc-800 p-10 shadow-md shadow-black">
        <header className=" flex justify-between items-center py-4 text-white">
          <h3 className=" text-xl mx-2">
            {params.id?.length > 1 ? "Actualizar post" : "Crear post"}
          </h3>
          <Link to={"/"} className=" text-gray-400 text-sm hover:text-gray-300">
            Regresar a la pagina principal
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string(),
            descripcion: Yup.string(),
          })}
          onSubmit={async (values, actions) => {
            // console.log(values)
            // await createPost(values);
            // console.log(values)

            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false);
            navigate("/");
          }}
          //Para reiniciar los datos
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue, isSubmitting, values }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className=" text-sm block font-bold text-gray-400 "
              >
                Titulo
              </label>
              <Field
                name="title"
                placeholder="Introduce un texto"
                className=" px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
              />
              <ErrorMessage
                component={"p"}
                className=" text-red-300 text-sm"
                name="title"
              />
              <label
                htmlFor="descripcion"
                className=" text-sm block font-bold text-gray-400 "
              >
                descripcion
              </label>

              <Field
                component="textarea"
                name="descripcion"
                rows={3}
                placeholder="Introduce una descripcion"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />

              <Field
                as="select"
                name="company"
                className=" bg-gray-400 px-2 py-1 text-gray-800"
              >
                <option value="" >
                  Seleccione una sucursal
                </option>
                <option value="hermosillo">Hermosillo</option>
                <option value="nogales">Nogales</option>
                <option value="loscabos">Los Cabos</option>
                <option value="tijuana">Tijuana</option>
                <option value="mexicali">Mexicali</option>
              </Field>
              <br />

              <label htmlFor="isActive">
                <Field type="checkbox" name="isActive"></Field>
                {/* {`${post.isActive}`} */}
                <span className=" text-sm font-bold text-gray-400 ">
                  {values.isActive ? "Activo" : "Inactivo"}
                </span>
              </label>

              {/* <div id="my-radio-group" className=" text-white">
                <div role="group" className="dvo">
                  <label htmlFor="">
                    <Field type="radio" name="isActive" value="uno"></Field>
                    Activo
                  </label>
                  <label htmlFor="">
                    <Field type="radio" name="isActive" value="dos"></Field>
                    Desactivado
                  </label>
                </div>
              </div> */}

              <ErrorMessage
                component={"p"}
                className=" text-red-300 text-sm "
                name="descripcion"
              />

              <label
                htmlFor="descripcion"
                className=" text-sm block font-bold text-gray-400 "
              >
                Imagen
              </label>
              <input
                type="file"
                onChange={(evento) =>
                  setFieldValue("image", evento.target.files[0])
                }
                name="image"
                className=" px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />

              <button
                type="submit"
                className=" text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {/* Guardar */}
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className=" animate-spin h-5 w-5 " />
                ) : (
                  "guardar"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
