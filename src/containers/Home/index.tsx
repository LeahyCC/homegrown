import InnerPageContainer from '../../components/InnerPageWrapper'
import PokemonGenerator from '../../components/PokemonGenerator'

const Home = () => {
  return (
    <InnerPageContainer>
      <div className="page-header__wrapper">
        Home page!
        <PokemonGenerator />
      </div>
    </InnerPageContainer>
  )
}

export default Home
