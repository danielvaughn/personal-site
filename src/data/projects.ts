export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Matry",
    techs: ["C", "JavaScript", "Rust"],
    link: "https://github.com/matry/tree-sitter-matry",
  },
  {
    title: "Stride",
    techs: ["TypeScript"],
    link: "https://github.com/danielvaughn/stride-editor",
  },
];

export default projects;
