// Components
import WeekSingleDeal from "./WeekSingleDeal";

// UI
import { CustomCarousel } from "../../../components/ui/carousel";

const WeeklyDeals = () => {
  return (
    <section className="has-background-light" style={{
      padding: "0 350px"
    }}>
      <div className="has-background-white weekly-deals rounded-1 mt-4">
        <div className="weekly-deals-header">
          <img
            style={{
              width: "20px",
              height: "20px",
              marginRight: ".5rem"
            }}
            src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png"
            alt="Weekly deals icons"
          />
          <h2 className="weekly-deals-title is-size-6">Weekly Deals</h2>
        </div>
        <div className="weekly-deals-content">
          <CustomCarousel
            showIndicators={false}
            pages={[
              <div className="weekly-deals-page">
                <WeekSingleDeal
                  discount={47}
                  lastPrice={67680.55}
                  price={35873.40}
                  image="	https://ae04.alicdn.com/kf/H4612167133f249ceb2e1358eaefe32e9u.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={76}
                  lastPrice={111822.00}
                  price={26837.28}
                  image="https://ae04.alicdn.com/kf/H05d811536216425f8e13aef79788b10aF.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={99}
                  lastPrice={4189.14}
                  price={45.18}
                  image="https://ae01.alicdn.com/kf/Hf061d8b4743a4f7f9ab692f193226cf2m.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={68}
                  lastPrice={225812.68}
                  price={76761.85}
                  image="https://ae04.alicdn.com/kf/U3bf0719a40f34cfdab2ca38e5006961cO.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={55}
                  lastPrice={183207.37}
                  price={82454.61}
                  image="https://ae01.alicdn.com/kf/Hbc3d272846a64ee4964271c54e1b9a5cx.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={64}
                  lastPrice={156189.36}
                  price={55662.51}
                  image="https://ae01.alicdn.com/kf/Sea7411d52f634927b6546354ce21f976w.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={44}
                  lastPrice={112861.16}
                  price={63207.67}
                  image="https://ae01.alicdn.com/kf/S71b5f80e8648422e8c2306b08e9f0935x.jpg_200x200Q90.jpg_.webp"
                />
              </div>,
              <div className="weekly-deals-page">
                <WeekSingleDeal
                  discount={99}
                  lastPrice={7138.54}
                  price={45.18}
                  image="https://ae01.alicdn.com/kf/Ha69b841681ca4dc3aa6bd12a8f8539b32.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={37}
                  lastPrice={19427.66}
                  price={12243.94}
                  image="https://ae01.alicdn.com/kf/H0c6e428c202841999a07f9796717461bY.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={36}
                  lastPrice={90858.20}
                  price={58147.44}
                  image="https://ae04.alicdn.com/kf/H0d73c6da16034011994bed5d7b7828e1o.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={57}
                  lastPrice={246595.76}
                  price={106038.89}
                  image="	https://ae04.alicdn.com/kf/H00915cc69cbf4ac8a0ecba8c670b7dcc0.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={44}
                  lastPrice={156282.26}
                  price={87519.84}
                  image="https://ae04.alicdn.com/kf/Scd109d31ac864cb18e492925a2a6f93f9.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={25}
                  lastPrice={13027.06}
                  price={13509.00}
                  image="https://ae04.alicdn.com/kf/Sea2812ba9a6e42e78c8dceec8570e2ffq.jpg_200x200Q90.jpg_.webp"
                />
                <WeekSingleDeal
                  discount={25}
                  lastPrice={38403.52}
                  price={28780.05}
                  image="	https://ae04.alicdn.com/kf/Hf7a249ad10a944ceb077ffcadc9d9895K.jpg_200x200Q90.jpg_.webp"
                />
              </div>,
            ]}
          ></CustomCarousel>
        </div>
        <p className="weekly-deals-view-more">VIEW MORE</p>
      </div>
    </section>
  );
};

export default WeeklyDeals;
