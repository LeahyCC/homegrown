import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.scss'
import InnerPageContainer from '@/components/InnerPageWrapper'
import LoadingSpinner from '@/components/LoadingSpinner'
import AppNavigation from './components/AppNavigation'
import Pokemon from '@/containers/Pokemon'
import Cursor from '@/containers/Cursor'
import StarWars from '@/containers/StarWars'
import GraphQLC from '@/containers/GraphQLC'
import Hooks from '@/containers/ReactHooks'
import UseState from '@/containers/ReactHooks/Hooks/UseState'
import { Rerenders } from '@/containers/Rerenders'

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
            <Route path="/" element={<Cursor />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/words" element={<Words />} />
            <Route path="/star-wars" element={<StarWars />} />
            <Route path="/graphql" element={<GraphQLC />} />
            <Route path="/rerenders" element={<Rerenders />} />
            <Route path="/react-hooks" element={<Hooks />} />
            <Route path="/react-hooks/useState" element={<UseState />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
