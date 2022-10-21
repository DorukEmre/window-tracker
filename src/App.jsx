import { useState } from 'react'
import WindowTracker from "./components/WindowTracker"

function App() {  
  const [show, setShow] = useState(true)
  
  function toggle() {
      setShow(prevShow => !prevShow)
  }
  
  return (
      <div className="container">
          <button onClick={toggle}>
              Toggle WindowTracker
          </button>
          {show && <WindowTracker />}
      </div>
  )
}

export default App
