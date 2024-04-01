import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ManageJobs = () => {
  const jobs = [
    {
      title: "Software Engineering",
      Application: "6 Applied",
      created: "Jan 14, 2024",
      expired: "Feb 14, 2024",
      status: "Active",
    },
    {
      title: "Data Scientist",
      Application: "12 Applied",
      created: "Mar 20, 2024",
      expired: "Apr 20, 2024",
      status: "Expired",
    },
    {
      title: "Project Manager",
      Application: "4 Applied",
      created: "Feb 5, 2024",
      expired: "Mar 5, 2024",
      status: "Active",
    },
    {
      title: "UI/UX Designer",
      Application: "8 Applied",
      created: "Jan 30, 2024",
      expired: "Feb 28, 2024",
      status: "Active",
    },
    {
      title: "Backend Developer",
      Application: "3 Applied",
      created: "Apr 1, 2024",
      expired: "May 1, 2024",
      status: "Active",
    },
    {
      title: "Data Engineer",
      Application: "7 Applied",
      created: "Mar 10, 2024",
      expired: "Apr 10, 2024",
      status: "Expired",
    },
    {
      title: "DevOps Engineer",
      Application: "5 Applied",
      created: "Feb 15, 2024",
      expired: "Mar 15, 2024",
      status: "Expired",
    },
    {
      title: "Frontend Developer",
      Application: "9 Applied",
      created: "Jan 25, 2024",
      expired: "Feb 25, 2024",
      status: "Expired",
    },
    {
      title: "Quality Assurance",
      Application: "2 Applied",
      created: "Apr 5, 2024",
      expired: "May 5, 2024",
      status: "Active",
    },
    {
      title: "Technical Writer",
      Application: "1 Applied",
      created: "Mar 1, 2024",
      expired: "Apr 1, 2024",
      status: "Expired",
    },
  ];

  return (
    <div className='lg:px-14 md:px-10 mb-auto mt-10 w-full space-y-6 overflow-scroll'>
      <h1 className='text-3xl font-[500] font-sans'>Manage Jobs</h1>
      <div className='space-x-1.5 font-[500] text-gray-500'>
        <span>Job Board</span>
        <span>/</span>
        <span>DashBoard</span>
        <span>/</span>
        <span className='text-indigo-400 cursor-pointer'>Manage Jobs</span>
      </div>
      <div className='border border-gray-200 rounded-lg space-y-3'>
        <div className='flex justify-center items-center py-8 bg-gray-100'>
          <p className='text-xl font-[500]'>Showing 1-10 of 07 Job</p>
        </div>
        <div className='overflow-x-auto w-full'>
          <table className='w-full text-center border-b mx-5  border-gray-200'>
            <thead className='uppercase border-b border-gray-400 text-slate-700'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Application
                </th>
                <th scope='col' className='px-6 py-3'>
                  Created
                </th>
                <th scope='col' className='px-6 py-3'>
                  Expired
                </th>
                <th scope='col' className='px-6 py-3'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((items, index) => (
                <tr
                  key={index}
                  className='border-b border-gray-400 text-slate-800 mx-10'>
                  <td className='min-w-40 py-5 text-start'>{items.title}</td>
                  <td>{items.Application}</td>
                  <td>{items.created}</td>
                  <td>{items.expired}</td>
                  <td>{items.status}</td>
                  <td className='space-x-4'>
                    <span className='bg-indigo-100 cursor-pointer  px-2 py-1.5 rounded-md'>
                      <RemoveRedEyeOutlinedIcon
                        sx={{ fontSize: 18, color: "#6a52aecb" }}
                      />
                    </span>
                    <span className='bg-indigo-100 cursor-pointer pl-1.5 pr-1 py-1.5 rounded-md'>
                      <EditNoteIcon sx={{ fontSize: 24, color: "#6a52aecb" }} />
                    </span>
                    <span className='bg-indigo-100 cursor-pointer px-2 py-1.5 rounded-md'>
                      <DeleteOutlineIcon
                        sx={{ fontSize: 22, color: "#6a52aecb" }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
