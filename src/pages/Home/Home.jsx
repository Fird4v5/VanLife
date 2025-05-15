import "./Home.css"
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
    <main className="home-page">
      <div className="intro-msg-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to={"vans"}>
        <button className="orange-btn">Find your van</button>
        </Link>
      </div>
    </main>
    </>
  )
}

export default Home