import { useState, useEffect } from "react";

// API
import { getOfferts } from "../../../api/productsRequests";

// Interfaces
import { Product } from '../../../interfaces/Products'

// Styles
import '../../../styles/offerts.css'

// Util
import { formatCurrency } from '../../../util/formatCurrency'

interface OffertItemProps {
  product: Product;
}

const OffertItem = ({ product }: OffertItemProps) => {
  return (
    <div className="offert-item" key={product.id}>
      <img src={product.image} alt={product.title} />
      <span className="offert-price">{formatCurrency(product.price)}</span>
    </div>
  )
}

const Offerts = () => {
  const [productsOnOffert, setProductsOnOffert] = useState<Product[]>([])
  useEffect(() => {
    (async function () {
      const res = await getOfferts();
      setProductsOnOffert(res.data)
    })();
  }, []);
  return (
    <section className="offert-section mr-4 ml-4 mb-4 mt-2">
      {productsOnOffert.map(product => <OffertItem key={`${product.id}${product.title}`} product={product}/>)}
    </section>
  )
};

export default Offerts;
