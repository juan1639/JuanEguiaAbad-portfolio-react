import './header.css'

export const Header = ({foto, nombre, ocupacion}) => {

    return (
        <>
        <article className="header">
            <section className="foto" style={foto}></section>

            <section className="nombre">
                <h1>{nombre}</h1>
                <h3>{ocupacion}</h3>
            </section>
        </article>
        </>
    )
}
