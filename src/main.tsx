import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/Layout";
import Index from "./routes/Index";
import List from "./routes/List";
import Map from "./routes/Map";
import './index.css';
import rawData from "./assets/data/chinguData.json";
import type { ChinguCardPropsType } from "./shared/components/ChinguCard";

const chinguData: ChinguCardPropsType[] = rawData.map((item) => ({
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "list", element: <List data={chinguData} /> },
      { path: "map", element: <Map /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
