import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tempoSelecionado, setTempoSelecionado] = useState(0)
  const [contador, setContador] = useState(0);
  const [start, setStart] = useState(false)

  let iniciou = false;

  useEffect(()=>{
    if(!iniciou){
      setContador(timerType[tempoSelecionado].tempo)
      iniciou = true
    }
  },[])

  useEffect(()=>{
     
    if(start){
      const interval = setInterval(()=>{
        if(contador <= 0){
          
          setContador(0)
          setStart(false)
        }
        else
          setContador(prev => prev - 1)
      }, 1000)

      return ()=> clearInterval(interval)
    }

  })

  const timerType = [
    {
      id: 0,
      type: "Pomodoro",
      tempo:3
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
    if(contador <= 0){
      setContador(timerType[tempoSelecionado].tempo)
      return
    }
    const running = !start
    setStart(running)
  }

  function handleChangeTextButton(){

    if(contador <= 0){
      return "REINICIAR"
    }
    else if(start){
      return "STOP"
    }
    else if(!start){
      return "START"
    }
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
        className="btn-start">{handleChangeTextButton()}</button>

      </div>

    </div>

  )
}

export default App
