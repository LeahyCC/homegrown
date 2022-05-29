import { Routes, Route } from 'react-router-dom'
import AppNavigation from './components/AppNavigation'
import Pokemon from './containers/Pokemon'
import About from './containers/About'
import Words from './containers/Words'
import './index.scss'

const App = () => {
  return (
    <div className="App">
      <AppNavigation />
      <div className="App__content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/words" element={<Words />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
