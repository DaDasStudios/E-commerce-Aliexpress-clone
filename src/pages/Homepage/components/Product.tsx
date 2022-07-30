import { useState } from 'react'

// UI
import Icon from "../../../components/ui/icon/Icon";

// Icons
import { AiFillStar, AiOutlineBulb } from "react-icons/ai";

// Interfaces
import { Product as ProductInterface } from "../../../interfaces/Products";

// Util
import { formatCurrency } from "../../../util/formatCurrency";

// Styles
import "../../../styles/products.css";

interface Props {
  product: ProductInterface;
}

const ProductHover = ({ isActive } : { isActive: boolean}) => {
  return (
    <div className={`${isActive ? "is-block" : "is-hidden "} product-hover`}>
      <Icon className='is-inline-block has-text-white is-size-6' Icon={AiOutlineBulb}/>
      Similar Items
    </div>
  )
}

const Product = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="product" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="is-flex is-align-items-center is-justify-content-center">
        <img className="product-image" src={product.image} alt={product.title} />
      </div>
      <h5 className="product-title">{product.title}</h5>
      <h6 className="product-price">{formatCurrency(product.price)}</h6>
      <footer className="product-footer">
        <p className="product-sold">{product.rating.count} sold</p>
        <div className="product-rate">
          <Icon className="text-primary product-icon" Icon={AiFillStar}></Icon>
          <p className="product-rating">{product.rating.rate}</p>
        </div>
      </footer>
      <ProductHover isActive={isHovered}/>
    </div>
  );
};

export default Product;
