import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className='text-4xl md:text-5xl font-semibold mb-5 text-gray-900'>All the flags of the world</h2>
      <p className='text-justify leading-relaxed text-lg'>
        At Countryflags.com you can find all country flags displayed clearly. You can sort the flags alphabetically by name of the country, but also by population and size of the country. Countries can also be clearly displayed by continent. Each flag has a description and it is also indicated which colours are used and what the original proportion of the flag is. It is also stated when a country adopted a flag for the first time, when the current flag was first used and when the last modification was made to the current flag. At Countryflags.com you can find a large collection of images of all the flags of the world. Choose from vector files, images, backgrounds or our extensive collection of icons of each country. The images are of high quality.
      </p>
      <br />
      <p className='text-justify leading-relaxed text-xl'>
        In addition to the information about the <span className='text-blue-600 hover:underline cursor-pointer'>flags of the world</span> you will also find information about all countries. With each flag a map is displayed of the country with the location of the country in the world. Here you will find general information about the countries, such as the population, size, population density, capital, official language, government, currency and time zone. With each flag you can view the neighbouring countries and you can also see what the national flags of the neighbouring countries look like.
      </p>
    </div>
  );
};

export default About;