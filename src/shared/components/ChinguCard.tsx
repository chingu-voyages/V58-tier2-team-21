import clsx from "clsx";

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
  centroidCoordinates: { lat: number; lon: number } | null;
};

export default function ChinguCard(props: ChinguCardPropsType) {
  const countryCode = props.countryCode.trim().toLowerCase();
  const countryFlag = countryCode === "uk" ? "gb" : countryCode;

  return (
    <article
      className={clsx(
        "border-2 bg-secondary border-secondary-light text-white-200 text-sm hover:bg-secondary-light",
        "p-4 flex flex-col gap-2 rounded-md",
      )}
    >
      <header>
        <h3 className="font-semibold text-lg">
          {props.roleType} {props.voyageRole}
        </h3>
      </header>
      <div className="flex flex-col grow justify-between gap-4">
        <section className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/80x60/${countryFlag}.png`}
              alt="flag-avatar"
              className="h-4 w-auto"
            />
            <p className="wrap-break-word whitespace-normal">
              {props.countryName}
            </p>
          </span>
          <span className="text-black-100">•</span>
          <span>{props.gender.toLowerCase()}</span>
          <span className="text-black-100">•</span>
          <span>joined: {props.timestamp.slice(0, 4)}</span>
        </section>
        <section className="flex items-center gap-2 flex-wrap">
          <div className="flex flex-col gap-1 text-sm grow shrink">
            <p>Solo project tier</p>
            <span className="px-2 py-1 rounded-sm bg-black-200">
              {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-sm grow shrink">
            <p>Voyage tier</p>
            <span className="px-2 py-1 rounded-sm bg-primary-light text-black-100">
              {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-sm grow shrink">
            <p>Voyage</p>
            <span className="px-2 py-1 rounded-sm bg-white-100 text-black-100">
              {props.soloProjectTier.length > 0 ? props.soloProjectTier : "-"}
            </span>
          </div>
        </section>
      </div>
    </article>
  );
}
