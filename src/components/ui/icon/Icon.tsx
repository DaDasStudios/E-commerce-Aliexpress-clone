import { IconType } from "react-icons/lib";

interface IconProps {
  Icon: IconType;
  className?: string;
}

const Icon = ({ Icon, className }: IconProps) => {
  return (
    <i
      className={className}
      style={{
        margin: "3px 3px 0"
      }}
    >
      <Icon></Icon>
    </i>
  );
};

export default Icon;
