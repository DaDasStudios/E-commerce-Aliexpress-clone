
// Components
import Top from "./components/Top";
import Categories from './components/Categories'
import Benefits from "./components/Benefits";
import WeeklyDeals from "./components/WeeklyDeals";
import { TopRankings } from "./components/TopRankings";
import Products from "./components/Products";

// Context
import { ProductsContextProvider } from './context/ProductsContext'


const Homepage = () => {
  return (
    <>
      <ProductsContextProvider>
        <Top/>
        <Categories></Categories>
        <Benefits></Benefits>
        <WeeklyDeals></WeeklyDeals>
        <TopRankings></TopRankings>
        <Products></Products>
      </ProductsContextProvider>
    </>
  );
};

export default Homepage;
