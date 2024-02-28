import Link from "next/link";
export const metadata = {
  title: "Posts - Next.js",
  description: "A simple blog built with Next.js",
};

export default function PostPage() {
  return (
    <div>
      <h2>What Are Tigers? 🐅</h2>
      <p>
        The tiger is the largest living cat species and a member of the genus
        Panthera. It is most recognisable for its black stripes on orange fur
        with a white underside. An apex predator, it primarily preys on
        ungulates, such as deer and wild boar.{" "}
      </p>
      <Link
        href="/"
        className="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 w-max"
      >
        Home
      </Link>
    </div>
  );
}
