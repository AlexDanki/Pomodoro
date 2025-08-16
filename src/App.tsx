import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tempoSelecionado, setTempoSelecionado] = useState(0)
  const [contador, setContador] = useState(610);
  const [start, setStart] = useState(false)

  useEffect(()=>{

    if(start){
      const interval = setInterval(()=>{
        setContador(prev => prev - 1)
      }, 1000)

      return ()=> clearInterval(interval)
    }

  })

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

  function handleSwapTimerType(index: number){
    setTempoSelecionado(index)
    setStart(false)
    setContador(timerType[index].tempo)  
  }

  function handleConfigureSeconds()
  {
    if((contador % 60) <= 9){
      return "0" + contador % 60
    }

    return contador % 60;
  }

  function handleConfigureMinutes()
  {
    if(Math.floor(contador / 60 ) <= 9){
      return "0" + Math.floor(contador / 60 )
    }
    return Math.floor(contador / 60 );
  }

  function handleSetStart()
  {
    const running = !start
    setStart(running)
  }

  return (

    <div className="container">

      <div className='card'>

        <section className="buttons-timer">
          
          {
            timerType.map((item, index)=>(
              <button
              key={index}
              onClick={()=>handleSwapTimerType(index)} 
              style={{backgroundColor: item.id == tempoSelecionado? "#0D0D0D" : "#262626"}}
              className='btn-time'>{item.type}</button>
            ))
          }
          
        </section>
        
        <h1 className="timer">{handleConfigureMinutes()}:{handleConfigureSeconds()}</h1>

        <button 
        onClick={handleSetStart}
        className="btn-start">{start? "STOP" : "START"}</button>

      </div>

    </div>

  )
}

export default App
