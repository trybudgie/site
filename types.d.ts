interface Project {
  name: string
  description: string
  users: string
  status: "live" | "beta" | "archived"
}

interface Year {
  year: number
  projects: Project[]
}