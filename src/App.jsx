import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import { AppContextProvider } from "./context/AppContext";
import ChatContainer from "./components/ChatContainer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/dashboard/conversations"
              element={<Conversations />}
            ></Route>
          </Route>
        </Routes>
      </AppContextProvider>
    </>
  );
};

export default App;
