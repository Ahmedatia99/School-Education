import React from "react";
type infoBlockparams = {
  year: string;
  imgSrc: string;
  title: string;
  description: string;
};
const InfoBlock = ({ year, imgSrc, title, description }: infoBlockparams) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      {/* Left */}
      <div className="flex flex-col sm:flex-row items-center gap-5 border-2 p-5 rounded-xl [box-shadow:5px_5px_0_black] w-full md:w-auto">
        <img className="w-10 sm:w-16" src={imgSrc} alt={title} />
        <span className="font-semibold text-[25px] sm:text-4xl md:text-5xl rounded">
          {year}
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 w-full md:w-2/3">
        <h3 className="font-semibold text-lg md:text-2xl">{title}</h3>
        <p className="font-medium text-[14px] md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
function History() {
  return (
    <div className="history-container flex flex-col p-2 sm:p-10 md:p-5 gap-10 border-2 xl:mx-5 md:mx-0 [box-shadow:5px_5px_0_black] bg-white  rounded-xl">
      <InfoBlock
        year="2023"
        imgSrc="/assets/blocks.png"
        title="Resilience and Future Horizons"
        description="Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities."
      />

      <InfoBlock
        year="2017"
        imgSrc="/assets/blocks.png"
        title="Innovation and Technology"
        description="Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
      />

      <InfoBlock
        year="2012"
        imgSrc="/assets/blocks.png"
        title="Expansion and Recognition"
        description="These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
      />

      <InfoBlock
        year="2005"
        imgSrc="/assets/blocks.png"
        title="Inception and Growth"
        description="Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
      />
    </div>
  );
}

export default History;
