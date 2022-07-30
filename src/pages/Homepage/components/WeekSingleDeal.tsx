import { useId } from "react";

// Interfaces
import { SVG, JPG, PNG } from "../../../interfaces/Images";

// Util
import { formatCurrency } from "../../../util/formatCurrency";
import { formatDiscount } from "../../../util/formatDiscount";

// Styles
import "../../../styles/weekly-deals.css";

interface WeekSingleDealProps {
  image: SVG | PNG | JPG;
  discount: number;
  lastPrice: number;
  price: number;
}

const DiscountIcon =
  "https://ae01.alicdn.com/kf/H76430522fb7d41d99db9c7d23b0c59396.png";

const WeekSingleDeal = (props: WeekSingleDealProps) => {
  const { image, discount, lastPrice, price } = props;
  const id = useId();

  return (
    <div className="weekly-deals-item pb-3">
      <img className=" rounded" src={image} alt={`Product on discount ${id}`} />
      <div>
        <div className="weekly-deals-discount-body">
          <div className="weekly-deals-discount">
            <img
              className="weekly-deals-discount-icon"
              src={DiscountIcon}
              alt="Discount icon"
            />
            <p className="is-size-7">{formatDiscount(discount)}</p>
          </div>
          <p className="weekly-deals-last-price is-size-7">{formatCurrency(lastPrice)}</p>
        </div>
      </div>
      <p className="font-extrabold is-size-6_3 is-italic">
        {formatCurrency(price)}
      </p>
    </div>
  );
};

export default WeekSingleDeal;
