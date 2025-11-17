"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "falcon",
    description: "stop doomscrolling for internships.",
    image: "/falcon.png",
    url: "https://tryfalcon.io",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full py-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Image
              className="rounded-full"
              src="/budgie.png"
              alt="budgie"
              width={50}
              height={50}
            />
          </div>

          <h1 className="text-4xl font-medium mb-2 text-balance">
            meet, budgie
          </h1>

          <p className="text-xl text-neutral-500 mb-4 text-pretty">
            making a flock of software.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-black text-white hover:bg-neutral-800 rounded-full px-6"
            >
              <Link href="https://github.com/trybudgie">github</Link>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-neutral-500 mb-8">works</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                target="_blank"
                key={project.name}
                href={project.url}
                className="flex items-start p-2 rounded-full gap-2 transition-all duration-300 hover:bg-[#FEFEFF] hover:shadow-2xl"
              >
                <Image
                  className="rounded-full"
                  src={project.image}
                  alt={project.name}
                  width={50}
                  height={50}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-neutral-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-sm text-neutral-400">
          <p>© 2025 budgie private limited. all rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
