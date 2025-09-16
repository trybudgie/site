import { YEARS } from "@/lib/data";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Props {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export default function AppSidebar({ selectedYear, setSelectedYear }: Props) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-secondary font-bold">
            Years
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {YEARS.map((year) => (
                <SidebarMenuItem key={year.year}>
                  <SidebarMenuButton
                    asChild
                    autoFocus={true}
                    className={cn(
                      "bg-background active:bg-background",
                      selectedYear === year.year
                        ? "text-primary hover:text-primary bg-primary/10 hover:bg-primary/20 active:text-primary active:bg-primary/30"
                        : "text-secondary hover:text-primary hover:bg-primary/10 active:text-primary active:bg-primary/10"
                    )}
                    onClick={() => setSelectedYear(year.year)}
                  >
                    <span>{year.year}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
