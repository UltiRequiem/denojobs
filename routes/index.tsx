/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, Head, tw } from "../client_deps.ts";

import { Footer, NavigationBar } from "../components/mod.ts";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>DenoJobs - Jobs using Deno.</title>
        <meta
          name="description"
          content="Jobs using the modern JavaScript runtime, Deno."
        />
      </Head>
      <Hero />
      <NavigationBar active="/" />
      <Intro />
      <Footer />
    </>
  );
}

function Hero() {
  const container = tw`w-full h-64 flex justify-center items-center flex-col`;
  const title = tw
    `text(4xl sm:5xl lg:6xl gray-900 center) sm:tracking-tight font-extrabold`;
  const subtitle = tw`mt-4 text(2xl gray-600 center)`;

  return (
    <section class={container}>
      <h1 class={title}>DenoJobs</h1>
      <p class={subtitle}>
        Jobs using the modern JavaScript runtime,{" "}
        <a
          class={tw`text-blue-600 font-extrabold`}
          href="https://deno.land"
          target="_blank"
        >
          Deno
        </a>
        .
      </p>
    </section>
  );
}

function Intro() {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <p class={tw`text-gray-600 text-lg font-extrabold`}>Why Deno?</p>
      <ul class={tw`text-gray-600 list-disc list-inside pl-4`}>
        <li>
          <b>Is secure by default.</b>{" "}
          No file, network, or environment access, unless explicitly enabled.
        </li>

        <li>
          <b>Good Development Experience.</b>{" "}
          Supports TypeScript out of the box, has built-in utlities like a
          dependency inspector and a code formatter.
        </li>

        <li>
          <b>Ships only a single executable file.</b> Easy deployment.
        </li>

        <li>
          <b>Rich Standard Library.</b>{" "}
          It has a set of reviewed and audited standard modules.
        </li>

        <li>
          <b>It's being exponentially adopted.</b>{" "}
          <a
            class={tw`text-blue-900 underline`}
            href="https://github.com/denoland/deno/wiki#companies-interested-in-deno"
          >
            {" "}
            See all the companies interested in using and exploring Deno.
          </a>
        </li>
      </ul>

      <button
        class={tw
          `bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`}
      >
        <a
          class={tw`text-blue-600 font-extrabold text-lg hover:text-3xl mt-5`}
          href="/jobs"
        >
          Publish a Job Offer
        </a>
      </button>

      <button
        class={tw
          `ml-52 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`}
      >
        <a
          class={tw`text-blue-600 font-extrabold text-lg hover:text-3xl mt-5`}
          href="/jobs/backend"
        >
          Find a Job
        </a>
      </button>
    </section>
  );
}
