import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
