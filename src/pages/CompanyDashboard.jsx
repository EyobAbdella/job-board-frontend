import React from "react";
import CompanySidebar from "../components/CompanySidebar";
import CompanyProfile from "../components/CompanyProfile";
import PostJob from "../components/PostJob";
import Applicant from "../components/Applicant";
import ManageJobs from "../components/ManageJobs";
import CompanyInfo from "../components/CompanyInfo";

const CompanyDashboard = () => {
  return (
    <div className='flex items-start border-t border-gray-300 mt-8'>
      <CompanySidebar />
      {/* <CompanyInfo /> */}
      {/* <CompanyProfile /> */}
      <PostJob />
      {/* <Applicant /> */}
      {/* <ManageJobs /> */}
    </div>
  );
};

export default CompanyDashboard;
