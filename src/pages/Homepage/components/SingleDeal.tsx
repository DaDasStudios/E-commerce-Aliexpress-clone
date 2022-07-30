import { useId } from "react";

// Interfaces
import { SVG, JPG, PNG } from "../../../interfaces/Images";

// Util
import { formatCurrency } from "../../../util/formatCurrency";
import { formatDiscount } from "../../../util/formatDiscount";

interface SingleDealProps {
  image: SVG | PNG | JPG;
  discount: number;
  price: number;
  sold: number;
}

const SingleDeal = (props: SingleDealProps) => {
  const { image, discount, price, sold } = props;
  const id = useId();

  return (
    <div className="super-deals-item">
      <img src={image} alt={`Product on discount ${id}`} />
      <p className="font-extrabold is-size-6_5 is-italic">
        {formatCurrency(price)}
      </p>
      <p className="super-deals-sold">{sold} Sold</p>
      <div className="super-deals-discount">{formatDiscount(discount)}</div>
    </div>
  );
};

export default SingleDeal