import './App.css'

// 2 - importando imagens em "assets"
import nigth from './assets/nigth.png'

function App() {

  return (
    <>
      <h1>Avançando em React</h1>
      {/* 1 - imagem  em public */}
      <img src="/eu.jpg" alt="alguma image" />

      {/* 2 -imagem em assets */}
      <img src={nigth} alt="outro imagem" />
    </>
  )
}

export default App
