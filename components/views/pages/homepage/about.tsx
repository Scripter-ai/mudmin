import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = (props) => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 py-20">
      {/* Left Content Section */}
      <div className="lg:w-1/2 px-8 lg:px-20 flex flex-col space-y-6">
        {/* Label */}
        <div className="text-gray-600 font-medium text-sm">About Lively</div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Advancing health with accessible wellness
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700">
          Your path to better health starts here with accessible and reliable care tailored to meet your unique needs.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
            Get Started Today
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        {/* Replace with your image */}
        <Image
          src="/path-to-your-image.jpg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutPage;
