import Link from "next/link";
import Image from "next/image";

export const LogoMobileDark = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2">
        <Image
          src="/opprdark.svg"
          alt="Logo"
          height={100}
          width={100}
        />
      </div>
    </Link>
  );
};