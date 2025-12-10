import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/layouts/RootLayout";
import FilterLayout from "./components/layouts/FilterLayout";
import Index from "./routes/Index";
import List from "./routes/List";
import Map from "./routes/Map";
import './index.css';
import { loader as rootLoader } from "./dataLoader";


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
          { id: "list", path: "list", element: <List /> },
          { id: "map", path: "map", element: <Map /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
