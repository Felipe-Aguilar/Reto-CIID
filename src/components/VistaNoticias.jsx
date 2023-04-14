import { useContext, useEffect, useState } from "react";

import Filtro from "./Filtro";
import Noticias from "./Noticias";

import { NoticiasAPI } from "../API/NoticiasAPI";
import { Busqueda } from "../context/Busqueda";

const News = () => {

    const [ noticias, setNoticias ] = useState([]);
    const { setBusqueda } = useContext(Busqueda);

    const datosNoticias = async () => {
        const respuesta = await NoticiasAPI();
        setNoticias(respuesta);
        setBusqueda(false);
    }

    const actualizaBusqueda = (noticiasBusqueda) => {
        setNoticias(noticiasBusqueda);
    }

    useEffect(()=>{
        datosNoticias();
    },[]);



    return ( 
        <div className="news">
            <div className="row justify-content-center">
                <Filtro actualizaBusqueda = { actualizaBusqueda } datosNoticias={ datosNoticias }/>
                <Noticias noticias={noticias} />
            </div>
        </div>
    );
}

export default News;