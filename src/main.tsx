import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/Layout";
import Index from "./routes/Index"
import List from "./routes/List"
import Map from "./routes/Map"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "list", element: <List /> },
      { path: "map", element: <Map /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
