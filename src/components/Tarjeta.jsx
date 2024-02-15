import { Settings } from '../constants/constants.js'
import './misproyectos.css'

export const Tarjeta = ({json = []}) => {

    /* style={urlFoto}
    url="#"
    nombre="PacClonJS"
    descripcion="Una version bla bla bla bla..." */

    return (
        <>
            {
                json.map(proyecto => {

                    return (
                        <>
                            <div className="tarjeta__proyecto">
                                <a className="contenedor__imagen-tarjeta" style={proyecto.imagen} href={proyecto.url} target="_blank"></a>
                                
                                <h5>{proyecto.nombre}<figure><img src="./assets/img/javascript-1.svg" alt="imagen icono html"/></figure></h5>
                                <p>{proyecto.descripcion}</p>
                            </div>
                        </>
                    )
                })
            }
            
        </>
    )
}
