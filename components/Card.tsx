import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import type { UrlObject } from "url";

type CardProps = {
  title: string;
  demo: string | UrlObject;
  repo: string | UrlObject;
  gradient: string;
};

export default function Card({ title, demo, repo, gradient }: CardProps) {
  return (
    <div
      className={clsx(
        "transform relative hover:scale-[1.01] transition-all hover:cursor-pointer rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1",
        gradient
      )}
    >
      <Link
        className="flex flex-col justify-between h-full bg-white rounded-lg p-4"
        href={demo}
        target="_blank"
      >
        <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 tracking-tight">
          {title}
        </h4>
      </Link>
      <Link
        className="absolute top-0 right-0 overflow-hidden rounded-tr-lg w-12 inline-block"
        href={repo}
        target="_blank"
      >
        <div className="relative h-[4.5rem] flex pl-1 pb-1 items-center justify-start bg-black -rotate-45 transform origin-top-left">
          <Image
            className="rotate-45"
            src="/github.svg"
            alt="GitHub"
            width={20}
            height={20}
          />
        </div>
      </Link>
    </div>
  );
}
