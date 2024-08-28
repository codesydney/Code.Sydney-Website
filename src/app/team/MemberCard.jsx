"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import LinkButton from "../components/shared/LinkButton";
import { IoClose } from "react-icons/io5";

const MemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { memberName, memberRole, memberBio, memberLinkUrl, memberImage } =
    member;

  useEffect(() => {
    if (isExpanded) {
      console.log("Should be setting body to hidden");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "normal";
      document.documentElement.style.overflow = "auto";
    }
  }, [isExpanded]);

  return (
    <LayoutGroup>
      <motion.article
        layoutId={`member-card-${memberName}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
        className={`cursor-pointer ${isExpanded ? "invisible" : ""}`}
      >
        <motion.div
          layoutId={`member-image-container-${memberName}`}
          className="mb-4 overflow-hidden rounded"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={memberImage.asset.url}
            width={300}
            height={300}
            alt={memberImage.alt}
            className="w-[100%] h-auto transition-all duration-300 hover:brightness-110"
          />
        </motion.div>
        <motion.div>
          <motion.h3
            layoutId={`member-name-${memberName}`}
            className="text-xl font-medium text-custom-primary"
          >
            {memberName}
          </motion.h3>
          <motion.p className="text-lg" layoutId={`member-role-${memberName}`}>
            {memberRole}
          </motion.p>
        </motion.div>
      </motion.article>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId={`member-card-modal-${memberName}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setIsExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-custom-dark rounded-lg w-full max-w-[90%] md:max-w-4xl max-h-[90vh] md:h-auto overflow-scroll relative md:p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-0 right-0 md:top-2 md:right-2 p-2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <IoClose className="w-4 h-4 md:h-8 md:w-8" />
              </button>
              <div className="h-full md:flex md:items-start overflow-scroll">
                <motion.div
                  layoutId={`member-image-container-${memberName}`}
                  className="md:w-1/2 p-6 md:p-4 flex items-center justify-center"
                >
                  <Image
                    src={memberImage.asset.url}
                    width={300}
                    height={300}
                    alt={memberImage.alt}
                    className="w-full max-w-[400px] md:max-w-auto h-auto object-cover"
                  />
                </motion.div>
                <div className="md:w-1/2 p-6 md:p-4 md:max-h-auto">
                  <motion.h3
                    layoutId={`member-name-${memberName}`}
                    className="text-2xl font-medium text-custom-primary mb-2"
                  >
                    {memberName}
                  </motion.h3>
                  <motion.p
                    layoutId={`member-role-${memberName}`}
                    className="mb-4 text-lg"
                  >
                    {memberRole}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mb-4 text-sm"
                  >
                    {memberBio}
                  </motion.p>
                  {memberLinkUrl && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <LinkButton
                        to={memberLinkUrl}
                        variant="hollow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-custom-primary hover:underline"
                      >
                        Learn More
                      </LinkButton>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default MemberCard;
