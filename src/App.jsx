import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Form from './components/form'
import Canvas from './components/canvas'

function App() {
  const [contracts, setContracts] = useState([])

  function addContract(details){
    setContracts(details)
  }

  console.log(contracts);

  return (
    <>
      <Header/>
      <div className=' md:flex justify-around'>
        <Form addContract={addContract}/>
        <Canvas contracts={contracts} />
      </div>
    </>
  )
}

export default App
