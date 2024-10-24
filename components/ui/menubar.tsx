import { MenubarProps } from '@/types';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';

export const Menubar: React.FC<MenubarProps> = ({ title, submenu }) => {
  return (
    <div className="relative group">
      <Button variant="default">
        {title}
      </Button>

      {submenu && (
        <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
          <ul className="py-2">
            {submenu.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                <Link href={item.link}>
                  <p className="text-gray-700 font-extrabold">{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
