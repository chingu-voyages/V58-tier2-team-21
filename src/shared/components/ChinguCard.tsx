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
  return (
    <div className="card hover:scale-105 transition-transform duration-150 bg-primaryDark border border-gray-400 rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 max-w-xl items-center">
      <img
        src={`https://flagcdn.com/80x60/${props.countryCode.toLowerCase()}.png`}
        alt="flag-avatar"
        className="p-2 mr-3"
      />

      <div className="flex flex-col flex-1 gap-2">
        <div className="text-white text-lg font-medium">
          {props.roleType} {props.voyageRole}
        </div>

        <div className="flex flex-wrap flex-1 items-center gap-2 text-md text-textColor">
          <span className="font-semibold">{props.countryName}</span>
          <span className="text-backgroundLighter">•</span>
          <span>{props.gender.toLowerCase()}</span>
          <span className="text-backgroundLighter">•</span>
          <span>joined: {props.timestamp.slice(0, 4)}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <span className="bg-backgroundDarker text-textLight px-3 py-2 rounded-full text-sm">
            Solo tier:{" "}
            {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
          </span>
          <span className="bg-secondaryLight text-backgroundDarker px-3 py-2 rounded-full text-sm">
            Voyage tier: {props.voyageTier.length > 0 ? props.voyageTier : "-"}
          </span>
          <span className="bg-gray-500 text-white px-3 py-2 rounded-full text-sm">
            Voyage: V{props.voyageNum.length > 0 ? props.voyageNum : "-"}
          </span>
        </div>
      </div>
    </div>
  );
}
