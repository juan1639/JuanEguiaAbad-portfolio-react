import { Titulo } from './sobremi-comp/titulo'
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
                        <div id="contacto-mail"><a href="mailto:juaneguiabad1639@gmail.com">Contactar conmigo vía e-mail</a></div>
                    </div>

                    <div>
                        <h3>Mis títulos</h3>

                        <figure id="mis-titulos">
                            <Titulo 
                                id="titulo-html"
                                href="./titulo-frontend.html"
                            >HTML5 y CSS3</Titulo>
                            
                            <Titulo 
                                id="titulo-react"
                                href="./titulo-react.html"
                            >JavaScript Avanzado</Titulo>

                            <Titulo 
                                id="titulo-java"
                                href="./titulo-appweb-java.html"
                            >Desarrollo apps web Java</Titulo>

                            <figcaption></figcaption>
                        </figure>
                    </div>
                </section>
            </article>
        </>
    )
}
