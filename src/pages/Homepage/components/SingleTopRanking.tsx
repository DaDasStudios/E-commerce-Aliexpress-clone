import { useId } from "react";

// Interfaces
import { SVG, JPG, PNG } from "../../../interfaces/Images";

// Util
import { formatCurrency } from "../../../util/formatCurrency";

// Styles
import "../../../styles/top-rankings.css";

export interface SingleTopRankingProps {
  image: SVG | PNG | JPG;
  price: number;
  ranking: 1 | 2 | 3;
}

const RANKINGS_FLAGS = {
  1: "https://ae01.alicdn.com/kf/H753b711628f04b23b565ca30d569db16t.png",
  2: "https://ae01.alicdn.com/kf/H19a790448eec491cb38a67490db300e1q.png",
  3: "https://ae01.alicdn.com/kf/H816cf9ecc3654f249c26c336d5577d20Z.png",
};

const SingleTopRanking = (props: SingleTopRankingProps) => {
  const { image, price, ranking } = props;
  const id = useId();

  return (
    <div className="top-ranking-item">
      <img className=" rounded" src={image} alt={`Product on rank ${id}`} />
      <p className="top-ranking-price is-size-6_3">
        {formatCurrency(price)}
      </p>
      <span className="top-ranking-flag">
        <img src={RANKINGS_FLAGS[ranking]} alt={`Place number ${ranking}`} />
      </span>
    </div>
  );
};

export default SingleTopRanking;
