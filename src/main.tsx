import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/layouts/RootLayout.tsx";
import FilterLayout from "./components/layouts/FilterLayout.tsx";
import Index from "./routes/Index";
import "./index.css";
import { loader as rootLoader } from "./dataLoader";
import List from "./routes/List";
import Map from "./routes/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      {
        element: <FilterLayout />,
        loader: rootLoader,
        children: [
          { path: "list", element: <List /> },
          { path: "map", element: <Map /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);