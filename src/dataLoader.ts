import type { ChinguCardPropsType } from "./shared/components/ChinguCard.tsx";
import rawData from './assets/data/chinguData.json'
import rawCountryData from './assets/data/alpha2_centroids.json';

const countryData = rawCountryData as Record<string, { lat: number; lng: number }>;

export function loader(): ChinguCardPropsType[] {
	return rawData.map((item) => {
		const code = item["Country Code"]?.trim().toUpperCase();
		const centroid = countryData[code] ?? null;

		return {
			timestamp: item.Timestamp,
			gender: item.Gender.trim().toLowerCase(),
			countryCode: code,
			countryName: item["Country name (from Country)"],
			roleType: item["Role Type"],
			voyageRole: item["Voyage Role"],
			soloProjectTier: item["Solo Project Tier"],
			voyageTier: item["Voyage Tier"],
			voyageNum: item["Voyage (from Voyage Signups)"],

			centroidCoordinates: centroid
				? { lat: centroid.lat, lon: centroid.lng }
				: null,
		};
	});
}