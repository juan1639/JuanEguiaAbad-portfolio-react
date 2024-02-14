
export const Titulo = ({id, href, children}) => {

    return (
        <>
            <a className="titulo" id={id} href={href} target="_blank">{children}</a>
            <img src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>
        </>
    )
}
