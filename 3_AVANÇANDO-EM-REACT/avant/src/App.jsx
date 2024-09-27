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


function App() {

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
    </>
  )
}

export default App
