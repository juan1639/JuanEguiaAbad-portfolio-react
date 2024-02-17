// import './sobremi.css'
import { Titulo } from './sobremi-comp/titulo'
import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Sobremi = ({parrafo1, parrafo2}) => {

    const [mostrar, setMostrar] = useState(false)

    const handleClick = () => {
        console.log('click')
        setMostrar(!mostrar)
    }

    return (
        <>
            <article className="sobremi"> 
                <div className="h2-div-descripcion" onClick={handleClick}>
                    <h2 className="h2" id="h2-sobremi">Sobre mí... </h2>
                    {!mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretDown}/>}
                    {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>}
                </div>

                {
                    mostrar &&
                    <section className="h2-contenedor">
                        <div>
                            <p className='parrafo-sobremi'>{parrafo1}</p>
                            <p className='parrafo-sobremi'>{parrafo2}</p>

                            <div id="contacto-mail">
                                <a href="mailto:juaneguiabad1639@gmail.com">Contactar conmigo <FontAwesomeIcon className="h2 icono" icon={faEnvelope}/></a>
                            </div>

                            <div id="otros-portfolios">Otros Portfolios hechos en:
                                <ul class="portfolios">
                                    <a href="https://juan1639.github.io/juaneguiaabad"><li>Vanilla JavaScript</li></a>
                                    <a href="https://juan1639.github.io/JuanEguiaAbad-portfolio-react"><li>React (Éste)</li></a>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3>Mis títulos</h3>

                            <figure id="mis-titulos">
                                {
                                    Object.keys(Settings.misTitulos).map(titulo => {

                                        return (
                                            <Titulo 
                                                key={Settings.misTitulos[titulo].id}
                                                id={Settings.misTitulos[titulo].id}
                                                href={Settings.misTitulos[titulo].href}
                                            >{Settings.misTitulos[titulo].texto}</Titulo>
                                        )
                                    })
                                }
                                <figcaption></figcaption>
                            </figure>
                        </div>
                    </section>
                }
            </article>
        </>
    )
}
