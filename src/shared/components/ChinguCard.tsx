type ChinguCardPropsType = {
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
    <>
      <div className="card bg-gray-200 border border-black rounded-lg shadow-md p-2 flex flex-row items-center gap-2 max-w-full">
        
        <div className="img flex-none w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24">
          <img
          className="flag-avatar bg-gray-400 w-full h-full object-contain rounded-full border border-gray-300 shadow-lg"
          src={`https://flagcdn.com/w80/${props.countryCode.toLowerCase()}.jpg`}
          alt="flag-avatar"
        />
        </div>

        <div className="content flex-1 min-w-0 flex flex-col justify-center gap-1 max-w-[calc(100%-5rem)]">
          
          <div className="line-1 flex flex-row flex-wrap gap-2 divide-x-2 items-center wrap-break-word">
            <span className="country pr-2">{props.countryName}</span>
            <span className="year pr-2">
              Joined in: {props.timestamp.slice(0, 4)}
            </span>
            <span className="gender">{props.gender.toLowerCase()}</span>
          </div>

          <div className="line-2 flex flex-row flex-wrap gap-2 divide-x-2 items-center wrap-break-word">
            <span className="role pr-2">
              {props.roleType} {props.voyageRole}
            </span>
            <span className="solo-tier pr-2">
              Solo tier:{" "}
              {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
            </span>
            <span className="voyage-tier pr-2">
              Voyage tier:{" "}
              {props.voyageTier.length > 0 ? props.voyageTier : "-"}
            </span>
            <span className="voyage-num">
              Voyage: {props.voyageNum.length > 0 ? props.voyageNum : "-"}
            </span>

          </div>
        </div>
      </div>
    </>
  );
}
