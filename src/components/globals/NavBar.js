import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-4 flex w-full items-center justify-between mb-10 md:mb-24">
      <Link href="/dashboard" className="flex items-center outline-none">
        <img
          src="logo.png"
          alt=""
          className="w-12 h-12 pointer-events-none"
          draggable="false"
        />
        <span className="text-3xl font-bold text-yellow">ColPat</span>
      </Link>
      <div className="">
        <Link href="https://www.buymeacoffee.com/vishwagauravin">
          <button className="bg-yellow text-black px-6 py-2 rounded-md font-semibold hover:bg-tint-teal active:scale-95 transition-all ease-in-out">Help Us</button>
        </Link>
      </div>
    </div>
  );
}
