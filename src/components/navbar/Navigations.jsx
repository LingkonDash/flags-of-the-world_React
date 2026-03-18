import { X } from 'lucide-react';

const Navigations = ({ulStyle}) => {

  return (
    <>
        <ul className={ulStyle}>
          <li className='hover:border-b-[#3075f469]'><a href="#">Home</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#">Blogs</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#">About Us</a></li>
        </ul>
    </>
  );
};

export default Navigations;