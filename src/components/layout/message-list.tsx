import {
  CheckCircleIcon,
  GmailIcon,
  PhoneIncomingIcon,
  WhatsappIcon,
} from "@/assets/icons";
import BgImage from "./../../assets/images/whatsapp-bg.jpg";

const MessageList = () => {
  return (
    <>
      <div className="overflow-hidden px-2.5 py-3 h-full flex flex-col">
        <div className="border rounded-2xl py-2.5 px-3 shadow-sky-100 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2.5 items-center">
              <div className="rounded-full size-9 bg-red-100 shadow border border-white"></div>
              <div className="font-montserrat">
                <p className="text-sm font-medium">Syed Tanveer</p>
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
            <button className="text-muted hover:text-foreground hover:font-semibold font-medium pt-6 pb-2 border-r">
              All Chats
            </button>
            <button className="text-muted hover:text-foreground hover:font-semibold font-medium pt-6 pb-2 border-r">
              Calls
            </button>
            <button className="text-muted hover:text-foreground hover:font-semibold font-medium pt-6 pb-2 border-r">
              WhatsApp
            </button>
            <button className="text-muted hover:text-foreground hover:font-semibold font-medium pt-6 pb-2">
              Email
            </button>
          </div>
          {/* Messages List */}
          <div
            className="grow"
            style={{
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
            }}
          ></div>

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
                <div className="flex h-12 items-center">
                  <input
                    type="text"
                    className="grow bg-transparent text-[10px] focus:outline-none"
                    placeholder="Message"
                  />
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
