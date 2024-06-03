import { WhatsappIcon } from "@/assets/icons";
import { FC } from "react";

type Props = {
  message: string;
};

const MessageReceive: FC<Props> = ({ message }) => {
  return (
    <div className="flex">
      <div className="flex gap-2.5 w-1/2">
        <div className="size-10 rounded-full bg-red-100 shadow-lg">
          <img
            className="object-cover rounded-full size-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="grow">
          <div className="bg-white rounded-lg py-1.5 px-2.5 shadow-lg">
            <div className="flex items-center gap-1">
              <div className="size-5 rounded-full bg-green-100 flex items-center justify-center">
                {/* @ts-ignore */}
                <WhatsappIcon className="size-3" />
              </div>
              <span className="font-semibold text-[11px] leading-none mt-0.5">
                Whatsapp
              </span>
            </div>
            <hr className="my-1" />
            <p className="text-[10px] font-semibold">{message}</p>
          </div>
          <span className="text-[8px] font-semibold">10:23 PM</span>
        </div>
      </div>
    </div>
  );
};

export default MessageReceive;
