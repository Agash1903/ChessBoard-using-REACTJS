import { useState } from 'react'
// import './App.css'
// import Subscribe from './Subscribe'
import ChessBoard from './ChessBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Subscribe/> */}
     <ChessBoard/>
    </>
  )
}

export default App
