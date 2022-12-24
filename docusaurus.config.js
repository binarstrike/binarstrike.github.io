// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blogger Gabut",
  tagline: "Cuman Blog kecil yang membagikan tutorial seputar IT",
  url: "https://web.binarstrike.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "binarstrike", // Usually your GitHub org/user name.
  projectName: "binarstrike.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Blogger Gabut",
        logo: {
          alt: "My Site Logo",
          src: "https://github.com/binarstrike.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/binarstrike",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Let's connect",
            items: [
              {
                label: "Email",
                to: "mailto:binarnugroho775@gmail.com",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord Server",
                href: "https://discord.gg/z7d9HPysCs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/binarstrike",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blogger Gabut, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
