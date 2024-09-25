import Link from "next/link";
import Image from "next/image";

export const LogoDark = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo/opprdark.svg"} alt={""} width={110} height={66.5}/>
      </div>
    </Link>
  );
};