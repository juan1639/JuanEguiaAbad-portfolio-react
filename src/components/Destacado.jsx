
export const Destacado = () => {

    return (

        <article id="mis-destacados">
            <h4>Destacado</h4>
            <section className="incrustados">
                <div>
                    <iframe src="https://www.youtube.com/embed/2Ri930tW1BA?si=s07sjnZfLWWybbs7" title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen></iframe>
                </div>

                <article id="serie-pacman">
                    <h4>Pacman en python</h4>
                    <p>Primer vídeo de la serie en la que muestro la recreación del juego clásico Pacman en python usando la librería pygame.</p>
                </article>

                {/* <div className="proporcional p16x9">
                    <iframe src="https://www.youtube.com/embed/L1OoD3zhhIc?si=90E_SycnlwAhvm4C" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </div> */}
            </section>
        </article>
    )
}
