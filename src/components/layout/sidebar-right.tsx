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
      <div className="px-3 py-2.5 border-l overflow-y-auto">
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
            "bg-white border !border-gray-200 rounded-2xl p-2.5 !w-full shadow-sky-100 shadow-md"
          }
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString(locale, { weekday: "narrow" });
          }}
        />

        {/*  */}
        <div className="rounded-2xl shadow-sky-100 shadow-md border mt-4">
          <div className="pt-8 text-black border-b font-bold px-10">
            Lead Follow ups
          </div>
          <div className="px-4">
            <div className="flex text-[10px] border-b font-poppins">
              <div className="w-20 border-r flex items-center justify-start font-semibold">
                9:00 PM
              </div>
              <div className="grow bg-[#F06664] rounded-lg flex px-4 py-1.5 my-2 mx-2">
                <div className="text-white">
                  <p className="font-semibold">David Lee</p>
                  <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex text-[10px] border-b font-poppins">
              <div className="w-20 border-r flex items-center justify-start font-semibold">
                11:10 PM
              </div>
              <div className="grow bg-[#FF1C31] rounded-lg flex px-4 py-1.5 my-2 mx-2">
                <div className="text-white">
                  <p className="font-semibold">David Lee</p>
                  <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex text-[10px] border-b font-poppins">
              <div className="w-20 border-r flex items-center justify-start font-semibold">
                12:05 PM
              </div>
              <div className="grow bg-[#FFB663] rounded-lg flex px-4 py-1.5 my-2 mx-2">
                <div className="text-white">
                  <p className="font-semibold">David Lee</p>
                  <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex text-[10px] font-poppins">
              <div className="w-20 border-r flex items-center justify-start font-semibold">
                9:00 PM
              </div>
              <div className="grow bg-[#F06664] rounded-lg flex px-4 py-1.5 my-2 mx-2">
                <div className="text-white">
                  <p className="font-semibold">David Lee</p>
                  <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarRight;
