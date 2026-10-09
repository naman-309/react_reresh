
import './App.css'
import Home from './components/Home'
function App() {
  let name = "React Props Concept "
  let age = 20

  return (

    <>

      <Home data={{ name, age }} />

    </>

  )
}

export default App
