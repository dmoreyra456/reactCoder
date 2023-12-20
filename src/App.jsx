import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListcontainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListcontainer />
    </>
  )
}

export default App
