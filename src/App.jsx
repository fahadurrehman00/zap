import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DasboardLayout";

// Define routes with `createBrowserRouter`
const router = createBrowserRouter([
  { path: "/", element: <DashboardLayout /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
