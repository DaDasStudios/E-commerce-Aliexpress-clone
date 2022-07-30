// UI
import Icon from "../../../components/ui/icon/Icon";

// Icons
import { RiListUnordered, RiMedalFill, RiFlashlightFill } from 'react-icons/ri'

export default function Top() {
  return (
    <div
      className="has-background-white is-flex is-4"
      style={{
        padding: "0 350px",
      }}
    >
      <div className="is-flex is-align-items-center has-background-light pl-3 pr-large py-min rounded-top pointer">
        <Icon className="is-size-5 pt-1" Icon={RiListUnordered}></Icon>
        <p className="pl-1 is-size-6 font-extrabold">Categories</p>
      </div>
      <div className="is-flex is-align-items-center px-4 pointer hovered transition-color">
        <Icon className="is-size-5 pt-1" Icon={RiMedalFill}></Icon>
        <p className="pl-1 is-size-6 font-extrabold">Top Rankings</p>
      </div>
      <div className="is-flex is-align-items-center px-4 pointer hovered transition-color">
        <Icon className="is-size-5 pt-1" Icon={RiFlashlightFill}></Icon>
        <p className="pl-1 is-size-6 font-extrabold">Flash Deals</p>
      </div>
    </div>
  )
}
