import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Google from "./pages/Google";
import Verify from "./pages/Verify";
import Activate from "./pages/Activate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Layout from "./Layout/Layout";
import Companies from "./pages/Company/Companies";
import Employee from "./pages/Employee/Employee";
import EmployeeProfile from "./pages/Employee/EmployeeProfile";
import JobDetail from "./pages/JobDetail";
import CompanyDetail from "./pages/Company/CompanyDetail";
import EmployeeDashboard from "./pages/Employee/EmployeeDashboard";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import { Toaster } from "react-hot-toast";
import UserTypeSelection from "./pages/UserTypeSelection";
import CompanyInfo from "./components/Company/CompanyInfo";
import ManageJobs from "./components/Company/ManageJobs";
import PostJob from "./components/Company/PostJob";
import CompanyProfile from "./components/Company/CompanyProfile";
import Applicant from "./components/Company/Applicant";
import EmployeeInfo from "./components/Employee/EmployeeInfo";
import Profile from "./components/Employee/Profile";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='verify' element={<Verify />} />
          <Route path='google' element={<Google />} />
          <Route path='user-account-type' element={<UserTypeSelection />} />
          <Route path='activate/:uid/:token' element={<Activate />} />
          <Route element={<Layout />}>
            <Route path='company-dashboard/*' element={<CompanyDashboard />}>
              <Route index path='company-name' element={<CompanyInfo />} />
              <Route path='profile' element={<CompanyProfile />} />
              <Route path='post-job' element={<PostJob />} />
              <Route path='manage-jobs' element={<ManageJobs />} />
              <Route path='job-applicant' element={<Applicant />} />
            </Route>

            <Route path='employee-dashboard/*' element={<EmployeeDashboard />}>
              <Route index path='employee-name' element={<EmployeeInfo />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='employee/:id' element={<EmployeeProfile />} />
            <Route path='companies' element={<Companies />} />
            <Route path='company/:id' element={<CompanyDetail />} />
            <Route path='employee' element={<Employee />} />
            <Route path='/jobs/:id' element={<JobDetail />} />
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<Jobs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
