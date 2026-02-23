import Image from "next/image";
import Link  from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center gap-4 py-6 text-gray-600 bg-gray-200">
      <Link href="/" className="flex justify-items-center">
          <Image src="/images/logo.png" alt="logo" width={75} height={75} />
      </Link>
      <Link href="/" className="text-4xl text-center flex justify-items-center">
          <h1 className="pt-4">Manga List</h1>
      </Link>
    </header>
  );
};
