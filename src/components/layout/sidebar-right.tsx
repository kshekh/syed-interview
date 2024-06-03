import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SidebarRight = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="px-3 py-2.5 border-l">
        <div className="grid grid-cols-2 border rounded-full mb-5">
          <button
            className={`py-2.5 rounded-full duration-200 ${
              activeTab === 0
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Calendar
          </button>
          <button
            className={`py-2.5 rounded-full duration-200 ${
              activeTab === 1
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Meeting
          </button>
        </div>
        <Calendar
          onChange={onChange}
          value={value}
          className={
            "bg-white border !border-gray-200 rounded-2xl p-2.5 !w-full"
          }
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString(locale, { weekday: "narrow" });
          }}
        />
      </div>
    </>
  );
};

export default SidebarRight;
