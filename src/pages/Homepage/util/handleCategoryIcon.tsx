// UI
import Icon from '../../../components/ui/icon/Icon'

// Icons
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { GiDoorRingHandle, GiArmoredPants, GiSkirt } from 'react-icons/gi'

export default (category: string) => {
    switch (category) {
        case "electronics":
            return (
                <Icon className='is-size-5 text-light' Icon={HiOutlineDesktopComputer}/>
            )
        case "jewelery":
            return (
                <Icon className='is-size-5 text-light' Icon={GiDoorRingHandle}/>
            )
        case "men's clothing":
            return (
                <Icon className='is-size-5 text-light' Icon={GiArmoredPants}/>
            )
        case "women's clothing":
            return (
                <Icon className='is-size-5 text-light' Icon={GiSkirt}/>
            )
    
        default:
            break;
    }
}