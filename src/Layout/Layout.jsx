import { Outlet } from "react-router-dom";
import Header, { CompanyHeader, EmployeeHeader } from "../components/Headers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=''>
      <Header />
      {/* <CompanyHeader /> */}
      {/* <EmployeeHeader /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
