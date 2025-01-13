import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AllEducation from "./pages/Education/AllEducation";
import MainLayout from "./components/shared/MainLayouy";
import Layout from "./components/Dashboard/Shared/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import { ProtectedRoute } from "./components/Routes/protectedRoutes";
import AllUsers from "./components/Dashboard/AllUsers";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/pregnancy-education" element={<AllEducation />} />
          </Route>
        </Route>
        <Route path="/profile/:id" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="education" element={<AllEducation />} />
          <Route path="users" element={<AllUsers />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
