import { useGetAllPokemonQuery } from '../../redux/services/pokemon'
import InnerPageContainer from '../../components/InnerPageWrapper'

const Home = () => {
  const { data } = useGetAllPokemonQuery()
  console.log('data', data)
  return (
    <InnerPageContainer>
      <div className="page-header__wrapper">
        Home page!
        <div></div>
      </div>
    </InnerPageContainer>
  )
}

export default Home
