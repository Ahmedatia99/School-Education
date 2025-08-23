import React from "react";

// تعريف النوع
type Student = {
  Title: string;
  img: string;
  SubTitle: string;
  line: string;
};

// props للـ component
type StudentsLearnProps = {
  students: Student[];
};

export default function StudentsLearn({ students }: StudentsLearnProps) {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center">
        {/* استخدمنا grid بدل flex */}
        <div className="  lg:w-[90%] md:w-full h-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5">
          {students.map((student) => (
            <div
              key={student.Title}
              className="relative border-2 border-black bg-white rounded-xl shadow  transform transition-transform duration-200 hover:scale-102"
            >
              <div className="flex justify-center items-center relative">
                <img
                  className="z-2 p-7 h-full rounded-xl "
                  src={student.img}
                  alt=""
                />
                <div
                  className={
                    student.line === "column"
                      ? "bg-[#FFEFE5] z-1 absolute border-2 border-t-0 border-black w-[27%] h-[100%] top-0 left-1/2 transform -translate-x-1/2 rounded-bl-md rounded-br-md"
                      : student.line === "row"
                      ? "border-t bg-[#FFEFE5] z-1 absolute border-2 border-black w-full h-[25%] bottom-7 border-x-0"
                      : student.line === "row-bot"
                      ? "border-t bg-[#FFEFE5] z-1 absolute border-2 border-black w-full h-[25%] border-x-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      : ""
                  }
                ></div>
              </div>

              <div className="z-3 text-center p-7 pt-2">
                <h3 className="text-[24px] font-bold">{student.Title}</h3>
                <p className="font-semibold text-l">{student.SubTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
