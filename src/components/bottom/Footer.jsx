import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1600px] mx-auto flex justify-between mt-5 py-6 px-10 md:px-[60px] flex-wrap gap-5 bg-base-200 rounded-xl'>
      <div className='[&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <p>License agreement</p>
        <p>Terms and Conditions</p>
        <p>About Countryflags.com</p>
      </div>
      <div className='[&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <p>Disclaimer</p>
        <p>Privacy Policy</p>
      </div>
      <div className='[&_p]:w-fit flex flex-col lg:items-end space-y-1'>
        <p>&copy; copyright 2026 <span className='text-blue-500 hover:underline hover:cursor-pointer'>Country flags</span> - part of ProFlags BV</p>
        <p className='text-left'>cocrupon@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;