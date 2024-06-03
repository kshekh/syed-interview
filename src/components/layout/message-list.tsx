import {
  CheckCircleIcon,
  GmailIcon,
  PhoneIncomingIcon,
  SendIcon,
  UserOutIcon,
  WhatsappIcon,
} from "@/assets/icons";
import BgImage from "./../../assets/images/whatsapp-bg.jpg";
import { useState } from "react";
import MessageReceive from "../ui/message-receive";
import MessageSend from "../ui/message-send";

const TABS = [
  {
    id: 1,
    title: "All Chats",
  },
  {
    id: 2,
    title: "Calls",
  },
  {
    id: 3,
    title: "WhatsApp",
  },
  {
    id: 4,
    title: "Email",
  },
];

const MessageList = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="overflow-hidden px-2.5 py-3 h-full flex flex-col">
        <div className="border rounded-2xl py-2.5 px-3 shadow-sky-100 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2.5 items-center">
              <div className="rounded-full size-9 bg-red-100 shadow border border-white overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="font-montserrat">
                <p className="text-sm font-semibold">Syed Tanveer</p>
                <p className="text-muted text-xs">+97155585858</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <span className="text-xs bg-[#01C49B] rounded-2xl text-white px-1 pl-2 py-1.5 leading-none flex items-center gap-2">
                <span>Verified</span>
                <CheckCircleIcon />
              </span>
              <div className="flex gap-2">
                <span className="size-8 rounded-full bg-red-100 flex items-center justify-center">
                  <GmailIcon />
                </span>
                <span className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                  <WhatsappIcon />
                </span>
                <span className="size-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <PhoneIncomingIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="border rounded-2xl mt-3 grow flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-4 text-center border-b text-sm">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  `font-medium pt-6 pb-2 border-r` +
                  `
                  ${
                    activeTab === tab.id
                      ? "text-foreground font-semibold"
                      : "text-muted hover:text-foreground hover:font-semibold"
                  }`
                }
              >
                {tab.title}
              </button>
            ))}
          </div>
          {/* Messages List */}
          <div
            className="grow p-2 overflow-hidden"
            style={{
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="overflow-y-auto h-full">
              <MessageReceive message="Hello from earth!!!" />
              <MessageSend message="Hello from earth!!!" />
              <MessageReceive message="Hello from earth!!!" />
              <MessageSend message="Hello from earth!!!" />
              <MessageReceive message="Hello from earth!!!" />
              <MessageSend message="Hello from earth!!!" />
              <MessageReceive message="Hello from earth!!!" />
              <MessageSend message="Hello from earth!!!" />
              <MessageReceive message="Hello from earth!!!" />
            </div>
          </div>

          {/* Text Input */}
          <div className="border-t p-2.5">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              <span className="rounded-xl bg-yellow-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
              <span className="rounded-xl bg-green-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
              <span className="rounded-xl bg-blue-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
              <span className="rounded-xl bg-orange-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
              <span className="rounded-xl bg-red-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
              <span className="rounded-xl bg-purple-500 text-white py-2.5 px-9 text-[9px]">
                Assigned
              </span>
            </div>

            <div className="mt-2.5">
              <form action="" className="border rounded-xl bg-gray-200">
                <div className="flex h-12 items-center text-[10px]">
                  <div className="pr-4 mr-4 border-r border-gray-300 h-full flex items-center">
                    <select className="font-montserrat bg-transparent px-6 focus:outline-none">
                      <option value="agent">Agent</option>
                      <option value="option2">Option 2</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="grow bg-transparent focus:outline-none"
                    placeholder="Message"
                  />
                  <div className="pr-2.5 flex items-center gap-2">
                    <button className="size-6 rounded-full shadow bg-orange-400 flex items-center justify-center">
                      <SendIcon />
                    </button>
                    <button className="size-6 rounded-full shadow bg-green-400 flex items-center justify-center">
                      <UserOutIcon />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageList;
