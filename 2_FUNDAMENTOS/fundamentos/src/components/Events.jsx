import React from 'react'

const Events = () => {

    const HardEvent = () => {
        console.log("Executando a função")
    };

    const renderSomethingr = (x) => {
        if(x) {
            return <h1>Retornado esse elemento</h1>
        }else {
            return <h1>Retornando outro </h1>
        }
    };

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

        {/* 8 - Função com reder */}
        {renderSomethingr(true)}
        {renderSomethingr(false)}
    </div>

    
  )
}

export default Events