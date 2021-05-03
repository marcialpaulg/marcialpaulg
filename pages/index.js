import Image from "next/image";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const humor = `<?php

  namespace Marcialpaulg;

  class About extends Me
  {
      use CLevelPosition;
      use KeepLearning;

      public const pronouns = [ 'he', 'him' ];

      private $is_hiring = true;

      public function isHiringAtTheCompany(): bool
      {
          return $this->is_hiring;
      }

      public function getContact(): LinkedinProfileLink|GmailEmail
      {
          return $this->getActiveContact();
      }

      public function getKnowledge(): array
      {
          return [
              Php::class,
              Laravel::class,
              Javascript::class,
              TailwindCss::class,
              CloudflareServices::class,
              Solidity::class
          ];
      }

      public function getWork(): ExcitingProject
      {
          return $this->getExcitingProject();
      }
  }`;

  return (
    <div>
      <main class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex">
          <div class="hidden w-full max-w-xs text-center lg:block">
            <Image
              class="rounded-full"
              src="/mars_profile.jpg"
              width="125"
              height="125"
            />
          </div>
          <div class="max-w-xl">
            <h2 class="text-white text-xl">Howdy, Marcial here. 👋</h2>
            <p>
              I'm a Full-Stack Developer near Davao city, Philippines. I'm a
              Senior Engineer and Founder at{" "}
              <a href="#" target="_blank" rel="noopener" class="underline">
                Couple of Exciting Companies
              </a>
              .
            </p>

            <div class="w-full mt-8">
              <div class="pt-4 text-gray-100 text-sm font-mono bg-gray-800 rounded-lg overflow-hidden">
                <div class="top mb-2 flex px-5">
                  <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div class="ml-2 h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="mt-4 -mb-2">
                  <SyntaxHighlighter
                    language="php"
                    style={tomorrow}
                    wrapLines={true}
                    showLineNumbers={true}
                  >
                    {humor}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <p class="mt-8">
              <a href="https://github.com/marcialpaulg" rel="noreferrer">
                <span class="text-white">github</span>{" "}
                <span class="underline">@marcialpaulg</span>
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/marcialpaulg/"
                rel="noreferrer"
              >
                <span class="text-white">linkedin</span>{" "}
                <span class="underline">@marcialpaulg</span>
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
