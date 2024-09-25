import { Navbar } from "@/app/(marketing)/_components/navbar";
import CookieBanner from "@/components/ui/cookiebanner";
import { ModalProvider } from "@/context/modalcontext";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <ModalProvider>
      <div className="flex flex-row justify-center">
      <Navbar />
      </div>
      
      <main className="">
        {children}
      </main>
      <CookieBanner />
      <div>
        Footer
      </div>
      </ModalProvider>
    </div>

  );
};

export default MarketingLayout;
