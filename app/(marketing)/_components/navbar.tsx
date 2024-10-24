import { LogoLight } from '@/components/logo/logo';
import { Button } from '@/components/ui/button';
import React from 'react';

export const Navbar = ({ openModal }: { openModal: () => void }) => {
  return (
    <header className="w-full bg-[#335343] h-20 z-50">
      <nav className="container mx-auto flex items-center justify-between h-full">

        {/* Logo */}
        <div className="flex items-center h-full">
          <LogoLight />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4 h-full">
          
          {/* Get Started Button */}
          <Button variant="solid" onClick={openModal}>
            Start nu
          </Button>
        </div>
      </nav>
    </header>
  );
};
