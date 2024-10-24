"use client"

import { Navbar } from "@/app/(marketing)/_components/navbar";
import CookieBanner from "@/components/ui/cookiebanner";
import { ModalProvider } from "@/context/modalcontext";
import Footer from "./_components/footer";
import { useState } from 'react';
import IntakeModal from "@/components/modal/intake";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  // Modal state for IntakeModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-full">
      <ModalProvider>
        {/* Pass openModal to Navbar and Footer */}
        <div className="flex flex-row justify-center">
          <Navbar openModal={openModal} />
        </div>
        
        <main className="">
          {children}
        </main>

        <CookieBanner />
        
        <Footer openModal={openModal} />

        {/* Intake Modal */}
        <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
      </ModalProvider>
    </div>
  );
};

export default MarketingLayout;
