import type { ChinguCardPropsType } from "./shared/components/ChinguCard.tsx";
import rawData from './assets/data/chinguData.json'

export function loader(): ChinguCardPropsType[] {
  return rawData.map((item) => ({
    timestamp: item.Timestamp,
    gender: item.Gender.trim().toLowerCase(),
    countryCode: item["Country Code"],
    countryName: item["Country name (from Country)"],
    roleType: item["Role Type"],
    voyageRole: item["Voyage Role"],
    soloProjectTier: item["Solo Project Tier"],
    voyageTier: item["Voyage Tier"],
    voyageNum: item["Voyage (from Voyage Signups)"],
  }));
}