import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

  function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}
export default DefaultLayout;
