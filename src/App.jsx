import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Form from './components/form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Form/>
    </>
  )
}

export default App
