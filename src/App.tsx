import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import InnerPageContainer from '@/components/InnerPageWrapper'
import LoadingSpinner from '@/components/LoadingSpinner'
import AppNavigation from './components/AppNavigation'
import Pokemon from '@/containers/Pokemon'
import About from '@/containers/About'
import StarWars from '@/containers/StarWars'
// import Words from '@/containers/Words'
const Words = lazy(() => import('@/containers/Words'))

const App = () => {
  return (
    <div className="App">
      <AppNavigation />
      <div className="App__content">
        <Suspense
          fallback={
            <InnerPageContainer>
              <LoadingSpinner />
            </InnerPageContainer>
          }
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/words" element={<Words />} />
            <Route path="/star-wars" element={<StarWars />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
