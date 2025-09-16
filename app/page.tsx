"use client";

import { useState } from "react";
import { YEARS } from "@/lib/data";
import { SidebarProvider } from "@/components/ui/sidebar";

import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import AppSidebar from "@/components/app-sidebar";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(2025);

  const selectedYearData = YEARS.find((year) => year.year === selectedYear);
  const projects = selectedYearData?.projects || [];

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider defaultOpen>
        <AppSidebar
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <div className="w-full">
          <Navbar />
          <Projects projects={projects} year={selectedYear} />
        </div>
      </SidebarProvider>
    </div>
  );
}
