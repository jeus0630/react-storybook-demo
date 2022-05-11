import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ButtonComponent>
        Hello
      </ButtonComponent>
    </div>
  )
}

export default App
