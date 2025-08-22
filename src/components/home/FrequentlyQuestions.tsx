import { useState } from "react";
import FAQ from "./FAQ";
import SubContainer from "./../common/SubContainer";

const FrequentlyQuestions = () => {
  interface MainQuestionItem {
    id: number;
    heading: string;
    info: string;
  }
  interface QuestionsItem {
    id: number;
    categoryId: number;
    ques: string;
    ans: string;
  }
  const mainQuestion: MainQuestionItem[] = [
    {
      id: 1,
      heading: "Policies",
      info: "Many desktop publishing packages and web page editors now use",
    },
    {
      id: 2,
      heading: "Privacy Policy",
      info: "Many desktop publishing packages and web page editors now use",
    },
    {
      id: 3,
      heading: "Privacy Policy",
      info: "Many desktop publishing packages and web page editors now use",
    },
  ];
  const questions: QuestionsItem[] = [
    {
      id: 0,
      categoryId: 1,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
    {
      id: 1,
      categoryId: 2,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      categoryId: 2,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      categoryId: 3,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      categoryId: 3,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      categoryId: 3,
      ques: "lorem ipsum dolor sit amet cons ectetur",
      ans: "lorem ipsum dolor sit amet",
    },
  ];
  const [clicked, setClicked] = useState<number | null>(1);

  const filteredQuestions = questions.filter(
    (faq) => Number(faq.categoryId) === clicked
  );

  return (
    <main className="pt-10  bg-older overflow-hidden relative flex justify-between items-center">
      <div className="container mx-auto px-5 relative z-0 h-full">
        <SubContainer
          h2Text={"Frequently Asked Questions"}
          pText={
            "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          }
          btnText="Solutions For The Doubts"
        />
        <div className="flex justify-center items-center gap-5 max-sm:gap-4 relative z-20 h-full max-sm:flex-col">
          {/* Sidebar Categories */}
          <div className="bg-orange text-gray-700 max-w-80 p-5 flex flex-col items-center gap-5 relative">
            {mainQuestion.map((el) => (
              <a
                key={el.id}
                onClick={() => setClicked(Number(el.id))}
                className={`hover:scale-105 p-2 cursor-pointer transition-all ${
                  clicked === Number(el.id)
                    ? "border-2 rounded-lg shadow-md border-dark font-bold scale-105 bg-light"
                    : "scale-100"
                }`}
              >
                <h1 className="text-lg font-semibold max-sm:text-base">
                  {el.heading}
                </h1>
                <p className="text-sm max-sm:text-xs font-normal text-gray-500">
                  {el.info}
                </p>
              </a>
            ))}
          </div>

          {/* FAQ Component */}
          <FAQ questions={filteredQuestions} />
        </div>
      </div>
    </main>
  );
};

export default FrequentlyQuestions;
