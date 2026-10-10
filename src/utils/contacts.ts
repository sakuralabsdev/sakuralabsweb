export interface ContactInfo {
  email: string;
  website: string;
  domain: string;
  location: string;
  socials: {
    twitter: string;
    github: string;
    discord: string;
    linkedin: string;
    instagram: string;
  };
}

export const contactDetails: ContactInfo = {
  email: "hello@sakuralabs.in",
  website: "https://www.sakuralabs.in",
  domain: "sakuralabs.in",
  location: "India",
  socials: {
    twitter: "https://twitter.com/sakuralabs",
    github: "https://github.com/sakuralabs",
    discord: "https://discord.gg/sakuralabs",
    linkedin: "https://linkedin.com/company/sakuralabs",
    instagram: "https://instagram.com/sakuralabs",
  },
};
