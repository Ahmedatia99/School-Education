import React from "react";
import SubContainer from "../common/SubContainer";
type CardParams = {
  imgSrc: string;
  name: string;
  h3text: string;
  ptext: string;
};
function TeamMemberCard({ imgSrc, name, h3text, ptext }: CardParams) {
  return (
    <div className="container flex - flow-col gap-10  bg-white border-2 rounded-xl [box-shadow:5px_5px_0_black]">
      <div className="box flex flex-col p-5 gap-5">
        <div className="box-top flex flex-row justify-between">
          <div className="flex flex-row gap-3 items-center">
            <img src={imgSrc} alt={{ name } + " Photo"} className="w-20" />
            <span className=" font-bold text-[20px] w-full">{name}</span>
          </div>
          <div className="top-right">
            <div className="w-18">
              <img src="/assets/message.png" alt="Message Icon" />
            </div>
          </div>
        </div>
        <div className="box-bottom flex flex-col p-5 gap-5 border-2 rounded-xl bg-light">
          <h3 className="font-bold text-[20px]">{h3text} </h3>
          <p className="font-medium text-[16px]">{ptext}</p>
        </div>
      </div>
    </div>
  );
}
function TeamMembers() {
  return (
    <div>
      <SubContainer
        btnText="Our Teachers With Experties"
        h2Text="Our Team Members"
        pText="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <div className="teamMembersContainer grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8">
        <TeamMemberCard
          imgSrc="/assets/msSara.png"
          name="Ms. Sarah Anderson"
          h3text="Qualification: Bachelor's Degree in Early Childhood Education"
          ptext="Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
        />
        <TeamMemberCard
          imgSrc="/assets/mrMichael.png"
          name="Mr. Michael Turner"
          h3text="Qualification: Bachelor's Degree in Physical Education"
          ptext="Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
        />
        <TeamMemberCard
          imgSrc="/assets/msJessica.png"
          name="Ms. Jessica Lee"
          h3text="Qualification: Master's Degree in Special Education"
          ptext="Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
        />
        <TeamMemberCard
          imgSrc="/assets/mrWilliam.png"
          name="Mr. William Parker"
          h3text="Qualification: Bachelor's Degree in Fine Arts"
          ptext="Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
        />
      </div>
    </div>
  );
}
export default TeamMembers;
