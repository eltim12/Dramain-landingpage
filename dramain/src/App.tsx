import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import LegalPage from "@/pages/legal";
import TncPage from "@/pages/tnc";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<LegalPage />} path="/legal" />
      <Route element={<TncPage />} path="/tnc" />
    </Routes>
  );
}

export default App;
