import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
