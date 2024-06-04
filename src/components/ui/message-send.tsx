import { WhatsappIcon, MailIcon, ReplyIcon } from "@/assets/icons";
import { FC, useCallback } from "react";

type Props = {
  message: string;
  source: "mail" | "whatsapp";
  date: string;
  type: "reply" | "normal";
  replyFrom?: {
    name: string;
    image: string;
  };
};

const MessageSend: FC<Props> = ({ message, date, source, type, replyFrom }) => {
  const getMessageHead = useCallback(() => {
    let Icon: FC;
    let className = "";
    switch (source) {
      case "mail":
        Icon = MailIcon;
        className = "bg-red-100 text-red-500";
        break;
      case "whatsapp":
        Icon = WhatsappIcon;
        className = "bg-green-100";
        break;
    }
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div
            className={`size-5 rounded-full flex items-center justify-center ${className}`}
          >
            <Icon className="size-3" />
          </div>
          <span className="font-semibold text-[11px] leading-none mt-0.5 capitalize">
            {source}
          </span>
        </div>
        <div className="text-[11px] bg-[#FF8729] text-white rounded-md px-2 py-1 leading-none">
          Assigned
        </div>
      </div>
    );
  }, [source]);

  const getReplyHead = useCallback(() => {
    return (
      <div className="flex items-center gap-2">
        <div className="size-5 border border-white rounded-full bg-red-100 shadow-lg">
          <img
            className="object-cover rounded-full size-full"
            src={replyFrom?.image}
            alt=""
          />
        </div>
        <span className="font-semibold text-[11px] leading-none mt-0.5 capitalize">
          {replyFrom?.name}
        </span>
      </div>
    );
  }, [replyFrom]);

  return (
    <div className="flex justify-end">
      <div className="flex gap-2.5 w-1/2">
        <div className="grow">
          <div
            className={`rounded-lg py-1.5 px-2.5 shadow-lg ${
              type === "reply" ? "bg-blue-100" : "bg-white"
            }`}
          >
            {type === "normal" ? getMessageHead() : getReplyHead()}
            <hr className="my-1" />
            <p className="text-[10px] font-semibold">{message}</p>
            {type === "reply" && (
              <div className="flex justify-end">
                <ReplyIcon className="size-4 text-blue-500" />
              </div>
            )}
          </div>
          <span className="text-[8px] font-semibold">{date}</span>
        </div>
        <div className="size-10 rounded-full bg-red-100 shadow-lg">
          <img
            className="object-cover rounded-full size-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
