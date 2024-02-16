import { Settings } from '../../constants/constants'
import './tarjeta.css'

export const Tarjeta = ({posX, desplaza, img, href, nombre, descripcion}) => {

    const asset = './assets'
    const x = posX * Settings.offSetHorizontalElementos + desplaza

    const estiloContainer = {
        marginLeft: x.toString() + '%',
        overflow: 'hidden'
    }

    const estiloImg = {
        background: 'url(' + asset + img.slice(5) + ')',
        backgroundSize: 'cover'
    }

    return (          
        <>
            <div className="tarjeta__proyecto" style={estiloContainer}>
                <a className="contenedor__imagen-tarjeta" style={estiloImg} href={href} target="_blank">
                    <button className="boton__ver-tarjeta">Jugar</button>
                </a>
                <h5>{nombre}<figure><img src="./assets/img/javascript-1.svg" alt="imagen icono html"/></figure></h5>
                <p>{descripcion}</p>
            </div>
        </>
    )
}
