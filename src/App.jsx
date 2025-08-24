import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarUp from './components/Navbar/Navbar'
import Content from './components/Content/Content';
import Button from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarUp/>
      <Content/>
      <Button text="SHOP"/>
      <Button text="CATEGORY"/>
    </>
  )
}

export default App
