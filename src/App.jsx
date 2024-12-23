import Home from './components/Home'
import Navber from './components/Navber'
import OldHome from './LearningComponents/OldHome'
import OldHome2 from './LearningComponents/OldHome2'

function App() {

  return (
    <div className="app">
      <Navber />
      <div className="content">
        {/* <OldHome/> */}
        {/* <OldHome2/> */}
        <Home />
      </div>
    </div>
  )
}

export default App
