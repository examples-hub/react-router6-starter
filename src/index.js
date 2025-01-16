import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import App from "./App";
import About from "./About";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Index() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route index path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StrictMode>
);
