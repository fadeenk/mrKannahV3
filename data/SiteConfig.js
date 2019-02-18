const config = {
  siteTitle: "Mr. Kannah", // Site title.
  siteTitleShort: "Mr. Kannah", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://mrkannah.com", // Domain of your website without pathPrefix.
  pathPrefix: "/mrKannahV2", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Fadee Kannah's portfolio site. Includes everything you need to know about me.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-XXXXXXX-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userTwitter: "", // used for SEO.
  copyright: "Fadee Kannah © 2019", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#26a69a", // Used for setting manifest and progress theme colors.
  backgroundColor: "#1c313a", // Used for setting manifest background color.
  primary: {
    light: "#63d7cb",
    main: "#25a59a",
    dark: "#00756c"
  },
  secondary: {
    light: "#718792",
    main: "#455a64",
    dark: "#1c313a"
  }
};

// Validate

// Make sure pathPrefix only contains the first forward slash
config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
