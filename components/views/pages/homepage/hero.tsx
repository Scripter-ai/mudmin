import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-screen bg-[#F2F2F0] pt-10 pb-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-12">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-[#000000]">
            Seamless Frontline Communication
            <br />
            with{" "}
            <span className="text-[#02C5D1] bg-[#02C5D1]/20 px-2 rounded-md">
              AI-powered
            </span>{" "}
            Knowledge Management
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-md md:text-lg lg:text-xl text-[#000000]">
              Supercharge your frontline with instant access to critical
              information and real-time activity capture. Drive continuous
              improvement and make Operational Excellence into an achievable
              reality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Link href="/tryout">
              <Button variant="default">
                <div className="flex flex-row justify-between gap-4">
                  <p>Let&apos;s Talk</p>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/svg/opprhomeimage.svg"
            alt="homepage"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
