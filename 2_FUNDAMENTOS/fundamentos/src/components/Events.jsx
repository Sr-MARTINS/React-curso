import React from 'react'

const Events = () => {

    const HardEvent = () => {
        console.log("Executando a função")
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("oi")}>
                Click aqui 
            </button>
        </div>

            {/* 7 - Evento com Função */}
        <div>
            <button onClick={HardEvent}>
                Click aq - com função
            </button>
        </div>
    </div>

    
  )
}

export default Events