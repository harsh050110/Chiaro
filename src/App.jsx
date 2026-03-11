import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Navbar/>
      <Hero />
      <Reservation />
      <Categories />
      <Footer />
      </div>
    
  )
}
export default App;