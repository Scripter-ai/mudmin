import Link from "next/link";
import Image from "next/image";

export const LogoLight = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo/mudminwhite.svg"} alt={""} width={150} height={66.5} className=""/>
      </div>
    </Link>
  );
};