import Filtro from "./Filtro";
import Noticias from "./Noticias";
import Recomendado from "./Recomendado";

const News = () => {
    return ( 
        <div className="news">
            <div className="row justify-content-between">
                <Filtro />
                <Noticias />
                <Recomendado />
            </div>
        </div>
    );
}

export default News;