import { FaStar } from "react-icons/fa";

type DividerType = "lines" | "dots" | "stars";

interface SectionDividerProps {
  type?: DividerType;
}

export default function SectionDivider({
  type = "lines",
}: SectionDividerProps) {
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      {/* Left circle */}
      <span className="w-3 h-3 rounded-full border-2 border-black"></span>

      {/* Middle part */}
      <div className="flex items-center gap-2">
        {Array.from({ length: 6 }).map((_, i) => {
          if (type === "lines") {
            return (
              <span key={i} className="w-8 h-1 bg-orange-400 rounded"></span>
            );
          }
          if (type === "dots") {
            return (
              <span
                key={i}
                className="w-2 h-2 bg-orange-400 rounded-full"
              ></span>
            );
          }
          if (type === "stars") {
            return <FaStar key={i} className="w-4 h-4 text-orange-400" />;
          }
          return null;
        })}
      </div>

      {/* Right circle */}
      <span className="w-3 h-3 rounded-full border-2 border-black"></span>
    </div>
  );
}
