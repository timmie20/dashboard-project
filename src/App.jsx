import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import { AppContextProvider } from "./context/AppContext";
import ChatContainer from "./components/ChatContainer";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/conversations" element={<Conversations />}>
              <Route path=":chatId" element={<ChatContainer />} />
            </Route>
          </Route>
        </Routes>
      </AppContextProvider>
    </>
  );
};

export default App;
