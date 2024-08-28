import { PiHandWavingDuotone } from "react-icons/pi";
const ContactPageHeader = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 flex flex-col items-center">
      <p className="uppercase font-light text-center">
        Do you want to collaborate with us?
      </p>
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl flex items-center gap-2 mb-4">
        Get In Touch{" "}
        <PiHandWavingDuotone className="text-custom-primary animate-wavingHand" />
      </h1>
      <p className="font-light text-center max-w-[800px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias at
        ut. Tenetur illo aperiam impedit corporis dignissimos debitis?
        Perferendis nulla pariatur natus enim in accusamus magni incidunt rerum
        eius!
      </p>
    </section>
  );
};

export default ContactPageHeader;
