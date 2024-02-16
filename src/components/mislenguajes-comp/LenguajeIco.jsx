
export const LenguajeIco = ({index, img, gradosProporcion}) => {

    console.log(index)

    const indexElementoStyle = {
        transform: `rotateY(calc(${index + 1}* ${gradosProporcion}deg)) translateZ(400px)`
    }

    return (
        <>
            <figure style={indexElementoStyle}>
                <img src={img} alt="imagen icono lenguaje"/>
                <figcaption></figcaption>
            </figure>
        </>
    )
}
