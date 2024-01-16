import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListcontainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ItemListcontainer />
      </BrowserRouter>
    </>
  )
}

export default App
