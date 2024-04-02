import CompanySidebar from "../../components/Company/CompanySidebar";
import CompanyProfile from "../../components/Company/CompanyProfile";
import PostJob from "../../components/Company/PostJob";
// import Applicant from "../components/Company/Applicant";
// import ManageJobs from "../components/Company/ManageJobs";
import CompanyInfo from "../../components/Company/CompanyInfo";

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
