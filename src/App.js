import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import { ProtectedRoute } from "./components";
import Home from "./pages/home-page/home";
import Checkout from "./pages/checkout/checkout";
import PaymentSuccess from "./pages/payment-success/payment-success";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/checkout/:userId",
      element: (
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      ),
    },
    {
      path: "/payment-success/:userId",
      element: (
        <ProtectedRoute>
          <PaymentSuccess />
        </ProtectedRoute>
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
