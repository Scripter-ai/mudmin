import Image from "next/image";
import { Button } from "@/components/ui/button";

const Mission = (props: any) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/svg/mudminhomepage.svg"
            alt="Doctor Illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Hoe kunnen wij <span className="text-[#AE6034]">helpen</span>?
          </h2>
          <p className="text-lg text-gray-700">
            We werken samen met wereldklasse-experts om welzijnsgerichte hulpmiddelen en cursussen te creëren die duurzame groei bevorderen.
          </p>
          <p className="text-lg text-gray-700">
            We nemen datagestuurde beslissingen rondom jouw welzijnsstrategie.
          </p>

          {/* Call to Action Button */}
          <Button variant="secondary">
            Plan een afspraak
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
