type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "danielbvaughn@gmail.com",
  title: "Hello there 👋",
  // profile: "/profile.webp",
  description: "",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/danielvaughn",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vaughndaniel",
    },
    {
      label: "Github",
      link: "https://github.com/danielvaughn",
    },
  ],
};

export default presentation;
