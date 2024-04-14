import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { lazy } from "react";
import ErrorPage from "./components/ErrorPage";
import SpecificFundraising from "./components/SpecificFundraisingPage";
import AdminPanelHome from "./components/AdminPanelHome";
import LoginPage from "./components/LoginPage";
import ApprovePage from "./components/ApprovePage"

import HomePage from "./components/HomePage"
import FundRaisingPage from "./components/FundraisingPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "createFundraising",
          element: <FundRaisingPage />,
        },
        {
          path: "adminPanelHome/approveFundraising",
          children: [
            {
              index: true,
              element: <AdminPanelHome />,
            }
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
