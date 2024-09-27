import React from 'react'

const CondicionalRend = () => {
    const x = false;

    const name = "Matheus"

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Isso aq esta sendo exibido</p>}

        {/* 8 - else */}
            <h3>Render Ternario</h3>
        {name === "Matheus" ? (
            <div>
                <p>Olá Matheus</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default CondicionalRend