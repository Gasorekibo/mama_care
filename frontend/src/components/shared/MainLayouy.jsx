import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

export default function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
