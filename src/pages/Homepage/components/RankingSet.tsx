
// Styles
import "../../../styles/top-rankings.css";

interface RankingSetProps {
    header: string,
    followers: number,
    products: React.ReactNode[]
}

const RankingSet = (props: RankingSetProps) => {
    const { header, followers, products } = props
    return (
        <div className='ranking-set'>
            <h1 className='ranking-set-header'>{header}</h1>
            <p className='ranking-set-followers'>{followers} Followers</p>
            <div className='ranking-set-body'>
                {products.map(product => product)}
            </div>
        </div>
    )
}

export default RankingSet
