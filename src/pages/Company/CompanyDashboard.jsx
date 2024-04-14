import CompanySidebar from "../../components/Company/CompanySidebar";
import { Outlet } from "react-router-dom";
const CompanyDashboard = () => {
  return (
    <div className='flex items-start border-t border-gray-300 mt-8'>
      <CompanySidebar />
      <Outlet />
    </div>
  );
};

export default CompanyDashboard;
