import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




//  const Name = (props) => {
//    
//    return (
//    <h2> Jag heter {props.name}</h2>
//    )
//  }

const Counter = () => {
  const [count, setCount ] = useState(0);

  const increment = () => {
    setCount (count + 1);
  }

  const decrement = () => {
  setCount (count - 1);
  }


  return (
    <div>
    <h1>Räknare</h1>
    <p>Antal: {count}</p>
    <button onClick={increment}>Öka</button>
    <button onClick={decrement}>Minska</button>
</div>
  )
}


function App() {

  return (
    <div className='App'>
      <Counter />
      <Counter />
    </div>
  )
}

export default App
