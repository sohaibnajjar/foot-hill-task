import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/_layout";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.to}
              path={route.to}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
