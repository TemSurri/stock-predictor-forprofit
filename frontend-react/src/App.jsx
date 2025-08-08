import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './AuthProvider.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PublicRoute from './PublicRoute.jsx'

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <div className ='d-flex flex-column vh-100'>
    <Header />
      <Routes>

        <Route path = '/' element={<PublicRoute>
    <Main className ='flex-fill container my-3'/> </PublicRoute>}/>

        <Route path = '/register' element = {<PublicRoute><Register/></PublicRoute>}/>
        <Route path = '/login' element = {<PublicRoute><Login/></PublicRoute>}/>
        <Route path = '/dashboard' element = {<PrivateRoute><Dashboard/></PrivateRoute>}></Route>

      </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </AuthProvider>

    </>
    
  )
}

export default App
