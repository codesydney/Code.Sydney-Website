"use client";
const { useEffect } = require("react");

const Consultation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://koalendar.com/e/meet-with-code-sydney?embed=true";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 z-50">
      <h2 className="text-2xl font-medium md:text-4xl mx-auto text-center max-w-[600px]">
        Or book a meeting with our{" "}
        <span className="text-custom-primary font-bold">Director</span>
      </h2>
      <iframe
        src="https://koalendar.com/e/meet-with-code-sydney?embed=true"
        width="100%"
        height="800px"
        frameBorder="0"
        title="Koalendar Embed"
      ></iframe>
    </section>
  );
};

export default Consultation;
