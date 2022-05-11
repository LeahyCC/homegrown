import InnerPageContainer from '../../components/InnerPageWrapper'
import PokemonGenerator from '../../components/PokemonGenerator'

const Home = () => {
  return (
    <InnerPageContainer>
      <div className="page-header__wrapper">Home page!</div>
      <PokemonGenerator />
    </InnerPageContainer>
  )
}

export default Home
