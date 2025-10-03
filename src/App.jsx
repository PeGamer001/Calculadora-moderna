import { useState } from 'react'
import { Calculator } from './Components/Calculator.jsx';

import './App.css'


function App() {
  return (
    <>
      <div className="flex p-10 justify-center">
          <Calculator />
      </div>
    </>
  )
}

export default App
