import { Settings } from '../../constants/constants'
import '../misproyectos.css'

export const Tarjeta = ({posX, desplaza, img, href, nombre, descripcion}) => {

    // console.log(img)

    const asset = './assets'
    const x = posX * Settings.offSetHorizontalElementos + desplaza

    const estiloContainer = {
        marginLeft: x.toString() + '%',
        overflow: 'hidden'
    }

    const estilo = {
        background: 'url(' + asset + img.slice(5) + ')',
        backgroundSize: 'cover'
        // left: x.toString() + '%'
    }
    
    // console.log(estilo)

    return (          
        <>
            <div className="tarjeta__proyecto" style={estiloContainer}>
                <a className="contenedor__imagen-tarjeta" style={estilo} href={href} target="_blank"></a>
                
                <h5>{nombre}<figure><img src="./assets/img/javascript-1.svg" alt="imagen icono html"/></figure></h5>
                <p>{descripcion}</p>
            </div>
        </>
    )
}
