import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/layout";
import paths from "./routes/paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {paths.map((page) => (
            <Route key={page.pathName} path={page.to} element={<page.page />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
