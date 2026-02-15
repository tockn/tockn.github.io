export interface CareerEntry {
  company: string;
  period: string;
  description: string;
  techStack: string[];
}

export const career: CareerEntry[] = [
  {
    company: "Your Company",
    period: "2022 - Present",
    description: "ここに経歴の説明を書いてください。",
    techStack: ["Go", "TypeScript", "AWS"],
  },
  {
    company: "Previous Company",
    period: "2020 - 2022",
    description: "ここに経歴の説明を書いてください。",
    techStack: ["React", "Node.js", "GCP"],
  },
];
