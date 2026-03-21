import { X } from 'lucide-react';

const Navigations = ({ulStyle}) => {

  return (
    <>
        <ul className={ulStyle}>
          <li className='hover:border-b-[#3075f469]'><a href="#">Home</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#blog">Blogs</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#about">About Us</a></li>
        </ul>
    </>
  );
};

export default Navigations;