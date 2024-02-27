import Image from "next/image";
import myImage from "@/../public/vercel.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-right">A little bit of text to style</p>
      <Image src={myImage} alt="vercel logo" />
      <Link
        href="/post"
        className="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 w-max"
      >
        Post
      </Link>
    </main>
  );
}
