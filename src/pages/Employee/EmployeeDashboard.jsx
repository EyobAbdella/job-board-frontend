import EmployeeSidebar from "../../components/Employee/EmployeeSidebar";
import { Outlet } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div className='flex items-start border-t border-gray-300 mt-8'>
      <EmployeeSidebar />
      <Outlet />
    </div>
  );
};

export default EmployeeDashboard;
