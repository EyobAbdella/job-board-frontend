import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const CompanyInfo = () => {
  return (
    <div className='lg:px-14 md:px-10 mb-auto mt-10 w-full space-y-6'>
      <h1 className='text-3xl font-[500] font-sans'>Company Dashboard</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>All Applicants</span>
      </div>

      <div className='flex space-x-4'>
        <div className='h-56 w-48 rounded-xl border border-gray-300 flex justify-center items-center'>
          <div>
            <div className='p-4 bg-blue-100 lbg-[#4568bb] rounded-lg flex justify-center items-center'>
              <BusinessCenterOutlinedIcon
                sx={{ fontSize: 50, color: "#4568bb" }}
              />
            </div>
            <p className='text-2xl text-center font-semibold mt-5'>300</p>
            <p className='font-thin mt-1'>Posted Jobs</p>
          </div>
        </div>
        <div className='h-56 w-48 rounded-xl border border-gray-300 flex justify-center items-center'>
          <div>
            <div className='p-4 bg-teal-100 lbg-[#408796] rounded-lg flex justify-center items-center'>
              <MessageOutlinedIcon sx={{ fontSize: 50, color: "#408796" }} />
            </div>
            <p className='text-2xl text-center font-semibold mt-5'>80</p>
            <p className='font-thin mt-1'>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
