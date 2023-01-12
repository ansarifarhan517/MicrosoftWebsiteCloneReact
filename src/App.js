import './App.css';
import Footer from './Components/Footer/Footer';
import ForBuisness from './Components/ForBuisness/ForBuisness';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Products/Product';
import Promos from './Components/Promo/Promos';
import Socials from './Components/Socials/Socials';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <hr className="mb-3 md:hidden" />
      <Promos></Promos>
      <Product></Product>
      <ForBuisness></ForBuisness>
      <Socials></Socials>
      <Footer></Footer>
    </>
  );
}

export default App;
