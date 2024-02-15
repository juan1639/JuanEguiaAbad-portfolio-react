import { Header } from './components/Header'
import { Sobremi } from './components/Sobremi'
import { MisProyectos } from './components/MisProyectos'
import { useState, useEffect } from 'react'

function App() {

  const [loadingJson, setLoadingJson] = useState(true)
  const [infoJson, setInfoJson] = useState({})

  useEffect(() => {

    fetch('./src/json/proyectos.json')
      .then(res => res.json())
      .then(response => {
        setLoadingJson(false)
        setInfoJson(response.proyectos)
        console.log(response.proyectos)
      })
    
  }, [])

  const urlFoto = {
    backgroundImage: 'url(' + './assets/img/fotoJuan.jpg' + ')'
  }

  return (
    <>
      <Header 
        foto={urlFoto}
        nombre='Juan Eguía Abad'
        ocupacion='Programador autodidacta'
      />

      <Sobremi 
        parrafo1='Me gusta programar de forma autodidacta, siendo mi principal afición el desarrollo de pequeños videojuegos. Concretamente la lógica de programación de dichos juegos es la parte que más me atrae.'
        parrafo2='Los proyectos que se pueden ver en esta página están hechos en su mayoría en vanilla javaScript.'
      />

      {!loadingJson && <MisProyectos json={infoJson}/>}
    </>
  )
}

export default App
