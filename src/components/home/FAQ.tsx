import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  ques: string;
  ans: string;
}

interface FAQProps {
  questions: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ questions }) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section>
      <div className="flex flex-col gap-3 transition-all">
        {questions?.length > 0 ? (
          questions.map((el) => (
            <div
              key={el.id}
              className={`px-3 py-5 border-2 border-dark rounded-lg bg-orange shadow-lg ${
                visibleIndex === el.id ? "!bg-white" : ""
              }`}
            >
              <div className="flex items-center justify-between ">
                <h2 className="text-dark text-base md:text-lg max-sm:text-sm text-capitalize">
                  {el.ques}
                </h2>
                <button
                  onClick={() => toggleVisibility(el.id)}
                  aria-expanded={visibleIndex === el.id}
                  aria-label={
                    visibleIndex === el.id ? "Collapse answer" : "Expand answer"
                  }
                  className="transition-all p-2 rounded-md "
                >
                  {visibleIndex === el.id ? (
                    <FaMinus
                      size={25}
                      className="md:ml-8 mobile:ml-3 cursor-pointer rounded-md text-dark p-1.5 border-2 border-dark bg-light"
                    />
                  ) : (
                    <FaPlus
                      size={25}
                      className="md:ml-8 mobile:ml-3 rounded-md cursor-pointer text-dark p-1.5 border-2 border-dark bg-light"
                    />
                  )}
                </button>
              </div>
              <AnimatePresence>
                {visibleIndex === el.id ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 1, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-dark text-sm md:text-base border-t pt-3 border-gray-400 text-capitalize">
                      {el.ans}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Select type of Questions.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
