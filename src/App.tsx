import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="container">

      <div className='card'>

        <section className="buttons-timer">
          <button className='btn-time'>Pomodoro</button>
          <button className='btn-time'>Short Break</button>
          <button className='btn-time'>Long Break</button>
        </section>

        <h1 className="timer">00:00</h1>

        <button className="btn-start">START</button>

      </div>

    </div>

  )
}

export default App
