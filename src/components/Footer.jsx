import { RedSocial } from "./footer-comp/RedSocial"

export const Footer = ({dataFooter}) => {

    console.log(dataFooter)

    return (

        <footer className="footer">

            {
                Object.keys(dataFooter).map(rrss => {

                    return (
                        <RedSocial 
                            src={dataFooter[rrss].src}
                            nombre={dataFooter[rrss].nombre}
                            key={dataFooter[rrss].nombre}
                        />
                    )
                })
            }
        </footer>
    )
}
