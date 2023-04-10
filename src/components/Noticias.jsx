const Noticias = () => {

    const url = 'https://i0.wp.com/iotbyhvm.ooo/wp-content/uploads/2019/04/docker-hub.png?resize=800%2C445&ssl=1';
    
    return ( 
        <div className="col-12 col-lg-7">
            <div className="noticias">
                <p>
                    Feed de Noticias
                </p>

                <div className="noticias-cuerpo">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Titulo</h2>
                        <p>
                            06/12/1999
                        </p>
                    </div>
                    <div className="imagen">
                        <img src={url} className="img-fluid" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis natus architecto numquam quae odit tempore aliquam inventore vitae distinctio.
                        </p>
                    </div>
                </div>

                <div className="noticias-cuerpo">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Titulo</h2>
                        <p>
                            06/12/1999
                        </p>
                    </div>
                    <div className="imagen">
                        <img src={url} className="img-fluid" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis natus architecto numquam quae odit tempore aliquam inventore vitae distinctio.
                        </p>
                    </div>
                </div>

                <div className="noticias-cuerpo">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Titulo</h2>
                        <p>
                            06/12/1999
                        </p>
                    </div>
                    <div className="imagen">
                        <img src={url} className="img-fluid" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis natus architecto numquam quae odit tempore aliquam inventore vitae distinctio.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Noticias;