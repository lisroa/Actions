import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import MyActions from "./pages/MyActions";
import Login from "./pages/Login";
import Status from "./pages/Status";
import { DataProvider } from "./context/context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <MyActions /> },
    { path: "/login", element: <Login /> },
    { path: "/status", element: <Status /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
