// 4 - TemplateExpression

const TemplateExpress = () => {

    const name = "Martins";
    const agg = {
        id: 31,
        job: "Programador"
    }
    
  return (
    <div> 
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {agg.id} anos, e vc é {agg.job}</p>
    </div>
  )
}

export default TemplateExpress