import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-6xl subpixel-antialiased font-bold self-center">
            Next.js Project Setup and Basics
          </h1>
        <div className="flex gap-8 items-center self-center flex-col sm:flex-row">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src="/tailwind.png"
            alt="tailwindcss logo"
            width={180}
            height={48}
            priority
          />
          <Image
            className="light:invert object-contain"
            src="/typescript.svg"
            alt="typescript logo"
            width={180}
            height={38}
            priority
          />

        </div>

        <article className="text-wrap flex flex-col gap-[32px] pt-5 items-center mx-50">
          <h2 className="text-4xl subpixel-antialiased font-bold">
            Project Description
          </h2>
          <p>
            This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS.
            It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure.
            The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.
          </p>
          <h2 className="text-4xl subpixel-antialiased font-bold">
            Learning Objectives
          </h2>
          <h3 className="text-2xl subpixel-antialiased font-bold self-start">
            By completing this project, you will:
          </h3>
          <ul className="list-disc self-start">
            <li>Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS</li>
            <li>Learn to implement basic routing in Next.js using the Pages Router</li>
            <li>Create reusable components with TypeScript interfaces</li>
            <li>Implement interactive UI elements like modals and buttons</li>
            <li>Fetch and display data from external APIs</li>
            <li>Structure a Next.js project following best practices</li>
            <li>Work with component props and state management</li>
            <li>Build responsive layouts with navigation</li>
          </ul>

        </article>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
