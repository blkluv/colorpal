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
          <a target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow text-black px-4 py-2 rounded-md font-semibold hover:bg-tint-teal active:scale-95 transition-all ease-in-out flex w-max gap-2 justify-center items-center">
              <Github className="w-6 h-6" />
              ARVRtise
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
