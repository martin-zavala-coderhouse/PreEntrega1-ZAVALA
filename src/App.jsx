import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo={"Atención ♥︎"} mensaje={"✂ En Mantención"} />
      <Carousel />
      <Banner />
      <Footer />
    </>
  )
}

export default App
