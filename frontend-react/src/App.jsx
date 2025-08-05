import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'



import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (



    <BrowserRouter>
    <div className ='d-flex flex-column vh-100'>
    <Header />
      <Routes>

        <Route path = '/' element={
    <Main className ='flex-fill container my-3'/>}/>

        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/login' element = {<Login/>}/>

      </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
  )
}

export default App
