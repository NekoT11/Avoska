import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import { Reg } from './assets/component/reg'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Reg/>}/>
    <Route/>
    </Routes>
    </>
  )
}

export default App
