const CarDestails = ({brand, KM, color}) => {
  return (
    <div>
        <h2>Destruct props</h2>
        <ul>
            <li>Marca : {brand}</li>
            <li>Quilometragem : {KM}</li>
            <li>Cor : {color}</li>
        </ul>
    </div>
  )
}

export default CarDestails