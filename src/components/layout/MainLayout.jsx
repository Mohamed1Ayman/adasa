import { Outlet } from "react-router";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Background from "../backGround/Background";

const MainLayout = () => {
  return (
    <Background>
      <Nav />

      <main className="pt-28">
        <Outlet />
      </main>

      <Footer />
    </Background>
  );
};

export default MainLayout;
