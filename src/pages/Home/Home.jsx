import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <>
    <Navbar/>
    <main className="home-page">
      <div className="intro-msg-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Home