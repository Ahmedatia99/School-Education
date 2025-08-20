import React from "react";

function History() {
  return (
    <div>
      <div className="history-container flex flex-col p-10 md:p-5 gap-10 border-2 xl:mx-5 md:mx-0 [box-shadow:5px_5px_0_black] bg-white  rounded-xl">
        {/* ===== 2023 Section ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left */}
          <div className="flex items-center gap-5 border-2 p-5  rounded-xl [box-shadow:5px_5px_0_black] w-full md:w-auto ">
            <img className="w-16" src="/assets/blocks.png" alt="blocks" />
            <span className="font-bold text-4xl md:text-5xl   rounded">
              2023
            </span>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <h3 className="font-bold text-xl md:text-2xl">
              Resilience and Future Horizons
            </h3>
            <p className="font-medium text-base md:text-lg leading-relaxed">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education. Looking ahead with
              optimism, we envision a future filled with boundless possibilities
              lorem20
            </p>
          </div>
        </div>

        {/* ===== 2017 Section ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex items-center gap-5 border-2 p-5    rounded-xl [box-shadow:5px_5px_0_black] w-full md:w-auto">
            <img className="w-16" src="/assets/blocks.png" alt="blocks" />
            <span className="font-bold text-4xl md:text-5xl   rounded">
              2017
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <h3 className="font-bold text-xl md:text-2xl">
              Innovation and Technology
            </h3>
            <p className="font-medium text-base md:text-lg leading-relaxed">
              Innovation became the driving force behind our kindergarten's
              progress from 2016 to 2020. Embracing the latest educational
              technologies, we crafted engaging and interactive learning
              experiences for our students.
            </p>
          </div>
        </div>

        {/* ===== 2012 Section ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center    gap-8">
          <div className="flex items-center gap-5 border-2 p-5    rounded-xl [box-shadow:5px_5px_0_black] w-full md:w-auto">
            <img className="w-16" src="/assets/blocks.png" alt="blocks" />
            <span className="font-bold text-4xl md:text-5xl   rounded">
              2012
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <h3 className="font-bold text-xl md:text-2xl">
              Expansion and Recognition
            </h3>
            <p className="font-medium text-base md:text-lg leading-relaxed">
              These years marked as a period of expansion and recognition for
              our school. As we extended our facilities and enhanced our
              curriculum, we received accolades for our commitment to quality
              education and innovative teaching methodologies.
            </p>
          </div>
        </div>

        {/* ===== 2005 Section ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center    gap-8">
          <div className="flex items-center gap-5 border-2 p-5    rounded-xl [box-shadow:5px_5px_0_black] w-full md:w-auto">
            <img className="w-16" src="/assets/blocks.png" alt="blocks" />
            <span className="font-bold text-4xl md:text-5xl    rounded">
              2005
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <h3 className="font-bold text-xl md:text-2xl">
              Inception and Growth
            </h3>
            <p className="font-medium text-base md:text-lg leading-relaxed">
              Established in 2005, our kindergarten school began its journey
              with a vision to provide a nurturing space for young minds to
              explore, learn, and grow. Over the next five years, we witnessed
              significant growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
