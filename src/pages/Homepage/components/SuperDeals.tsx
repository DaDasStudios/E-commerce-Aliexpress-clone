
// Components
import SingleDeal from "./SingleDeal";

// UI
import { CustomCarousel } from "../../../components/ui/carousel/";
import Icon from "../../../components/ui/icon/Icon";

// Icons
import { AiTwotoneThunderbolt } from "react-icons/ai";

// Styles
import "../../../styles/super-deals.css";





const SuperDeals = () => {
  return (
    <section className="has-background-white py-2 super-deals rounded-1 px-2 mt-4">
      <div className="super-deals-header">
        <Icon className="super-deals-icon" Icon={AiTwotoneThunderbolt}></Icon>
        <p className="super-deals-title">Super Deals</p>
      </div>
      <div className="super-deals-content">
        <CustomCarousel
          pages={[
            <div className="super-deals-page">
              <SingleDeal
                discount={53}
                price={424291.09}
                sold={46}
                image="https://ae01.alicdn.com/kf/S262dc8a0823a4ad0982fbe8311b763c5v.jpg_100x100Q90.jpg_.webp"
              />
              <SingleDeal
                discount={39}
                price={4156.62}
                sold={66}
                image="https://ae01.alicdn.com/kf/S53fe7149cdde497da1c19d2e32b5d6a2P.jpg_100x100Q90.jpg_.webp"
              />
            </div>,
            <div className="super-deals-page">
              <SingleDeal
                discount={50}
                price={46174.58}
                sold={2}
                image="https://ae01.alicdn.com/kf/Sa00d234e8ce9468e99e2c3825868cd5a1.jpg_100x100Q90.jpg_.webp"
              />
              <SingleDeal
                discount={49}
                price={16581.28}
                sold={31}
                image="https://ae01.alicdn.com/kf/S28cf125a7966421fa3e96ab8f4a63585U.jpg_100x100Q90.jpg_.webp"
              />
            </div>,
            <div className="super-deals-page">
              <SingleDeal
                discount={49}
                price={16581.28}
                sold={31}
                image="https://ae01.alicdn.com/kf/S28cf125a7966421fa3e96ab8f4a63585U.jpg_100x100Q90.jpg_.webp"
              />
              <SingleDeal
                discount={44}
                price={180.72}
                sold={41872}
                image="https://ae01.alicdn.com/kf/S5a76619ff9a1488bb86506d0d818671bd.jpg_100x100Q90.jpg_.webp"
              />
            </div>,
          ]}
        ></CustomCarousel>
      </div>
    </section>
  );
};

export default SuperDeals;
