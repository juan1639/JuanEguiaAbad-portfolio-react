import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './misproyectos.css'

export const MisLenguajes = ({}) => {

    const [mostrar, setMostrar] = useState(false)

    const handleClick = () => {

        console.log('click')
        setMostrar(!mostrar)
    }

    return (
        <>
            <article id="mis-lenguajes">
                <div className="h2-div-descripcion" onClick={handleClick}>
                    <h2 className="h2" id="h2-mis-proyectos">Lenguajes que suelo utilizar </h2>
                    {!mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretDown}/>}
                    {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>}
                </div>

                {
                    mostrar &&
                    <section className="h2-contenedor">
                        Mostrando
                        {/* {
                            json.map((proyecto, index ) => {

                                return (
                                    <Tarjeta 
                                        key={proyecto.nombre}
                                        posX={index}
                                        desplaza={desplaza}
                                        img={proyecto.imagen}
                                        href={proyecto.url}
                                        nombre={proyecto.nombre}
                                        descripcion={proyecto.descripcion}
                                    ></Tarjeta>
                                )

                            })
                        } */}

                    </section>
                }
            </article>
        </>
    )
}
