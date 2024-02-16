// import './misproyectos.css'
import { LenguajeIco } from './mislenguajes-comp/LenguajeIco.jsx'
import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const MisLenguajes = ({}) => {

    const [mostrar, setMostrar] = useState(false)

    const gradosProporcion = 360 / Settings.mis_lenguajesImg.length

    const handleClick = () => {
        console.log('click')
        setMostrar(!mostrar)
    }

    return (
        <>
            <article id="mis-lenguajes">
                <div className="h2-div-descripcion" onClick={handleClick}>
                    <h2 className="h2" id="h2-mis-proyectos">Lenguajes/tecnologías que suelo utilizar </h2>
                    {!mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretDown}/>}
                    {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>}
                </div>

                {
                    mostrar &&
                    <section className="h2-contenedor">
                        <div className="slider">
                            {
                                Settings.mis_lenguajesImg.map((lang, index) => {

                                    return (
                                        <LenguajeIco 
                                            key={lang}
                                            index={index}
                                            img={lang}
                                            gradosProporcion={gradosProporcion}
                                        ></LenguajeIco>
                                    )

                                })
                            }
                        </div>
                    </section>
                }
            </article>
        </>
    )
}
