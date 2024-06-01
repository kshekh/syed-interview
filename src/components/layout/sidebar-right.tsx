import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SidebarRight = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <div className="px-3 py-2.5 border-l">
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
