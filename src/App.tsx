import { Routes, Route } from 'react-router-dom'
import AppHeader from './containers/App/AppHeader'
import AppNavigation from './containers/App/AppNavigation'
import Home from './containers/Home'
import About from './containers/About'

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
