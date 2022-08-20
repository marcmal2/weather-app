import React, {useState} from 'react'
import MainApp from './components/mainApp/MainApp'
import SideApp from './components/sideApp/SideApp'
import axios from 'axios'



const app = () => {

  return (
    <>
     <MainApp />
     <SideApp />
     </>
  )
}

export default app