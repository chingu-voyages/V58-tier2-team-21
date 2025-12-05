export type ChinguCardPropsType = {
  gender: string;
  countryName: string;
  countryCode: string;
  roleType: string;
  voyageRole: string;
  soloProjectTier: string;
  voyageTier: string;
  voyageNum: string;
  timestamp: string;
};

export default function ChinguCard(props: ChinguCardPropsType) {
  const countryCode = props.countryCode.trim().toLowerCase();
  const countryFlag = countryCode === "uk" ? "gb" : countryCode;

  return (
    <div className="card hover:scale-105 transition-transform duration-150 
                  bg-secondary  rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 
                  max-w-xl items-center w-full">
      <img
        src={`https://flagcdn.com/80x60/${countryFlag}.png`}
        alt="flag-avatar"
        className="p-2 mr-3"
      />

      <div className="flex flex-col gap-2">
        <div className="text-white text-lg font-medium">
          {props.roleType} {props.voyageRole}
        </div>

        <div className="flex flex-wrap flex-1 items-center gap-2 text-md">
          <span className="font-semibold wrap-break-word whitespace-normal">
            {props.countryName}
          </span>
          <span className="text-black-100">•</span>
          <span>{props.gender.toLowerCase()}</span>
          <span className="text-black-100">•</span>
          <span>joined: {props.timestamp.slice(0, 4)}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <span className="bg-black-200 text-white-200 px-3 py-2 rounded-full text-sm">
            Solo tier:{" "}
            {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
          </span>
          <span className="bg-primary-light text-black-200 px-3 py-2 rounded-full text-sm">
            Voyage tier: {props.voyageTier.length > 0 ? props.voyageTier : "-"}
          </span>
          <span className="bg-gray-500 text-white px-3 py-2 rounded-full text-sm">
            Voyage: {props.voyageNum.length > 0 ? props.voyageNum : "-"}
          </span>
        </div>
      </div>
    </div>
  );
}
