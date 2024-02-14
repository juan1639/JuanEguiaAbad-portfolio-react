import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './sobremi.css'

export const Sobremi = ({parrafo1, parrafo2}) => {

    return (
        <>
            <article className="sobremi"> 
                <div className="h2-div-descripcion">
                    <h2 className="h2" id="h2-sobremi">Sobre mí... </h2>
                    <FontAwesomeIcon className="h2" icon={faCaretDown}/>
                </div>

                <section className="h2-contenedor">
                    <div>
                        <p className='parrafo-sobremi'>{parrafo1}</p>
                        <p className='parrafo-sobremi'>{parrafo2}</p>
                    </div>

                    <div>
                        <h3>Mis títulos</h3>
                        <figure id="mis-titulos">
                            <a className="titulo" id="titulo-html" href="./titulo-frontend.html" target="_blank">HTML5 y CSS3</a>
                            <img src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>

                            <a className="titulo" id="titulo-react" href="./titulo-react.html" target="_blank">JavaScript Avanzado</a>
                            <img src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>

                            <a className="titulo" id="titulo-java" href="./titulo-appweb-java.html" target="_blank">Desarrollo apps web Java</a>
                            <img src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>
                            
                            <figcaption></figcaption>
                        </figure>
                    </div>
                </section>
            </article>
        </>
    )
}
