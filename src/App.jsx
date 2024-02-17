import { Header } from './components/Header'
import { Sobremi } from './components/Sobremi'
import { MisProyectos } from './components/MisProyectos'
import { MisLenguajes } from './components/MisLenguajes'
import { Destacado } from './components/Destacado'
import { Footer } from './components/Footer'
import { useState, useEffect } from 'react'
import { Settings } from './constants/constants'

function App() {

  const [loadingJson, setLoadingJson] = useState(true)
  const [infoJson, setInfoJson] = useState({})
  const [infoJsonRepos, setInfoJsonRepos] = useState({})
  const [infoJsonVideos, setInfoJsonVideos] = useState({})

  useEffect(() => {

    fetch('https://juan1639.github.io/JuanEguiaAbad-portfolio-react/proyectos.json')
      .then(res => res.json())
      .then(response => {
        setLoadingJson(false)
        setInfoJson(response.proyectos)
        setInfoJsonRepos(response.recursos)
        setInfoJsonVideos(response.videos)
      })
    
  }, [])

  const urlFoto = {
    backgroundImage: 'url(' + './assets/img/fotoJuan.jpg' + ')'
  }

  const dataFooter = Settings.dataFooter

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

      <MisLenguajes />

      {!loadingJson && <MisProyectos json={infoJson} txtH2="Algunos de mis proyectos " txtBoton='Jugar' />}
      {!loadingJson && <MisProyectos json={infoJsonVideos} txtH2="Algunos de mis vídeos " txtBoton='Ver' />}
      {!loadingJson && <MisProyectos json={infoJsonRepos} txtH2="Algunos de mis repositorios " txtBoton='Repositorio' />}

      <Destacado />

      <Footer dataFooter={dataFooter}/>
    </>
  )
}

export default App
