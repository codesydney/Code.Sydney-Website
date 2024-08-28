import { motion } from "framer-motion";
import Button from "../shared/Button";
import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function TestimonialCard({
  testimonial,
  index,
  cardRef,
  cardHeight,
}) {
  const exitHeight = cardHeight + 16;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className={`p-8 rounded-lg mb-4 bg-custom-dark/50 z-20 backdrop-blur-lg self-start transition-all duration-200 md:transition-none md:duration-none mx-auto max-w-[700px] w-[100%] min-w-[100%] md:min-w-0`}
      key={testimonial.name + index}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: -exitHeight }}
      ref={cardRef}
    >
      <div className="py-4 border-b-[1px] border-white/50">
        <p className="text-custom-primary font-semibold">
          {testimonial.organisation}
        </p>
        <p className="text-xl font-bold">{testimonial.name}</p>
        <p className="text-custom-light/70">{testimonial.jobTitle}</p>
      </div>
      <p
        className={`my-4 text-custom-light/80 text-sm transition-all duration-1000 font-light ${
          isExpanded ? "line-clamp-none" : "line-clamp-6 md:line-clamp-4"
        }`}
      >
        {testimonial.review}
      </p>

      <Button
        variant="underline"
        handleClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            Read Less <MdExpandLess />
          </>
        ) : (
          <>
            Read More <MdExpandMore />
          </>
        )}
      </Button>
    </motion.article>
  );
}
