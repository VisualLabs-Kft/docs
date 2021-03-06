const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Visual Labs Docs",
    tagline: "<valami frappáns>",
    url: "https://agreeable-smoke-0b9e33a03.azurestaticapps.net",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "VisualLabsKft", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/VisualLabs-Kft/docs/blob/main/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: "https://github.com/VisualLabs-Kft/docs/blob/main/",
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
          title: "docs",
          logo: {
            alt: "visual labs logo",
            src: "img/logo.svg",
          },
          items: [
            // {
            //   type: "doc",
            //   docId: "intro",
            //   position: "left",
            //   label: "Tutorial",
            // },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc0",
              position: "left",
              label: "Tutorials",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc1",
              position: "left",
              label: "Power Platform",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc2",
              position: "left",
              label: "CRM Solutions",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc3",
              position: "left",
              label: "Collaboration Solutions",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc4",
              position: "left",
              label: "ERP Solutions",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc5",
              position: "left",
              label: "Microsoft Platforms",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc6",
              position: "left",
              label: "Services",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc7",
              position: "left",
              label: "Projects",
            },
            {
              type: "docSidebar",
              sidebarId: "sidebarDoc8",
              position: "left",
              label: "Biblia",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/facebook/docusaurus",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
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
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Visual Labs Kft.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
