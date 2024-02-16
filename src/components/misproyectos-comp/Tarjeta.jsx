// import './tarjeta.css'
import { Settings } from '../../constants/constants'

export const Tarjeta = ({posX, desplaza, img, href, nombre, descripcion, txtBoton, lenguaje}) => {

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

    const rutaLenguajeIco = asset + lenguaje.slice(5);

    return (          
        <>
            <div className="tarjeta__proyecto" style={estiloContainer}>
                <a className="contenedor__imagen-tarjeta" style={estiloImg} href={href} target="_blank">
                    <button className="boton__ver-tarjeta">{txtBoton}</button>
                </a>
                <h5>{nombre}<figure><img src={rutaLenguajeIco} alt="imagen icono html"/></figure></h5>
                <p>{descripcion}</p>
            </div>
        </>
    )
}
