import Header from "./components/Header"
import logo from "./assets/logo.png"
import Home from "./components/Home"
import { useEffect, useState } from "react"


export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="font-inconsolata dark:bg-primary-color">
    <Header setDarkMode={setDarkMode} darkMode= {darkMode}>
      <img src={logo} alt="logo image" className="w-24"/>
    </Header>
    <Home />
    </div>
  )
}
