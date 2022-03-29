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
      <Example />
      <Footer />
    </>
  );
}

function Hero() {
  const container = tw`w-full h-64 flex justify-center items-center flex-col`;
  const title = tw`text(4xl sm:5xl lg:6xl gray-900 center) sm:tracking-tight font-extrabold`;
  const subtitle = tw`mt-4 text(2xl gray-600 center)`;

  return (
    <section class={container}>
      <h1 class={title}>DenoJobs</h1>
      <p class={subtitle}>Jobs using the modern JavaScript runtime, Deno.</p>
    </section>
  );
}

function Intro() {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <p class={tw`text-gray-600`}>Deno is cool</p>
      <ul class={tw`text-gray-600 list-disc list-inside pl-4`}>
        <li>
          <b>Feature One</b>
        </li>
        <li>
          <b>Feature 2</b>
        </li>
        <li>
          <b>Feature 3</b>.
        </li>
      </ul>
      <p class={tw`text-gray-600`}>More info</p>
    </section>
  );
}

function Example() {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <h2 id="example" class={tw`text(xl gray-600) font-bold`}>
        <a href="#example" class={tw`hover:underline`}>
          Example
        </a>
      </h2>
      <p class={tw`text-gray-600`}>Some text</p>
      <p class={tw`text-gray-600`}>More info</p>
      <p class={tw`text-gray-600`}>Learn Deno</p>
    </section>
  );
}
