import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return <p>Cargando</p>;

  console.log(auth)

  return (
    <div className="flex flex-wrap w-full h-full content-between justify-center">
      {auth?.dni ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default RutaProtegida;
