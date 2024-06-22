import Header from "./components/Header"
import logo from "./assets/logo.png"
import Home from "./components/Home"


export default function App() {
  return (
    <div>
    <Header>
      <img src={logo} alt="logo image" />
    </Header>
    <Home />
    </div>
  )
}
