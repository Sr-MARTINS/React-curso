import './App.css'

    // 
import Flor from './assets/flor.jpg'
    // 4 - Renderização de Lista
import ListerRender from './Componentes/ListerRender'
    // 7 - render condicional  
import CondicionalRend from './Componentes/CondicionalRend'
  // 8 - props
import ShowUserName from './Componentes/ShowUserName'
  // 9 - desestruturando prop
import CarDestails from './Componentes/CarDestails'
  // 10 - renderização de lista com componente
  const cards = [
    {id: 1, brand: "Ferrari", color: "Amarelo"},
    {id: 2, brand: "Audi", color: "Cinza" },
    {id: 3, brand: "Merceds", color: "Verde"}
  ]
  // 12 - Childer
import Container from './Componentes/Container'
  // 13 - funcão com prop
import FunctionConponet from './Componentes/FunctionConponet'
  // 14 - state lift
import Menssagem from './Componentes/Menssagem'
import { useState } from 'react'
import HedMenss from './Componentes/HedMenss'

function App() {
  const [menssage, setMenssage] = useState("");
  const haderMenssage = (msg) => {
    setMenssage(msg)
  }

  const FuncShow = () => {
    console.log("Chmando funcao com prop")
  }

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Img em public */}
       <img src="2d.png" alt="primeira" />

      {/* Img em assets - Nesse modelo ja precisamos importar */}
        <img src={Flor} alt="outra img" />

        {/* 6 -  */}
        <ListerRender/>
        {/* 7 - render condicional */}
        <CondicionalRend/>
        {/* 8 - props */}
        <ShowUserName name=" Marcos"/>
        {/* 9 - Desestruturando props */}
        <CarDestails brand="WV" KM={15.000} color="Red" />
        {/* 10 - Reaproveitamento de components - props */}
          {/* podemos ver q a ordem dos elmentos não autera o funcionamento */}
        <CarDestails brand="Honda" KM={2131} color="Azul" />
        <CarDestails KM={3121} color="Branco" brand="Toyota"/>
        {/* 11 - renderização de lista */}
        {cards.map((car) => (
          <CarDestails
            key={car.id}
            brand={car.brand}
            color={car.color}
            KM={car.km}
          />
        ))}
        // 12 - Children
          <Container>
            <div>
                <p>Conteudo "Chiltren"</p>
            </div>
            <div>
              <ul>
                <li>Martelo</li>
                <li>Prego</li>
                <li>Ovo</li>
              </ul>
            </div>
          </Container>
        {/* 13 - Funcao com prop */}
        <FunctionConponet myFunction={FuncShow}/>
        {/* 14 - state left */}
        <Menssagem msg={menssage}/>
        <HedMenss haderMenssage={haderMenssage}/>
    </>
  )
}

export default App
