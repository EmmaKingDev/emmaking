export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "HSL LATENESS",
    description:
      "Daily public transportation delay tracker for Helsinki region",
    image: "/projects/hsl-lateness.png",
    githubUrl: "https://github.com/emmakingdev/hsl-lateness",
  },
  {
    title: "KELA DOCS MCP",
    description: "MCP for Finnish social security services",
    image: "/projects/kela-mcp.png",
    githubUrl: "https://github.com/EmmaKingDev/kela-mcp",
  },
  {
    title: "COLORKU APP",
    description: "A color based sudoku",
    image: "/projects/colorku.png",
    githubUrl: "https://github.com/EmmaKingDev/colorku",
  },
  {
    title: "KNITTING CHART",
    description: "Knitting chart planner",
    image: "/projects/knitting-chart.png",
    githubUrl: "https://github.com/EmmaKingDev/knitting-chart",
  },
];
