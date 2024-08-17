import { Platform } from "../Entities/Platform.tsx";
import {
  FaLinux,
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface IconProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: IconProps) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    android: FaAndroid,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <div className="flex flex-row gap-3 text-zinc-400">
      {platforms.map((platform) => {
        const IconComponent = IconMap[platform.slug];
        return IconComponent ? (
          <IconComponent key={platform.id} size={20} title={platform.name} />
        ) : null;
      })}
    </div>
  );
};

export default PlatformIconList;
