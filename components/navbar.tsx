"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const { toggleSidebar, state } = useSidebar();
  return (
    <nav className="bg-background border-b border-secondary">
      <div className="flex items-center justify-between px-6 py-4">
        <div
          className="flex items-center gap-3 hover:cursor-pointer"
          onClick={toggleSidebar}
          aria-label={state === "collapsed" ? "Open sidebar" : "Close sidebar"}
        >
          <Image
            src="/budgie.png"
            alt="budgie"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="sr-only">Toggle sidebar</span>
        </div>

        <div className="flex items-center gap-2">
          <Link target="_blank" href="https://github.com/trybudgie/">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary hover:text-primary hover:bg-primary/10"
            >
              <Github className="h-10 w-10" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/company/trybudgie/">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary hover:text-primary hover:bg-primary/10"
            >
              <Linkedin className="h-10 w-10" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary hover:text-primary hover:bg-primary/10"
          >
            <Instagram className="h-10 w-10" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
