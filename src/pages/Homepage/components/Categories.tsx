import { useState, useEffect } from "react";

// Components
import OffertsCarousel from "./OffertsCarousel";
import Offerts from "./Offerts";
import Account from "./Account";
import SuperDeals from "./SuperDeals";

// UI
import Icon from "../../../components/ui/icon/Icon";

// API
import { getCategories } from "../../../api/productsRequests";

// Interfaces
import { Categories as CategoriesInterface} from "../../../interfaces/Products";

// Utilities
import handleCategoryIcon from '../util/handleCategoryIcon'

interface CategoryProps {
  category: string;
}

function Category({ category }: CategoryProps) {
  return (
    <div className="capitalize is-flex is-align-items-center hovered transition-color hovered-shadow pl-3 last-child-pb-3">
      {handleCategoryIcon(category)}
      <p className="ml-2 is-inline text-grey" style={{fontSize: "0.86rem"}}>{category}</p>
    </div>
  )
}

export default function Categories() {
  const [categories, setCategories] = useState<CategoriesInterface | string[]>([]);
  useEffect(() => {
    (async function _await() {
      const res = await getCategories();
      setCategories(res.data);
    })();
  }, []);
  return (
    <div
      className="has-background-light is-flex is-align-items-start is-4 drop-shadow-internal"
      style={{
        padding: "0 350px",
      }}
    >
      <div
        className="is-flex is-flex-direction-column is-justify-content-stretch gap-1 has-background-white mb-2 pt-2 py-min pointer rounded-bottom"
        style={{
          minWidth: "248.81px",
        }}
      >
        {categories.map((category) => (
          <Category key={category} category={category}/>
        ))}
      </div>
      <div className="tile is-flex-grow-1 is-ancestor p-3">
        <div className="tile is-8 is-flex-direction-column">
          <div className="tile is-child">
            <OffertsCarousel></OffertsCarousel>
          </div>
         <div className="tile is-child">
            <Offerts></Offerts>
          </div>
        </div>
        <div className="tile is-flex-direction-column">
          <div className="tile is-child">
            <Account></Account>
          </div>
         <div className="tile is-child">
            <SuperDeals></SuperDeals>
          </div>
        </div>
      </div>

    </div>
  );
}
