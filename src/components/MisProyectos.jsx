import { Tarjeta } from './Tarjeta.jsx'
import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './misproyectos.css'

export const MisProyectos = ({json}) => {

    const [mostrar, setMostrar] = useState(false)
    // const [anima, setAnima] = useState('animation: none')

    const urlFoto = {
        backgroundImage: 'url(' + './assets/img/miniatura_pacJon50x50.png' + ')',
        backgroundSize: 'cover'
    }

    const handleClick = () => {

        console.log('click')
        setMostrar(!mostrar)
        // setAnima('animation: ocultarLenguajes 1s 1 forwards')
    }

    return (
        <>
            <article id="mis-proyectos">
                <div className="h2-div-descripcion" onClick={handleClick}>
                    <h2 className="h2" id="h2-mis-proyectos">Algunos de mis proyectos </h2>
                    {!mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretDown}/>}
                    {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>}
                </div>

                {
                    mostrar &&
                    <section className="h2-contenedor">
                        <button className="boton-carrusel iz">
                            <FontAwesomeIcon className="h2 icono" icon={faCaretLeft}/>
                        </button>

                        <button className="boton-carrusel de">
                            <FontAwesomeIcon className="h2 icono" icon={faCaretRight}/>
                        </button>

                        <Tarjeta json={json}></Tarjeta>
                    </section>
                }
            </article>
        </>
    )
}
