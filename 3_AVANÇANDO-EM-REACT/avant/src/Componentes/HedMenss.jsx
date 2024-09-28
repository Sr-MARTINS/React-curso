function HedMenss({haderMenssage}) {
    const modF = ["Oi", "Olá", "Tudo bem ?"];

    return (
    <div>
        <h3>Reff</h3>
        <button onClick={() => haderMenssage(modF[0])}>1</button>
        <button onClick={() => haderMenssage(modF[1])}>2</button>
        <button onClick={() => haderMenssage(modF[2])}>3</button>
    </div>
  )
}

export default HedMenss