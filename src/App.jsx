import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
