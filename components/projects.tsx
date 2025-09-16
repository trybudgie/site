import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Code, Activity } from "lucide-react";

interface Props {
  projects: Project[];
  year: number;
}

export default function Projects({ projects, year }: Props) {
  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return "bg-green-200 text-green-900 border-green-300";
      case "beta":
        return "bg-blue-200 text-blue-900 border-blue-300";
      case "archived":
        return "bg-gray-200 text-gray-900 border-gray-300";
      default:
        return "bg-gray-200 text-gray-900 border-gray-300";
    }
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return <Activity className="h-3 w-3" />;
      case "beta":
        return <Code className="h-3 w-3" />;
      case "archived":
        return <Users className="h-3 w-3" />;
      default:
        return <Activity className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6 bg-background m-8">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg hover:cursor-pointer transition-all duration-200 border-secondary text-secondary bg-background"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge
                    variant="outline"
                    className={`${getStatusColor(
                      project.status
                    )} flex items-center gap-1`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status}
                  </Badge>
              </div>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span className="font-medium">{project.users}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-secondary/70">
            <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No projects for {year}</p>
          </div>
        </div>
      )}
    </div>
  );
}
