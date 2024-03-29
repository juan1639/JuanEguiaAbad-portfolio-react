// import './misproyectos.css'
import { Tarjeta } from './misproyectos-comp/Tarjeta.jsx'
import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faVideo, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const MisProyectos = ({json, txtH2, txtBoton}) => {

    console.log(json)

    const [mostrar, setMostrar] = useState(false)
    const [desplaza, setDesplaza] = useState(0)

    const icoGamepad= txtBoton === 'Jugar' ? true : false
    const icoYoutube = txtBoton === 'Ver' ? true : false
    const icoRepo = txtBoton === 'Repositorio' ? true : false

    const handleClick = () => {

        console.log('click')
        setMostrar(!mostrar)
    }

    const handleCarrusel = (direccion) => {
        
        if (direccion === 'iz' && desplaza > -((json.length - 1) * Settings.offSetHorizontalElementos)) {
            setDesplaza(desplaza - Settings.offSetHorizontalElementos)
        
        } else if (direccion === 'de' && desplaza < Settings.offSetHorizontalElementos) {
            setDesplaza(desplaza + Settings.offSetHorizontalElementos)
        }
    }

    return (
        <>
            <article id="mis-proyectos">
                <div className="h2-div-descripcion" onClick={handleClick}>
                    <h2 className="h2" id="h2-mis-proyectos">{txtH2}</h2>
                    {icoGamepad && <FontAwesomeIcon className="h2 icon" style={{color: 'seagreen'}} icon={faGamepad}/>}
                    {icoYoutube && <FontAwesomeIcon className="h2 icon" style={{color: 'royalblue'}} icon={faVideo}/>}
                    {icoRepo && <FontAwesomeIcon className="h2 icon" style={{color: 'darkcyan'}} icon={faCode}/>}
                    {!mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretDown}/>}
                    {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>}
                </div>

                {
                    mostrar &&
                    <section className="h2-contenedor">
                        <button className="boton-carrusel iz" onClick={() => handleCarrusel('iz')}>
                            <FontAwesomeIcon className="h2 icono" icon={faCaretLeft}/>
                        </button>

                        <button className="boton-carrusel de" onClick={() => handleCarrusel('de')}>
                            <FontAwesomeIcon className="h2 icono" icon={faCaretRight}/>
                        </button>

                        {
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
                                        txtBoton={txtBoton}
                                        lenguaje={proyecto.lenguaje}
                                    ></Tarjeta>
                                )

                            })
                        }

                    </section>
                }
            </article>
        </>
    )
}
