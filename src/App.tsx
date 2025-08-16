import { useState } from 'react'
import './App.css'

function App() {
  const [tempoSelecionado, setTempoSelecionado] = useState(0)

  const timerType = [
    {
      id: 0,
      type: "Pomodoro",
      tempo:1500
    },
    {
      id: 1,
      type: "Short Break",
      tempo:300
    },
    {
      id: 2,
      type: "Long Break",
      tempo:900
    }
  ]

  return (

    <div className="container">

      <div className='card'>

        <section className="buttons-timer">
          
          {
            timerType.map((item, index)=>(
              <button 
              style={{backgroundColor: item.id == tempoSelecionado? "#0D0D0D" : "#262626"}}
              className='btn-time'>{item.type}</button>
            ))
          }
          
        </section>

        <h1 className="timer">00:00</h1>

        <button className="btn-start">START</button>

      </div>

    </div>

  )
}

export default App
