// UI
import { RoundedButton } from '../../../components/ui/button/'

const Account = () => {
    return (
        <div className="mt-4 has-background-white rounded-1 py-5">
            <img className="image is-64x64 mx-auto" src="https://ae01.alicdn.com/kf/HTB1o19DcBKw3KVjSZTE763uRpXap.png_.webp" alt="Account image" />
            <h5 className="text-center font-extrabold">Welcome to AliExpress</h5>
            <div className="is-flex is-justify-content-center is-fullwidth gap-2 mt-4 px-4">
                <RoundedButton content='Join' className="is-flex-grow-1 bg-primary has-text-white border-none is-size-6_3"></RoundedButton>
                <RoundedButton content='Sign In' className="is-flex-grow-1 has-background-light has-text-grey border-none is-size-6_3"></RoundedButton>
            </div>
        </div>
    )
}

export default Account