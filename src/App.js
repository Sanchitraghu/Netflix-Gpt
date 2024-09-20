import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import ProtextedRoute from "./components/protected-route/protexted-route";
import Home from "./pages/home-page/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtextedRoute>
          <Home />
        </ProtextedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
