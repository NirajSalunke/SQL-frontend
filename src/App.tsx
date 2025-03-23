// import SQLeditor from "./components/SQLeditor";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import QueryTool from "./pages/QueryTool";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<QueryTool />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
