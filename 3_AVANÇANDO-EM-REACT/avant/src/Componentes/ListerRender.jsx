import {useState} from 'react'

const ListerRender = () => {
    const [list] = useState (["Matheus", "Pedro", "Martins"])

    const [useres, setUseres] = useState([
        {id: 1, name: "Mathues", age: 20},
        {id: 2, name: "Pedro", age: 30},
        {id: 3, name: "Martins", age: 15}
    ])

    const delteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUseres((prevUser) => prevUser.filter((user) => randomNumber !== user.id));
    };

  return (
    <div>
        <h1>Listando elemento </h1>
            {/* 4-  Lista sem Key */}
        <ul>
            {/* Caso tenho itens com msm elementos, podemos usar um ponto extremos, onde é usar um "i" para os elementos */}
            {list.map((li, i) => (
                <li key={i}>
                    {li}
                </li>
            ))}
        </ul>
            {/*5 - Listando com Key */}
        <ul>
            {useres.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.age}
                </li>
            ))}
        </ul>
            {/* 6 - previous state */}
        <button onClick={delteRandom}>Delete element</button>
    </div>
  )
}

export default ListerRender