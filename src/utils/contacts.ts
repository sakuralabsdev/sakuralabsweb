export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsapp: {
    number: string;
    link: string;
  };
  email: string;
  domainEmail?: string;
  website: string;
  domain: string;
  location: string;
  socials: {
    instagram: {
      handle: string;
      link: string;
    };
    linkedin: string;
    twitter?: string;
    github?: string;
    discord?: string;
  };
}

export const contactDetails: ContactInfo = {
  phone: "+918714244119",
  phoneFormatted: "+91 87142 44119",
  whatsapp: {
    number: "+918714244119",
    link: "https://wa.me/918714244119",
  },
  email: "sakuralabs.dev@gmail.com",
  domainEmail: "hello@sakuralabs.in",
  website: "https://www.sakuralabs.in",
  domain: "sakuralabs.in",
  location: "India",
  socials: {
    instagram: {
      handle: "@sakuralabs",
      link: "https://www.instagram.com/sakuralabs",
    },
    linkedin: "https://www.linkedin.com/company/sakuralabsofficial/",
    twitter: "https://twitter.com/sakuralabs",
    github: "https://github.com/sakuralabs",
    discord: "https://discord.gg/sakuralabs",
  },
};
