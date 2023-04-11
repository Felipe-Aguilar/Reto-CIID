import { useEffect, useState } from "react";

import Filtro from "./Filtro";
import Noticias from "./Noticias";
import Recomendado from "./Recomendado";

import { NoticiasAPI } from "../API/NoticiasAPI";

const News = () => {

    const [ noticias, setNoticias ] = useState([]);
    const [ busqueda, setBusqueda ] = useState(false);
    const [ buscando, setBuscando ] = useState('');

    const datosNoticias = async () => {
        const respuesta = await NoticiasAPI();
        setNoticias(respuesta);
        setBusqueda(false);
    }

    const actualizaBusqueda = (noticiasBusqueda, buscando) => {
        setBusqueda(true);

        setNoticias(noticiasBusqueda);
        setBuscando(buscando);
    }

    useEffect(()=>{
        datosNoticias();
    },[]);



    return ( 
        <div className="news">
            <div className="row justify-content-between">
                <Filtro actualizaBusqueda = { actualizaBusqueda } datosNoticias={ datosNoticias }/>
                <Noticias noticias={noticias} busqueda={busqueda} buscando={buscando}/>
                <Recomendado />
            </div>
        </div>
    );
}

export default News;