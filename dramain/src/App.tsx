import { Route, Routes } from "react-router-dom";

import ScrollToHash from './hooks/useHashScroll';
import IndexPage from "@/pages/index";
import LegalPage from "@/pages/legal";
import TncPage from "@/pages/tnc";
import TopupPage from "@/pages/topup";
import DeletePage from "@/pages/delete";

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<LegalPage />} path="/legal" />
        <Route element={<TncPage />} path="/tnc" />
        <Route element={<TopupPage />} path="/topup" />
        <Route element={<DeletePage />} path="/delete" />
      </Routes>
    </>
  );
}

export default App;
