import { MenubarProps } from '@/types';
import React from 'react';

export const Menubar: React.FC<MenubarProps> = ({ title, submenu }) => {
  return (
    <div className="relative group">
      <button className="text-gray-600 hover:text-black transition-colors focus:outline-none">
        {title}
      </button>

      {submenu && (
        <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
          <ul className="py-2">
            {submenu.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                <a href={item.link} className="text-gray-700 block">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
