import { useEffect } from 'react';
import Origin from './Origin';
import './index.scss';

function App() {
  useEffect(()=>{
    window.addEventListener("contextmenu", (event)=>{
      event.preventDefault()
    })
  })
  return (
      <div className="app">
        <Origin />
      </div>
  );
}

export default App;
