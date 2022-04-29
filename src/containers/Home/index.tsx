import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-header__wrapper">
      Home page!
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Home
