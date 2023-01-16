import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import type { NextPage } from "next";

import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen bg-main">
      <div className="absolute flex w-full h-full bg-white/90 overflow-auto backdrop-blur-2xl flex-col pt-12 sm:pt-24 md:pt-36">
        <main className="flex px-4 flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
          <Head>
            <title>Niks Birzgalis - Developer</title>
            <meta
              name="description"
              content="Niks Birzgalis - IT student and developer"
            />
          </Head>
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
                Niks Birzgalis
              </h1>
              <h2 className="text-gray-700 mb-4">
                Passionate IT student at{" "}
                <Link
                  className="font-semibold hover:underline"
                  href="https://lbtu.lv/"
                  target="_blank"
                >
                  Latvia University of Life Sciences and Technologies
                </Link>
              </h2>
              <p className="text-gray-600 mb-16">
                Building performant solutions with modern approach to problems
                with React / Next.js, TailwindCSS, GraphQL and TypeScript.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Niks Birzgalis"
                sizes="30vw"
                src="/favatar.webp"
                width="176"
                height="176"
                className="rounded-full filter grayscale"
                style={{ color: "transparent" }}
                priority
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
            Projects
          </h3>
          <div className="flex gap-6 mb-16 flex-col md:flex-row">
            <Card
              title="Manage projects easily - Kanban"
              demo="https://www.kanban.lv"
              repo="https://github.com/birzgalisn/kanban"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <Card
              title="Find the best and most reviewed films - _CINEMA"
              demo="https://cinema.niksbirzgalis.com"
              repo="https://github.com/birzgalisn/www"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black">
            Links
          </h3>
          <ul className="list-disc marker:text-gray-300 flex flex-col gap-2 list-inside text-gray-600">
            <li>
              GitHub:{" "}
              <Link
                className="text-blue-600 hover:underline hover:text-blue-800"
                href="https://github.com/birzgalisn"
                target="_blank"
              >
                @birzgalisn
              </Link>
            </li>
            <li>
              Website:{" "}
              <Link
                className="text-blue-600 hover:underline hover:text-blue-800"
                href="https://www.niksbirzgalis.com"
                target="_blank"
              >
                https://www.niksbirzgalis.com
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <Link
                className="text-blue-600 hover:underline hover:text-blue-800"
                href="https://www.linkedin.com/in/birzgalisn"
                target="_blank"
              >
                https://www.linkedin.com/in/birzgalisn
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Home;
