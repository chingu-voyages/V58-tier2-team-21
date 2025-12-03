import { BrowserRouter, Routes, Route, Link } from "react-router";
import ChinguListPage from "./shared/components/ChinguListPage";
import rawData from "./data/chinguData.json";
import type { ChinguCardPropsType } from "./shared/components/ChinguCard";
import Layout from "./shared/components/Layout";

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

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/chingu">Go to Chingu List</Link>
      </nav>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Hello World</h1>} />
          <Route
            path="/chingu"
            element={<ChinguListPage data={chinguData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
