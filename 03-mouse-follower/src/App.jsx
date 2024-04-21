import { useEffect, useState } from "react"

const FollowMouse = ()=>{
  const[position, setPosition] = useState({x:0,y:0})
  const[enable, setEnable]=useState(false)

  useEffect(()=>{
    const handleMove = (event) =>{
      const{clientX, clientY} = event
      setPosition({x:clientX, y:clientY})
    }

    if(enable){
      window.addEventListener('pointermove', handleMove)
    }

    return ()=>{//cleanUp method
      window.removeEventListener('pointermove',handleMove)
    }
  },[enable])

  useEffect(()=>{
    document.body.classList.toggle('no-cursor',enable)
  
  return()=>{
    document.body.classList.remove('no-cursor')
  }
}
,[enable])
  

  return(
    <>
    <div style = {{
      position: 'absolute',
      background: '#83e',
      border: '1px solid #fff',
      borderRadius:'50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
   }}/>
   <button onClick={()=>setEnable(!enable)}>{enable ? 'Desactivar': 'Activar'} seguir puntero</button>
   </>
  )
}

function App() {

  return (<FollowMouse/>)
}

export default App
