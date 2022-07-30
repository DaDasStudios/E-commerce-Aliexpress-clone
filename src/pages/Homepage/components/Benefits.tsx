
// UI
import { Vertical } from "../../../components/ui/separator"

// Icons
const ICONS = {
    onSale: "https://ae01.alicdn.com/kf/Hd3f57e433b5a479084664aa5cb71c34du.png_50x50.png_.webp",
    protectionCoverage: "https://ae01.alicdn.com/kf/Hd4accc80ed984d2bbe957cdd2d7cceecx.png_50x50.png_.webp",
    safePayment: "https://ae01.alicdn.com/kf/H577c3262f468468aa55b7c9a3398933ey.png_50x50.png_.webp",
    worldWideDelivery: "https://ae01.alicdn.com/kf/H6c0640f4ab7d49deb52fae203dac3493m.png_50x50.png_.webp"
}

// Styles
import '../../../styles/benefits.css'

const Benefits = () => {
    return (
        <section className="benefits rounded-1">
            <div className="benefits-body">
                <div className="benefits-item">
                    <img className="benefits-icon" src={ICONS.onSale} alt="On sale benefit" />
                    <div>
                        <h5 className="benefits-title">Great values items</h5>
                        <p className="benefits-content">There's always something on sale!</p>
                    </div>
                </div>
                <Vertical></Vertical>
                <div className="benefits-item">
                    <img className="benefits-icon" src={ICONS.protectionCoverage} alt="Protecton coverage" />
                    <div>
                        <h5 className="benefits-title">Worry-free shopping</h5>
                        <p className="benefits-content">Every order has Buyer Protection coverage</p>
                    </div>
                </div>
                <Vertical></Vertical>
                <div className="benefits-item">
                    <img className="benefits-icon" src={ICONS.safePayment} alt="A safe payment" />
                    <div>
                        <h5 className="benefits-title">Safe payment</h5>
                        <p className="benefits-content">Pay with the world's top payment methods</p>
                    </div>
                </div>
                <Vertical></Vertical>
                <div className="benefits-item">
                    <img className="benefits-icon" src={ICONS.worldWideDelivery} alt="World wide delivery" />
                    <div>
                        <h5 className="benefits-title">Worldwide delivery</h5>
                        <p className="benefits-content">What you want, delivered to where you want</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits