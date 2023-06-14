import Link from "next/link";
import { Github } from "react-bootstrap-icons";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="p-4 flex w-full items-center justify-between mb-10 md:mb-24">
      <Link href="/dashboard" passHref>
        <a className="flex items-center outline-none">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="pointer-events-none"
            draggable="false"
          />
          <span className="text-3xl font-bold text-yellow">AICOLOR</span>
        </a>
      </Link>
      <div className="">
        <Link href="https://arvrtise.com" passHref>
          <a target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <button className="bg-yellow text-black px-4 py-2 rounded-md font-semibold hover:bg-tint-teal active:scale-95 transition-all ease-in-out">
              ARVRtise
            </button>
            <span className="hidden md:block">
              <Github className="w-6 h-6" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
