
export const RedSocial = ({src, nombre}) => {

    return (
        <a href="https://www.youtube.com/@siempreretro" target="_blank">
            <figure>
                <img src={src} alt="imagen logo youtube" className="logo-youtube" />
            <figcaption>{nombre}</figcaption>
            </figure>
        </a>
    )
}
