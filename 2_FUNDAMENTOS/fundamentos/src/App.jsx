import './App.css'
  // 2 - importando componente
import FristComponet from './components/FristComponents'
  // 4 - Templat Expression
import TemplateExpress from './components/TemplateExpress'
  // 5 - hierarquia de components
import MyComponent from './components/MyComponent';
  // 6 - Events
import Events from './components/Events';
function App() {
    // 3 - comentario 
  return (
    <>
      {/* 3 - comentario em JSX */}
      <h1>Fundamentos do React</h1>
      <FristComponet/>      
      <TemplateExpress/>
      <MyComponent/>
      <Events/>
    </>
  )

}

export default App
