import { useId } from 'react'

// Components
import RankingSet from "./RankingSet";
import SingleTopRanking from "./SingleTopRanking";

// UI
import { CustomCarousel } from "../../../components/ui/carousel";

export const TopRankings = () => {
    const uId = useId()
    return (
        <section
            className="has-background-light mt-4"
            style={{
                padding: "0 350px",
            }}
        >
            <div className="has-background-white top-rankings rounded-1">
                <h1 className="font-extrabold py-2 px-3">Top Rankings</h1>
                <div>
                    <CustomCarousel
                        showIndicators={false}
                        pages={[
                            <div className="is-flex gap-3 mb-3">
                                <RankingSet
                                    followers={1191628}
                                    header="New trends - Make up Brushes"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} New Trends Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/S73c5dd6f7601410dade11370caf2ddbe8.jpg_120x120Q90.jpg_.webp"}
                                            price={1445.78}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} New Trends Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/H58007fbe1ddf40bf9a4ea46731c99bacy.jpg_120x120Q90.jpg_.webp"}
                                            price={7906.61}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} New Trends Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/S3358f4bcc5ce452baa555db3587f23c25.jpg_120x120Q90.jpg_.webp"}
                                            price={5602.40}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                                <RankingSet
                                    followers={58180}
                                    header="Opto-electronic Mice"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} Opto-electronic Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/H88afc0d86bd3405296f91f95f94e01501.jpg_120x120Q90.jpg_.webp"}
                                            price={21686.69}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Opto-electronic Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/Sdb498d003c4343e3b651da0e55291feaf.jpg_120x120Q90.jpg_.webp"}
                                            price={34427.62}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Opto-electronic Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/Heb6fca7b9895438b9cc1660934b8196fY.jpg_120x120Q90.jpg_.webp"}
                                            price={116520.79}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                                <RankingSet
                                    followers={4237524}
                                    header="Car MP3 Players"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} Car MP3 Players Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/Sa309b8b8781342a0abef3ee24ec5331c2.jpg_120x120Q90.jpg_.webp"}
                                            price={45.18}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Car MP3 Players Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/H0fc52e1047d8490d9f2dddc4497886fcz.jpg_120x120Q90.jpg_.webp"}
                                            price={9216.84}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Car MP3 Players Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/Hb5e67c023f5f411484ae701076d602016.jpg_120x120Q90.jpg_.webp"}
                                            price={45.18}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                            </div>,
                            <div className="is-flex gap-3">
                                <RankingSet
                                    followers={15387}
                                    header="Labtop Cases Bags"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} Labtop Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/HTB1Cgh4d9SD3KVjSZFKq6z10VXac.jpg_120x120Q90.jpg_.webp"}
                                            price={9849.377}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Labtop Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/H4178804fb3cc49918ac2c6761399c97dk.jpg_120x120Q90.jpg_.webp"}
                                            price={14096.35}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Labtop Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/S6f7d742e6f734578859ef09c2c5e1317A.jpg_120x120Q90.jpg_.webp"}
                                            price={49608.31}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                                <RankingSet
                                    followers={2957484}
                                    header="Summer Wear Solutions - Rings"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} Summer Wear Solutions Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/Sa41f83fba1ce4f12810d242d052b00f27.jpg_120x120Q90.jpg_.webp"}
                                            price={45.18}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Summer Wear Solutions Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/S8bdb6085f5164198a3391c32d9a307fe2.jpg_120x120Q90.jpg_.webp"}
                                            price={45.18}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Summer Wear Solutions Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/S458aace758a9492f89eae620abd6bebes.jpg_120x120Q90.jpg_.webp"}
                                            price={3659.63}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                                <RankingSet
                                    followers={4237524}
                                    header="Diaper Change - Kids Headwear"
                                    products={[
                                        <SingleTopRanking
                                            key={`${uId} Diaper Change Ranking 1`}
                                            image={"https://ae01.alicdn.com/kf/H8b4ea425cac54acfa47c7f5f53755952D.jpg_120x120Q90.jpg_.webp"}
                                            price={8674.68}
                                            ranking={1}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Diaper Change Ranking 2`}
                                            image={"https://ae01.alicdn.com/kf/H0f9e3aaefe004f728db3c54a8756a09eL.jpg_120x120Q90.jpg_.webp"}
                                            price={8358.41}
                                            ranking={2}
                                        />,
                                        <SingleTopRanking
                                            key={`${uId} Diaper Change Ranking 3`}
                                            image={"https://ae01.alicdn.com/kf/H62c6e35c408b4386b74593ebac25455aB.png_120x120.png_.webp"}
                                            price={45.18}
                                            ranking={3}
                                        />,
                                    ]}
                                />
                            </div>,
                        ]}
                    ></CustomCarousel>
                </div>

                <p className="top-rankings-view-more">VIEW MORE</p>
            </div>
        </section>
    );
};
