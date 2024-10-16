import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Abaut from './Abaut.jsx'
// import './App.css'
import './styles/global.scss'
import './styles/header.scss'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Header />
        <div className="app">
          <h1 className="app__title">у меня получилось</h1>
          <p className="app__text">поставте 5 поставте 5 поставте 5 поставте 5 поставте 5 поставте 5 поставте 5 поставте 5</p>
          <button className="app__button">пыпрврпвы</button>
        </div>
        <Abaut />

        
    </>
  )
}

export default App
