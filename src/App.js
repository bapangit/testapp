import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router";

const Login = React.lazy(() => import("./containers/Login"));
const User = React.lazy(() => import("./containers/User"));

const Loader = () => (
  <div className="loader">
    <div>Loading...</div>
  </div>
);
function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute auth={auth} requiredComponent={<User />} />}
        />

        <Route path="login" element={auth ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
