import { useEffect } from 'react';
import Origin from './Origin';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(()=>{
    window.addEventListener("contextmenu", (event)=>{
      event.preventDefault()
    })
  })
  return (
    <BrowserRouter>
      <div className="app">
        <Origin />
      </div>
    </BrowserRouter>
  );
}

export default App;
