import { Home01Icon } from "@/components/icon/icons";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const Error404Page = () => {
  return (
    <main className="bg-[#ffffff] min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-extrabold text-[#000000]">404</h1>
      <p className="text-lg text-[#000000]">Sorry, this page will online very soon!</p>
      <Link href="/">
          <Button variant="default">
            <Home01Icon className="w-6 h-6 mr-2" /> Back home
          </Button>
      </Link>
    </main>
  );
};

export default Error404Page;
