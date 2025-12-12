import type { CountryDataType } from "./Marker"
import clsx from "clsx";

type MapPopupProps = {
  country: CountryDataType
}

export default function MapPopup({country}:MapPopupProps) {
  const {name, count, code } = country;

  const countryCode = code.trim().toLowerCase();
  const countryFlag = countryCode === "uk" ? "gb" : countryCode;

  return (
    <div
      className={clsx(
        // positioning and layout
        "absolute top-11 -right-15 w-fit min-w-max flex flex-col gap-2 px-4 py-2",
        // styling
        "bg-black-200/85 border-2 border-black-200 text-white-100 rounded-md shadow-lg"
      )}
    >
      <header className="flex items-center gap-2 whitespace-nowrap">
        <img
          src={`https://flagcdn.com/80x60/${countryFlag}.png`}
          alt="flag-avatar"
          className="h-4 w-auto"
        />
        <h4 className="text-lg font-bold">{name}</h4>
      </header>
      <p className="whitespace-nowrap">Number of chingus: {count}</p>
    </div>
  )
}