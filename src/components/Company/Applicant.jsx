import { Avatar } from "@mui/material";
import Profile from "../../assets/profile.png";

const Applicant = () => {
  return (
    <div className='lg:px-14 md:px-10 mb-auto mt-10 w-full space-y-6'>
      <h1 className='text-3xl font-[500] font-sans'>All Applicants</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span>DashBoard</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>All Applicants</span>
      </div>
      <div className='border border-gray-200 rounded-lg pb-5 space-y-3'>
        <p className='text-xl bg-gray-100 font-semibold border-b border-gray-200 py-6 px-8 w-full'>
          Senior Front-end Developers
        </p>
        <div className='px-4'>
          <div className='flex items-center border border-gray-200 rounded-lg px-3 py-6 gap-x-5'>
            <Avatar src={Profile} sx={{ width: 90, height: 90 }} />
            <div>
              <h1 className='text-xl font-[500]'>John Smith</h1>
              div
              <p>Software Engineer</p>
            </div>
            <div className='ml-auto'>
              <button className='w-44 text-white bg-indigo-500 hover:bg-indigo-400 rounded-md py-2.5'>
                Show Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
