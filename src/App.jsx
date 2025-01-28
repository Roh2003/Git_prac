import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello this is app page</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{count}</p>
    </>

  )
}

export default App
