import { Outlet } from "react-router-dom";
// import Footer from "../footer/footer";
import Header from "../header/header";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
