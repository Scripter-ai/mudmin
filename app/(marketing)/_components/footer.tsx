import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 
import { LogoLight } from '@/components/logo/logo';

const Footer: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <footer className="bg-[#335343] pt-10">
      <div className="container mx-auto px-6 md:flex md:justify-between text-black">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0">
          {/* Icon/Logo */}
          <div className="flex items-center">
            <LogoLight />
          </div>
          {/* Contact Info */}
          <div className='text-white'>
            <p className="text-sm font-medium">Email</p>
            <p>Info@mudmin.nl</p>
          </div>
          <div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Call-to-Action Text */}
          <h3 className="text-lg font-semibold text-white">
            Jij bepaalt welke hulp bij jou past!
          </h3>
          {/* Buttons */}
          <div className="flex space-x-4">
            <Button variant="gethelp" onClick={openModal}>
              Intake
            </Button>
            <Link href="mailto:info@mudmin.nl">
              <Button variant="solid">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='border-b-8 border-b-[#FEFCF6] pt-10'>
      </div>
    </footer>
  );
};

export default Footer;
