import { LogoDark } from '@/components/logo/logodark';
import { Button } from '@/components/ui/button';
import { Menubar } from '@/components/ui/menubar';
import { menuItems } from '@/content/menuitems';
import React from 'react';

export const Navbar = () => {
  return (
    <header className="w-full container py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <LogoDark/>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <Menubar key={index} title={item.title} submenu={item.submenu} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="secondary">
            Sign-in
          </Button>
          <Button variant="outline">
            Try Now
          </Button>
        </div>
      </nav>
    </header>
  );
};
