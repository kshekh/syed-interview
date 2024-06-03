import {
  ChatIcon,
  CheckCircleIcon,
  ClipboardIcon,
  CodeIcon,
  DollarIcon,
  FlagIcon,
  GlobeIcon,
  GmailIcon,
  GroupIcon,
  HomeBuildingIcon,
  KeyIcon,
  LinkIcon,
  LocationIcon,
  LoudSpeakerIcon,
  MailIcon,
  PhoneIcon,
  RadarIcon,
  VerifiedIcon,
  WhatsappIcon,
} from "@/assets/icons";

const SidebarLeft = () => {
  return (
    <div className="px-3 border-r overflow-y-auto pb-12">
      {/*  */}
      <div className="py-8 border-b">
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-semibold text-xl">
            AED 100,000
          </span>
          <span className="bg-[#01C49B] text-xs text-white py-1 rounded-full px-2 flex items-center gap-1">
            <CheckCircleIcon />
            <span>Closed, 29 January 2024</span>
          </span>
        </div>
      </div>

      {/*  */}
      <div className="pt-8 pb-5">
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-semibold text-xl">
            Marketing
          </span>
          <span className="bg-[#FC6666] text-xs text-white py-2 rounded-lg px-2.5 flex items-center gap-1">
            <LoudSpeakerIcon />
            Marketing
          </span>
        </div>
      </div>

      {/*  */}
      <div className="border rounded-2xl shadow-sky-100 shadow-md">
        {/*  */}
        <div className="flex items-start justify-between pt-7 pb-1 px-2.5 border-b">
          <div className="">
            <p className="text-sm font-semibold font-montserrat">
              Farukh Iminov
            </p>
            <p className="text-xs text-muted font-montserrat font-medium">
              Created at 15 Jan, 2024 10:15 AM
            </p>
          </div>
          <span className="font-montserrat font-semibold text-sm">AED 100</span>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 p-2.5 gap-y-2 overflow-hidden">
          <div className="flex items-center gap-2.5">
            <div className="bg-green-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <LinkIcon />
            </div>
            <div>
              <p className="text-xs">Source</p>
              <p className="font-semibold">Property Finder</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-purple-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <GroupIcon />
            </div>
            <div>
              <p className="text-xs">Channel</p>
              <p className="font-semibold">Whatsapp</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 col-span-2">
            <div className="bg-red-100 rounded-full size-8 shrink-0 flex items-center justify-center ">
              <LinkIcon />
            </div>
            <div>
              <p className="text-xs">Page Link</p>
              <p className="font-semibold text-sm">
                https://fandcproperties.ae/offplan/256
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-sky-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <CodeIcon />
            </div>
            <div>
              <p className="text-xs">Phone Views</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <KeyIcon />
            </div>
            <div>
              <p className="text-xs">UTM Term</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <ClipboardIcon />
            </div>
            <div>
              <p className="text-xs">UTM Content</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <LinkIcon />
            </div>
            <div>
              <p className="text-xs">UTM Medium</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="pt-8 pb-5">
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-semibold text-xl">
            Agent who worked
          </span>
        </div>
      </div>

      {/*  */}
      <div className="border rounded-2xl shadow-sky-100 shadow-md">
        {/*  */}
        <div className="flex items-center justify-between pt-7 pb-1 px-2.5 border-b">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full bg-red-100 shrink-0 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <p className="text-sm font-semibold font-montserrat text-[#040404]">
                  Farukh Iminov
                </p>
                <VerifiedIcon />
              </div>
              <p className="text-xs text-muted font-montserrat font-medium">
                Created at 15 Jan, 2024 10:15 AM
              </p>
            </div>
          </div>
          <span className="font-montserrat font-semibold text-sm">AED 100</span>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 p-2.5 gap-y-2 overflow-hidden">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-xs">Calls</p>
              <p className="font-semibold">Property Finder</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-green-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <WhatsappIcon />
            </div>
            <div>
              <p className="text-xs">Whatsapp</p>
              <p className="font-semibold">Whatsapp</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-yellow-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <ChatIcon />
            </div>
            <div>
              <p className="text-xs">Manager Comments</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-red-100 rounded-full size-8 shrink-0 flex items-center justify-center">
              <GmailIcon />
            </div>
            <div>
              <p className="text-xs">Mail</p>
              <p className="font-semibold">000 / 000</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="pt-8 pb-5">
        <div className="flex justify-between items-center">
          <span className="font-montserrat font-semibold text-xl">
            Lead Details
          </span>
        </div>
      </div>

      {/*  */}
      <div className="border rounded-2xl shadow-sky-100 shadow-md p-5">
        {/*  */}
        <table className="text-xs font-montserrat w-full">
          <tbody>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <FlagIcon />
                  <span className="font-medium">Campaign Name</span>
                </div>
              </td>
              <td className="py-2">Campaign Name</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <MailIcon />
                  <span className="font-medium">Email</span>
                </div>
              </td>
              <td className="py-2">Email</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <GlobeIcon />
                  <span className="font-medium">Language</span>
                </div>
              </td>
              <td className="py-2">Language</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <DollarIcon />
                  <span className="font-medium">Budget</span>
                </div>
              </td>
              <td className="py-2">Budget</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <HomeBuildingIcon />
                  <span className="font-medium">Property</span>
                </div>
              </td>
              <td className="py-2">Property</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <RadarIcon />
                  <span className="font-medium">Source</span>
                </div>
              </td>
              <td className="py-2">Source</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <LocationIcon />
                  <span className="font-medium">Country</span>
                </div>
              </td>
              <td className="py-2">Country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SidebarLeft;
