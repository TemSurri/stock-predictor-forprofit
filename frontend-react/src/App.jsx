import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <Main className ='flex-fill container my-3'/>
      <Footer/>
    </div>
    
  )
}

export default App
