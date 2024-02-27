import Image from "next/image";
import myImage from "@/../public/vercel.svg";

export default function Home() {
  return (
    <main>
      <p className="text-right">A little bit of text to style</p>
      <div class="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 w-max">
        Hey click me!
      </div>
      <Image src={myImage} alt="vercel logo" />
    </main>
  );
}
