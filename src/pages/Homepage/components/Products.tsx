// Context
import { useProductsContext } from "../context/ProductsContext";
import Product from "./Product";

// UI

// Util

const Products = () => {
  const { products } = useProductsContext();
  return (
    <section className="" style={{
      padding: "0 350px"
    }}>
      <h1 className="font-bold is-size-5 my-5">More to love</h1>
      <div className="is-flex gap-3 is-flex-wrap-wrap">
        {products.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </section>
  );
};

export default Products;
