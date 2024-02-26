import { useState } from 'react'
import './App.css'
import ContextProvider from '../context/ContextProvider'
import Login from '../Components/Login'
import Profile from '../Components/Profile'

function App() {


  return (
    <>
      <ContextProvider>
        <h1>context API</h1>
        <Login/>
        <Profile/>
      </ContextProvider>
    </>
  )
}

export default App
