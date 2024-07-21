import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='pt-10 sm:mt-10'>
      <div className='bg-[#6351ce] rounded-t text-slate-300 py-5 w-full flex justify-between px-4'>
        <div>Get connected with us on social networks: </div>
        <div className='flex items-center gap-x-2 text-white'>
          <Link to='https://x.com/DevWithNikola'>
            <XIcon className='cursor-pointer' />
          </Link>
          <Link to='https://www.linkedin.com/in/eyob-abdella-532554262/'>
            <LinkedInIcon className='cursor-pointer' />
          </Link>
          <Link to='https://www.facebook.com/eyob.tashome.3'>
            <FacebookIcon className='cursor-pointer' />
          </Link>
          <Link to='https://github.com/EyobAbdella'>
            <GitHubIcon className='cursor-pointer' />
          </Link>
        </div>
      </div>
      <div className='bg-[#1c2331] px-10 py-5 w-full m-auto text-slate-300 flex flex-wrap justify-between'>
        <div className='w-72'>
          <p className='font-semibold'>JOB BOARD</p>
          <p className='text-sm py-1 leading-6'>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Here you
            can use rows and columns to organize your footer content. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className='w-72 space-y-2'>
          <p className='font-semibold'>USEFULL LINKS</p>
          <p>Jobs</p>
          <p>Companies</p>
          <p>Employees</p>
          <p>Resume Builder</p>
        </div>
      </div>

      <div className='py-3.5 bg-[#151b26] text-center text-slate-300'>
        <p>© 2023 Job Board. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
