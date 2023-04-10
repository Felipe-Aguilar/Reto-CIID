import { useEffect, useState } from "react";

import Filtro from "./Filtro";
import Noticias from "./Noticias";
import Recomendado from "./Recomendado";

import { NoticiasAPI } from "../API/NoticiasAPI";

const News = () => {

    const [ noticias, setNoticias ] = useState([]);

    useEffect(()=>{

        const datosNoticias = async () => {
            const respuesta = await NoticiasAPI();
            setNoticias(respuesta);
        }

        datosNoticias();
    },[]);

    return ( 
        <div className="news">
            <div className="row justify-content-between">
                <Filtro />
                <Noticias noticias={noticias}/>
                <Recomendado />
            </div>
        </div>
    );
}

export default News;