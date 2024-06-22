import Header from "./components/Header"
import logo from "./assets/logo.png"
import Main from "./components/Main"


export default function App() {
  return (
    <div>
    <Header>
      <img src={logo} alt="logo image" />
    </Header>
    <Main />
    </div>
  )
}
