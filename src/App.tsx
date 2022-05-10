import { Routes, Route } from 'react-router-dom'
import AppNavigation from './containers/AppNavigation'
import Home from './containers/Home'
import About from './containers/About'
import './index.scss'

const App = () => {
  return (
    <div className="App">
      <AppNavigation />
      <div className="App__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
