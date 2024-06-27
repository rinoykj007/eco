import Hero from "../Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollection from "../NewCollection/NewCollection.jsx";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection/>
    </div>
  );
}

export default Shop;
