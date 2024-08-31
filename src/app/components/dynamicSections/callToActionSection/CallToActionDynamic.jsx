import Spline from "@splinetool/react-spline/next";
import LinkButton from "../../shared/LinkButton";
import { FaLinkedin, FaFacebook, FaGlobe, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconMapping = {
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  facebook: FaFacebook,
  website: FaGlobe,
  github: FaGithub,
};

const CallToActionDynamic = ({ data }) => {
  const { title, description, link } = data;

  const IconComponent = iconMapping[link.icon] || null;
  return (
    <section className="pb-8">
      <div className="relative">
        <Spline
          scene="https://prod.spline.design/RCSKNjUml0IcjnCF/scene.splinecode"
          width={600}
          height={500}
          className="flex justify-center"
        />
        <div className="absolute w-[100%] min-h-[100%] max-w-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-light text-center mb-4 xl:mb-8">
            {title}
          </h2>
          <p className="text-center mb-8 max-w-[600px] font-light">
            {description}
          </p>
          <LinkButton to={link.url} variant="hollow" target="">
            {link.text} {IconComponent && <IconComponent className="text-xl" />}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CallToActionDynamic;
