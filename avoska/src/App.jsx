import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import { Reg } from './assets/component/reg'
import { Catalog } from './assets/component/catalog'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Reg />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/auth' element={<eg />} />

        <Route />
      </Routes>
    </>
  )
}

export default App
