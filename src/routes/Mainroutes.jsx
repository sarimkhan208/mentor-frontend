import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import MainWindow from '../pages/MainWindow'
import { PrivateRoute } from '../pages/PrivateRoute'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><MainWindow/></PrivateRoute>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
    </Routes>
  )
}

export default Mainroutes
