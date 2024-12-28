import Home from './components/Home'
import Navber from './components/Navber'

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
