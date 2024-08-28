import Spline from "@splinetool/react-spline/next";
import Button from "../Button";
import LinkButton from "../LinkButton";

const CallToAction = ({ title, children }) => {
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
          {children}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
