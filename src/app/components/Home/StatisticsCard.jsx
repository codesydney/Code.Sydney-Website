import {
  FaMeetup,
  FaFacebook,
  FaLinkedinIn,
  FaDiscord,
  FaStar,
} from "react-icons/fa";
import { FaTwitter, FaPeopleGroup, FaClock } from "react-icons/fa6";
import NumberCounter from "./NumberCounter";

const IconsMap = {
  FaMeetup: FaMeetup,
  FaFacebook: FaFacebook,
  FaLinkedinIn: FaLinkedinIn,
  FaDiscord: FaDiscord,
  FaStar: FaStar,
  FaTwitter: FaTwitter,
  FaPeopleGroup: FaPeopleGroup,
  FaClock: FaClock,
};

export default function StatisticsCard({ cardData }) {
  return (
    <article className="border-solid  rounded-md flex gap-4 flex-col items-center relative p-8 pt-4">
      <div className="flex items-center relative -translate-y-[calc(50%+1rem)]">
        {cardData?.icons &&
          cardData.icons.map((icon, index, icons) => {
            const centerIndex = Math.floor(icons.length / 2);
            const Icon = IconsMap[icon];
            if (index === centerIndex) {
              return (
                <Icon key={index} className="text-custom-primary text-6xl" />
              );
            } else if (index === centerIndex - 1 || index === centerIndex + 1) {
              return (
                <Icon key={index} className="text-custom-primary text-4xl" />
              );
            } else {
              return (
                <Icon key={index} className="text-custom-primary text-3xl" />
              );
            }
          })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden">
        <div
          className="w-[50%] h-[50%] top-0 left-[50%] translate-x-[-50%] 
            translate-y-[-50%] bg-gradient-to-b from-custom-primary/70 via-custom-primary/100 to-white/20 rounded-full blur-[100px] absolute"
        ></div>
      </div>
      {cardData?.number && <NumberCounter number={cardData.number} />}
      {cardData?.text && (
        <h3 className="text-xl text-center">{cardData.text}</h3>
      )}
    </article>
  );
}
