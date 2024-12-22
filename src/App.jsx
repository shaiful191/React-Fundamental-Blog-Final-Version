import Home from './components/Home'
import Navber from './components/Navber'
import OldHome from './components/OldHome'

function App() {

  return (
    <div className="app">
      <Navber />
      <div className="content">
        {/* <OldHome/> */}
        <Home />
      </div>
    </div>
  )
}

export default App
