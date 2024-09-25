"use client"

import { ModalContextType } from '@/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

export const ModalProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{
      isModalOpen, 
      openModal, 
      closeModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
};
