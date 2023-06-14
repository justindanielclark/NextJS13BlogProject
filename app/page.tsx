import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";
import "highlight.js/styles/atom-one-dark.css";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Dave</span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </main>
  );
}
