import { useState } from 'react'
import './App.scss'
import Sidenav from './Layout/global/Sidenav'
import Wrapper from './Layout/global/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="container">
    <Sidenav/>
    <Wrapper/>
  
  </div>
  )
}

export default App
